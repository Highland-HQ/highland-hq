import { ArrowRight, Heart } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

import image1 from "public/images/products/product1.jpg";
import image2 from "public/images/products/product2.jpg";
import image3 from "public/images/products/product3.jpg";
import image4 from "public/images/products/product4.jpg";

export const HomeFeaturedSection = () => {
  return (
    <section className="container my-12">
      <h2 className="font-serif text-4xl font-bold mb-4 text-center">
        Popular Products
      </h2>
      <Tabs
        defaultValue="womens"
        className="flex flex-col items-center justify-center"
      >
        <div>
          <TabsList className="mb-8">
            <TabsTrigger value="womens">Womens</TabsTrigger>
            <TabsTrigger value="mens">Mens</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="womens">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <img
                src={image1}
                alt="Image Here"
                className="w-full aspect-square object-cover"
              />
              <div className="flex justify-between mt-2">
                <div>
                  <h3 className="font-semibold">Product Name</h3>
                  <p className="text-secondary-foreground">$12.22</p>
                </div>
                <Button variant="link" className="p-0 hover:text-destructive">
                  <Heart size={24} />
                </Button>
              </div>
            </div>
            <div>
              <img
                src={image2}
                alt="Image Here"
                className="w-full aspect-square object-cover"
              />
              <div className="flex justify-between mt-2">
                <div>
                  <h3 className="font-semibold">Product Name</h3>
                  <p className="text-secondary-foreground">$12.22</p>
                </div>
                <Button variant="link" className="p-0 hover:text-destructive">
                  <Heart size={24} />
                </Button>
              </div>
            </div>
            <div>
              <img
                src={image3}
                alt="Image Here"
                className="w-full aspect-square object-cover"
              />
              <div className="flex justify-between mt-2">
                <div>
                  <h3 className="font-semibold">Product Name</h3>
                  <p className="text-secondary-foreground">$12.22</p>
                </div>
                <Button variant="link" className="p-0 hover:text-destructive">
                  <Heart size={24} />
                </Button>
              </div>
            </div>
            <div>
              <img
                src={image4}
                alt="Image Here"
                className="w-full aspect-square object-cover"
              />
              <div className="flex justify-between mt-2">
                <div>
                  <h3 className="font-semibold">Product Name</h3>
                  <p className="text-secondary-foreground">$12.22</p>
                </div>
                <Button variant="link" className="p-0 hover:text-destructive">
                  <Heart size={24} />
                </Button>
              </div>
            </div>
            <div>
              <img
                src={image1}
                alt="Image Here"
                className="w-full aspect-square object-cover"
              />
              <div className="flex justify-between mt-2">
                <div>
                  <h3 className="font-semibold">Product Name</h3>
                  <p className="text-secondary-foreground">$12.22</p>
                </div>
                <Button variant="link" className="p-0 hover:text-destructive">
                  <Heart size={24} />
                </Button>
              </div>
            </div>
            <div>
              <img
                src={image2}
                alt="Image Here"
                className="w-full aspect-square object-cover"
              />
              <div className="flex justify-between mt-2">
                <div>
                  <h3 className="font-semibold">Product Name</h3>
                  <p className="text-secondary-foreground">$12.22</p>
                </div>
                <Button variant="link" className="p-0 hover:text-destructive">
                  <Heart size={24} />
                </Button>
              </div>
            </div>
            <div>
              <img
                src={image3}
                alt="Image Here"
                className="w-full aspect-square object-cover"
              />
              <div className="flex justify-between mt-2">
                <div>
                  <h3 className="font-semibold">Product Name</h3>
                  <p className="text-secondary-foreground">$12.22</p>
                </div>
                <Button variant="link" className="p-0 hover:text-destructive">
                  <Heart size={24} />
                </Button>
              </div>
            </div>
            <div>
              <img
                src={image4}
                alt="Image Here"
                className="w-full aspect-square object-cover"
              />
              <div className="flex justify-between mt-2">
                <div>
                  <h3 className="font-semibold">Product Name</h3>
                  <p className="text-secondary-foreground">$12.22</p>
                </div>
                <Button variant="link" className="p-0 hover:text-destructive">
                  <Heart size={24} />
                </Button>
              </div>
            </div>
            <div>
              <img
                src={image1}
                alt="Image Here"
                className="w-full aspect-square object-cover"
              />
              <div className="flex justify-between mt-2">
                <div>
                  <h3 className="font-semibold">Product Name</h3>
                  <p className="text-secondary-foreground">$12.22</p>
                </div>
                <Button variant="link" className="p-0 hover:text-destructive">
                  <Heart size={24} />
                </Button>
              </div>
            </div>
            <div>
              <img
                src={image2}
                alt="Image Here"
                className="w-full aspect-square object-cover"
              />
              <div className="flex justify-between mt-2">
                <div>
                  <h3 className="font-semibold">Product Name</h3>
                  <p className="text-secondary-foreground">$12.22</p>
                </div>
                <Button variant="link" className="p-0 hover:text-destructive">
                  <Heart size={24} />
                </Button>
              </div>
            </div>
            <div>
              <img
                src={image3}
                alt="Image Here"
                className="w-full aspect-square object-cover"
              />
              <div className="flex justify-between mt-2">
                <div>
                  <h3 className="font-semibold">Product Name</h3>
                  <p className="text-secondary-foreground">$12.22</p>
                </div>
                <Button variant="link" className="p-0 hover:text-destructive">
                  <Heart size={24} />
                </Button>
              </div>
            </div>
            <div>
              <img
                src={image4}
                alt="Image Here"
                className="w-full aspect-square object-cover"
              />
              <div className="flex justify-between mt-2">
                <div>
                  <h3 className="font-semibold">Product Name</h3>
                  <p className="text-secondary-foreground">$12.22</p>
                </div>
                <Button variant="link" className="p-0 hover:text-destructive">
                  <Heart size={24} />
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="mens">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <img
                src={image3}
                alt="Image Here"
                className="w-full aspect-square object-cover"
              />
              <div className="flex justify-between mt-2">
                <div>
                  <h3 className="font-semibold">Product Name</h3>
                  <p className="text-secondary-foreground">$12.22</p>
                </div>
                <Button variant="link" className="p-0 hover:text-destructive">
                  <Heart size={24} />
                </Button>
              </div>
            </div>
            <div>
              <img
                src={image1}
                alt="Image Here"
                className="w-full aspect-square object-cover"
              />
              <div className="flex justify-between mt-2">
                <div>
                  <h3 className="font-semibold">Product Name</h3>
                  <p className="text-secondary-foreground">$12.22</p>
                </div>
                <Button variant="link" className="p-0 hover:text-destructive">
                  <Heart size={24} />
                </Button>
              </div>
            </div>
            <div>
              <img
                src={image3}
                alt="Image Here"
                className="w-full aspect-square object-cover"
              />
              <div className="flex justify-between mt-2">
                <div>
                  <h3 className="font-semibold">Product Name</h3>
                  <p className="text-secondary-foreground">$12.22</p>
                </div>
                <Button variant="link" className="p-0 hover:text-destructive">
                  <Heart size={24} />
                </Button>
              </div>
            </div>
            <div>
              <img
                src={image2}
                alt="Image Here"
                className="w-full aspect-square object-cover"
              />
              <div className="flex justify-between mt-2">
                <div>
                  <h3 className="font-semibold">Product Name</h3>
                  <p className="text-secondary-foreground">$12.22</p>
                </div>
                <Button variant="link" className="p-0 hover:text-destructive">
                  <Heart size={24} />
                </Button>
              </div>
            </div>
            <div>
              <img
                src={image1}
                alt="Image Here"
                className="w-full aspect-square object-cover"
              />
              <div className="flex justify-between mt-2">
                <div>
                  <h3 className="font-semibold">Product Name</h3>
                  <p className="text-secondary-foreground">$12.22</p>
                </div>
                <Button variant="link" className="p-0 hover:text-destructive">
                  <Heart size={24} />
                </Button>
              </div>
            </div>
            <div>
              <img
                src={image2}
                alt="Image Here"
                className="w-full aspect-square object-cover"
              />
              <div className="flex justify-between mt-2">
                <div>
                  <h3 className="font-semibold">Product Name</h3>
                  <p className="text-secondary-foreground">$12.22</p>
                </div>
                <Button variant="link" className="p-0 hover:text-destructive">
                  <Heart size={24} />
                </Button>
              </div>
            </div>
            <div>
              <img
                src={image3}
                alt="Image Here"
                className="w-full aspect-square object-cover"
              />
              <div className="flex justify-between mt-2">
                <div>
                  <h3 className="font-semibold">Product Name</h3>
                  <p className="text-secondary-foreground">$12.22</p>
                </div>
                <Button variant="link" className="p-0 hover:text-destructive">
                  <Heart size={24} />
                </Button>
              </div>
            </div>
            <div>
              <img
                src={image3}
                alt="Image Here"
                className="w-full aspect-square object-cover"
              />
              <div className="flex justify-between mt-2">
                <div>
                  <h3 className="font-semibold">Product Name</h3>
                  <p className="text-secondary-foreground">$12.22</p>
                </div>
                <Button variant="link" className="p-0 hover:text-destructive">
                  <Heart size={24} />
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      <div className="flex justify-end">
        <Button className="mt-4">
          <span>More Popular Products</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </section>
  );
};
