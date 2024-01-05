import { redirect } from "@remix-run/node";
import { SupabaseClient } from "@supabase/supabase-js";

export const handleEmailLogin = async (
  supabase: SupabaseClient,
  email: string,
  password: string
) => {
  await supabase.auth.signInWithPassword({
    email,
    password,
  });
};

export const handleEmailRegistration = async (
  supabase: SupabaseClient,
  name: string,
  email: string,
  birthday: Date | undefined,
  password: string
) => {
  await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        birthday,
      },
    },
  });
};

export const handleLogout = (supabase: SupabaseClient) => {
  supabase.auth.signOut();
};

// ADD OAUTH PROVIDERS
