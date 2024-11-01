import { SupabaseClient } from "@supabase/supabase-js";
import { Nav } from "./components/nav";
import { Outlet, useOutletContext } from "@remix-run/react";

const StorefrontIndex = () => {
  const { supabase } = useOutletContext<{ supabase: SupabaseClient }>();

  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default StorefrontIndex;
