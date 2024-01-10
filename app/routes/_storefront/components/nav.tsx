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

export const Nav = () => {
  const [isHidden, setIsHidden] = useState(false);

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

  return (
    <NavigationMenu
      style={navStyle}
      className="flex flex-col z-50 py-2 gap-2 bg-background fixed max-w-screen w-full shadow-md"
    >
      <div className="flex items-center justify-between w-full px-2 md:container">
        <div>
          <StorefrontMobileMenu />

          <Button size="icon" variant="ghost">
            <Search />
          </Button>
        </div>
        <div className="font-serif text-2xl font-bold tracking-wide">
          HIGHLAND
        </div>
        <div className="flex items-center justify-end">
          <StorefrontBag />
          <UserDropdown />
        </div>
      </div>

      <NavigationMenuList className="hidden md:block">
        <NavigationMenuItem>
          {links.map(({ title, link }) => (
            <Link to={link} className={`${navigationMenuTriggerStyle()}`}>
              {title.toUpperCase()}
            </Link>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
