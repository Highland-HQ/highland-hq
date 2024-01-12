import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { links } from "./nav-data";
import { Link } from "@remix-run/react";
import { navigationMenuTriggerStyle } from "~/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { useState } from "react";
import useBodyScrollLock from "~/hooks/useBodyScrollLock";

export const StorefrontMobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
        <Menu />
      </SheetTrigger>
      <SheetContent
        side="top"
        className="flex flex-col w-full top-16 z-[99] bg-primary text-primary-foreground"
      >
        {links.map(({ title, link }) => (
          <Link
            key={title}
            to={link}
            className={`${navigationMenuTriggerStyle()} bg-primary text-primary-foreground w-full`}
          >
            {title.toUpperCase()}
          </Link>
        ))}
      </SheetContent>
    </Sheet>
  );
};
