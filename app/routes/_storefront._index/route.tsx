import { type MetaFunction } from "@remix-run/node";

import { HomeHeroSection } from "./components/hero";
import { HomeFeaturedSection } from "./components/featured";
import { HomeCollectionFeature } from "./components/collection-feature";
import { HomeMailingList } from "./components/mailing-list";

import image from "public/images/image2.jpg";

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
      <HomeCollectionFeature
        imageUrl={image}
        title="New Years Sale!"
        description="Check out our New Years Sale, up to 50% off on select items"
      />
      <HomeMailingList />
    </>
  );
}
