import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export const HomeMailingList = () => {
  return (
    <section className="container text-center my-24">
      <h3 className="font-serif text-4xl font-bold mb-2">
        Subscribe to our newsletter and <br /> get updates on our newest
        collections
      </h3>
      <p className="text-muted-foreground">
        Get 10% off your first purchase by subscribing!
      </p>
      <div className="flex w-full max-w-sm items-center space-x-2 mx-auto mt-6">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>
    </section>
  );
};
``;
