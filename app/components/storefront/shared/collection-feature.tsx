import { ArrowRight, BadgePercent } from "lucide-react";
import { Button } from "~/components/ui/button";

interface HomeCollectionFeatureProps {
  imageUrl: string;
  title: string;
  description?: string;
}

export const HomeCollectionFeature = ({
  imageUrl,
  title,
  description,
}: HomeCollectionFeatureProps) => {
  return (
    <div className="relative">
      <div className="w-full h-[65vh] overflow-hidden flex justify-center items-center">
        <img
          className="object-cover h-full min-w-full"
          src={imageUrl}
          alt={title}
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <div className="container flex flex-col items-center justify-center">
          <h1 className="flex font-serif font-extrabold text-primary-foreground text-xl md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="text-white text-base md:text-xl mt-2">
              {description}
            </p>
          )}
          <div className="flex items-center gap-2 mt-4">
            <Button>
              <span>SHOP NOW</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
