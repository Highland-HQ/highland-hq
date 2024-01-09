import { Card, CardContent } from "~/components/ui/card";

export const CategoryCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 container my-12">
      <Card>
        <CardContent>Test</CardContent>
      </Card>
      <Card>
        <CardContent>Test</CardContent>
      </Card>
      <Card>
        <CardContent>Test</CardContent>
      </Card>
      <Card>
        <CardContent>Test</CardContent>
      </Card>
    </div>
  );
};
