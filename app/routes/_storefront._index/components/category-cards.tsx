import { ArrowRight } from "lucide-react";
import image from "public/images/image2.jpg";
import { Button } from "~/components/ui/button";

export const CategoryCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-12 ">
      <div className="relative">
        <div className="flex flex-col container items-start justify-end pb-4 absolute top-0 left-0 h-full w-full bg-black/50 z-20">
          <div className="text-primary-foreground font-bold text-6xl font-serif">
            TOPS
          </div>
          <Button className="mt-6 font-inherit" variant="secondary">
            <span>SHOP NOW</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <img className="h-[30vh] w-full object-cover z-10" src={image} />
      </div>
      <div className="relative">
        <div className="flex flex-col container items-start justify-end pb-4 absolute top-0 left-0 h-full w-full bg-black/50 z-20">
          <div className="text-primary-foreground font-bold text-6xl font-serif">
            BOTTOMS
          </div>
          <Button className="mt-6 font-inherit" variant="secondary">
            <span>SHOP NOW</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <img className="h-[30vh] w-full object-cover z-10" src={image} />
      </div>
      <div className="relative">
        <div className="flex flex-col container items-start justify-end pb-4 absolute top-0 left-0 h-full w-full bg-black/50 z-20">
          <div className="text-primary-foreground font-bold text-6xl font-serif">
            ACCESSORIES
          </div>
          <Button className="mt-6 font-inherit" variant="secondary">
            <span>SHOP NOW</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <img className="h-[30vh] w-full object-cover z-10" src={image} />
      </div>
      <div className="relative">
        <div className="flex flex-col container items-start justify-end pb-4 absolute top-0 left-0 h-full w-full bg-black/50 z-20">
          <div className="text-primary-foreground font-bold text-6xl font-serif">
            SHOES
          </div>
          <Button className="mt-6 font-inherit" variant="secondary">
            <span>SHOP NOW</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <img className="h-[30vh] w-full object-cover z-10" src={image} />
      </div>
    </div>
  );
};
