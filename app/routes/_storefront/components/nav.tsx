import { useEffect, useRef, useState } from "react";
import { Link, useOutletContext } from "@remix-run/react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { Button } from "~/components/ui/button";

import { Search } from "lucide-react";

import { UserDropdown } from "./user-dropdown";
import { StorefrontBag } from "./bag";

import logo from "public/images/highland-logo-black.png";
import { SupabaseClient } from "@supabase/supabase-js";

export const Nav = () => {
  const { supabase } = useOutletContext<{ supabase: SupabaseClient }>();

  const [isHidden, setIsHidden] = useState(false);
  const lastScrollTop = useRef(0);

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop.current) {
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

  useEffect(() => {
    const getSession = async () => {
      const session = await supabase.auth.getSession();
      console.log(session);
    };

    getSession();
  }, []);

  const navStyle = {
    top: isHidden ? "-100%" : "0",
    transition: "top 0.5s ease-in-out",
  };

  return (
    <NavigationMenu
      style={navStyle}
      className="flex flex-col max-w-screen py-2 gap-2 bg-background fixed w-full border-b border-border"
    >
      <div className="flex items-center justify-between w-full container">
        <div>
          <Button size="icon" variant="ghost">
            <Search />
          </Button>
        </div>
        <div>
          <img src={logo} alt="Highland Logo" className="h-8" />
        </div>
        <div className="flex items-center justify-end">
          <StorefrontBag />
          <UserDropdown />
        </div>
      </div>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to={"/"} className={navigationMenuTriggerStyle()}>
            Home
          </Link>
          <Link to={"/womens"} className={navigationMenuTriggerStyle()}>
            Womens
          </Link>
          <Link to={"/mens"} className={navigationMenuTriggerStyle()}>
            Mens
          </Link>
          <Link to={"/collections"} className={navigationMenuTriggerStyle()}>
            Collections
          </Link>
          <Link to={"/accessories"} className={navigationMenuTriggerStyle()}>
            Accessories
          </Link>
          <Link to={"/sale"} className={navigationMenuTriggerStyle()}>
            Sale
          </Link>
          <Link to={"/new"} className={navigationMenuTriggerStyle()}>
            New
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
