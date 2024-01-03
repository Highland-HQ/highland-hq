import type { MetaFunction } from "@remix-run/node";
import { HomeFeaturedSection } from "~/components/storefront/home/featured";
import { HomeHeroSection } from "~/components/storefront/home/hero";
import { Nav } from "~/components/storefront/nav/nav";
import { HomeCollectionFeature } from "~/components/storefront/shared/collection-feature";

import image from "public/images/image2.jpg";
import { HomeMailingList } from "~/components/storefront/shared/mailing-list";

export const meta: MetaFunction = () => {
  return [
    { title: "Highland HQ | Shop" },
    { name: "description", content: "Welcome to Highland HQ!" },
  ];
};

export default function Index() {
  return (
    <>
      <Nav />
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
