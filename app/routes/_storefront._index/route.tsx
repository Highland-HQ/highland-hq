import { type MetaFunction } from "@remix-run/node";

import { HomeHeroSection } from "./components/hero";
import { HomeFeaturedSection } from "./components/featured";
import { HomeCollectionFeature } from "./components/collection-feature";

import image from "public/images/image2.jpg";
import { CategoryCards } from "./components/category-cards";

export const meta: MetaFunction = () => {
  return [
    { title: "Highland HQ | Shop" },
    { name: "description", content: "Welcome to Highland HQ!" },
  ];
};

export default function Index() {
  return (
    <>
      <HomeHeroSection />
      <HomeFeaturedSection />
      <CategoryCards />
      <HomeCollectionFeature
        imageUrl={image}
        title="New Years Sale!"
        description="Check out our New Years Sale, up to 50% off on select items"
      />

      {/* <HomeMailingList /> */}
    </>
  );
}
