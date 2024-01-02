import { Link } from "@remix-run/react";
import {
  ArrowRightSquare,
  ArrowUpRightSquare,
  Minus,
  Plus,
  ShoppingBag,
  Trash,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";

import image1 from "public/images/products/product1.jpg";
import image2 from "public/images/products/product2.jpg";
import { Input } from "~/components/ui/input";

const testCartItems = [
  {
    image: image1,
    name: "Product Name",
    price: 12.77,
  },
  {
    image: image2,
    name: "Product Name",
    price: 1005.12,
  },
];

export const StorefrontCart = () => {
  return (
    <Sheet>
      <SheetTrigger className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
        <ShoppingBag />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>Your Cart</SheetTitle>
        <SheetDescription className="flex gap-1">
          Payments processed securely via
          <Link
            className="text-accent-foreground flex gap-1"
            to="https://stripe.com/"
          >
            Stripe
            <ArrowUpRightSquare size={18} />
          </Link>
        </SheetDescription>
        <Separator className="my-6" />
        {testCartItems.map((item, i) => (
          <>
            <div
              className="my-4 flex items-start justify-between gap-4"
              key={item.name}
            >
              <img
                src={item.image}
                className="w-24 aspect-square object-cover rounded-sm"
              />
              <div className="flex flex-col justify-between items-start">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p>${item.price}</p>
                </div>
                <div className="flex w-full max-w-sm items-center space-x-2 mt-2">
                  <Button variant="ghost" size="sm">
                    <Minus size={20} />
                  </Button>
                  <Button variant="outline" size="sm">
                    1
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Plus size={20} />
                  </Button>
                </div>
              </div>
              <div className="flex justify-end items-end h-full">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-destructive"
                >
                  <Trash size={18} />
                </Button>
              </div>
            </div>
            {<Separator className="my-4" />}
          </>
        ))}
        <Button className="w-full">Continue To Checkout</Button>
      </SheetContent>
    </Sheet>
  );
};
