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
import image3 from "public/images/products/product3.jpg";

type TestProduct = {
  id: number;
  image: string;
  name: string;
  price: number;
};

const testCartItems: TestProduct[] = [
  // {
  //   id: 1,
  //   image: image1,
  //   name: "Product Name 1",
  //   price: 12.77,
  // },
  // {
  //   id: 2,
  //   image: image2,
  //   name: "Product Name 2",
  //   price: 1005.12,
  // },
  // {
  //   id: 3,
  //   image: image3,
  //   name: "Product Name 3",
  //   price: 15.99,
  // },
];

export const StorefrontBag = () => {
  return (
    <Sheet>
      <SheetTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
        <ShoppingBag />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>Your Bag</SheetTitle>
        <SheetDescription>
          Payments processed securely via
          <Link className="text-primary font-bold" to="https://stripe.com/">
            {" "}
            Stripe
          </Link>
        </SheetDescription>
        <Separator className="my-6" />
        {testCartItems.length > 0 ? (
          testCartItems.map((item, i) => (
            <div key={item.id}>
              <div className="my-4 flex items-start justify-between gap-4">
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
              {testCartItems.length - 1 !== i && <Separator className="my-4" />}
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center gap-4">
            <ShoppingBag className="text-muted-foreground" size={64} />
            <div className="text-center mt-2">
              <p className="font-semibold text-lg uppercase">
                You Bag Is Empty
              </p>
              <p className="text-muted-foreground text-sm">
                You have no items in your bag
              </p>
            </div>
          </div>
        )}
        {testCartItems.length > 0 && (
          <Button className="w-full mt-6">Continue To Checkout</Button>
        )}
      </SheetContent>
    </Sheet>
  );
};
