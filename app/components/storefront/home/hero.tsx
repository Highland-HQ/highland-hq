import { ArrowRight, Circle, XCircle } from "lucide-react";
import { Button, ButtonProps } from "~/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "~/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import image1 from "public/images/image1.jpg";
import image2 from "public/images/image2.jpg";
import { useEffect, useState } from "react";

type HeroCarouselContentPosition = "left" | "right" | "center";

type HeroCarouselContent = {
  imageUrl: string;
  title: string;
  description?: string;
  buttonProps: ButtonProps;
  justify: HeroCarouselContentPosition;
};

const defaultHeroJustification: Record<"justify", HeroCarouselContentPosition> =
  {
    justify: "left",
  };

const heroCarouselContent: HeroCarouselContent[] = [
  {
    ...defaultHeroJustification,
    imageUrl: image1,
    title: "The Silly Guy Collection",
    description:
      "This here is the silly guy collection, come take a look for yourself!",
    buttonProps: { variant: "secondary", size: "lg" },
  },
  {
    ...defaultHeroJustification,
    imageUrl: image2,
    title: "The Sandwich Shop Collection",
    description:
      "Everything in this collection belongs in a damn sandwich shop, god is good!",
    buttonProps: { variant: "secondary", size: "lg" },
  },
];

export const HomeHeroSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const goToSlide = (i: number) => {
    if (api) {
      api.scrollTo(i);
    }
  };

  return (
    <Carousel
      className="w-full"
      setApi={setApi}
      plugins={[
        Autoplay({
          delay: 8000,
          stopOnInteraction: true,
        }),
      ]}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {heroCarouselContent.map((item, index) => (
          <CarouselItem key={index} className="relative">
            <div className="w-full h-[75vh] overflow-hidden flex justify-center items-center">
              <img
                className="object-cover h-full min-w-full"
                src={item.imageUrl}
                alt={item.title}
              />
            </div>

            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <div className="container">
                <h1 className="font-serif font-extrabold text-primary-foreground text-xl md:text-6xl">
                  {item.title}
                </h1>
                {item.description && (
                  <p className="text-white text-base md:text-xl mt-2">
                    {item.description}
                  </p>
                )}
                <div className="flex items-center gap-2 mt-4">
                  <Button {...item.buttonProps}>
                    <span>SHOP NOW</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="flex items-center justify-center gap-2 absolute bottom-5 left-1/2 transform -translate-x-1/2">
        {Array.from({ length: heroCarouselContent.length }).map((_, i) => (
          <Button
            key={i}
            variant="link"
            size="icon"
            className="text-primary-foreground h-6 w-6"
            onClick={() => goToSlide(i)}
          >
            {i === current ? <XCircle size={20} /> : <Circle size={20} />}
          </Button>
        ))}
      </div>
    </Carousel>
  );
};
