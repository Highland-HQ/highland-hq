import type { MetaFunction } from "@remix-run/node";
import { HomeFeaturedSection } from "~/components/storefront/home/featured";
import { HomeHeroSection } from "~/components/storefront/home/hero";
import { Nav } from "~/components/storefront/nav/nav";

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
    </>
  );
}
