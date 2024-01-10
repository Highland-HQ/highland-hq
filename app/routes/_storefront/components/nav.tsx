import { useEffect, useRef, useState } from "react";
import { Link, useOutletContext } from "@remix-run/react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { Button } from "~/components/ui/button";

import { Menu, Search } from "lucide-react";

import { UserDropdown } from "./user-dropdown";
import { StorefrontBag } from "./bag";
import { StorefrontMobileMenu } from "./mobile-menu";
import { links } from "./nav-data";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export const Nav = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const lastScrollTop = useRef(0);

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (currentScroll < 400) {
      setIsHidden(false);
    } else if (currentScroll > lastScrollTop.current) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    lastScrollTop.current = currentScroll;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navStyle = {
    top: isHidden ? "-100%" : "0",
    transition: "top 0.5s ease-in-out",
  };

  const [font, setFont] = useState("playfair");

  return (
    <NavigationMenu
      style={navStyle}
      className="flex flex-col z-20 max-w-screen py-2 gap-2 bg-background fixed w-full shadow-md"
    >
      <div className="flex items-center justify-between w-full px-2 md:container">
        <div>
          <StorefrontMobileMenu />

          <Button size="icon" variant="ghost">
            <Search />
          </Button>
        </div>
        <div className="font-pt text-2xl font-bold">HIGHLAND</div>
        <div className="font-overlock text-2xl font-bold">HIGHLAND</div>
        <div className="font-cinzel text-2xl font-bold">HIGHLAND</div>
        <div className="font-playfair text-2xl font-bold">HIGHLAND</div>
        <div className="font-almarai text-2xl font-bold">HIGHLAND</div>
        <div className="flex items-center justify-end">
          <StorefrontBag />
          <UserDropdown />
        </div>
      </div>

      <NavigationMenuList className="hidden md:block">
        <NavigationMenuItem>
          {links.map(({ title, link }) => (
            <Link to={link} className={`${navigationMenuTriggerStyle()}`}>
              {title}
            </Link>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
