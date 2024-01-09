import { type MetaFunction } from "@remix-run/node";

import { HomeFeaturedSection } from "./components/featured";
import { HomeCollectionFeature } from "./components/collection-feature";

import image from "public/images/image2.jpg";
import { CategoryCards } from "./components/category-cards";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Highland HQ | Shop" },
    { name: "description", content: "Welcome to Highland HQ!" },
  ];
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const currentDate = new Date();
const currentMonth = monthNames[currentDate.getMonth()];

console.log(currentMonth);

export default function Index() {
  return (
    <>
      <HomeCollectionFeature
        imageUrl={image}
        title={`Shop Our ${currentMonth} Collection`}
        description="Explore our January Collection and start the year with fresh, inspired selections. Perfect for any style!"
      />
      <HomeFeaturedSection />
      <CategoryCards />
      <HomeCollectionFeature
        imageUrl={image}
        title="New Years Sale!"
        description="Check out our New Years Sale, up to 50% off on select items"
      />
      <p className="text-center font-bold text-3xl my-12">
        All this shit at the end is here so i can test the parallax btw (i made
        new parallax code)
      </p>

      <Button variant="secondary">Test</Button>
      <CategoryCards />
      <CategoryCards />
      <CategoryCards />
      <CategoryCards />
      <CategoryCards />
      <CategoryCards />
      <CategoryCards />
      <CategoryCards />
      <CategoryCards />

      {/* <HomeMailingList /> */}
    </>
  );
}
