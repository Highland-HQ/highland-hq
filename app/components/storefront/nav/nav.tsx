import { Link, NavLink } from "@remix-run/react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { Button } from "~/components/ui/button";
import { Search, ShoppingBag, User } from "lucide-react";

import logo from "public/images/highland-logo-black.png";
import { UserDropdown } from "./user-dropdown";

export const Nav = () => {
  return (
    <NavigationMenu className="flex flex-col max-w-screen py-2 gap-2 sticky top-0 bg-background">
      <div className="flex items-center justify-between w-full container">
        <div>
          <Button size="sm" variant="ghost">
            <Search />
          </Button>
        </div>
        <div>
          <img src={logo} alt="Highland Logo" className="h-8" />
        </div>
        <div className="flex items-center justify-end">
          <Button size="sm" variant="ghost">
            <ShoppingBag />
          </Button>
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
