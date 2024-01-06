import { SupabaseClient } from "@supabase/supabase-js";
import { toast } from "sonner";

export type HighlandAuthResponse = {
  name: string;
  message: string;
};

export const handleEmailLogin = async (
  supabase: SupabaseClient,
  email: string,
  password: string
) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return { error: error.message };

  return { message: "User successfully Logged In!" };
};

export const handleEmailRegistration = async (
  supabase: SupabaseClient,
  name: string,
  email: string,
  birthday: Date | undefined,
  password: string
) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        birthday,
      },
    },
  });

  if (data.user && data.user.identities && data.user.identities.length === 0) {
    return {
      name: "AuthApiError",
      message: "User already exists",
    };
  }

  if (error) {
    return {
      name: "Auth Error",
      message: error.message,
    };
  }

  toast("User successfully created!");
  return { name: "Success", message: "User successfully created!" };
};

export const handleLogout = async (supabase: SupabaseClient) => {
  const { error } = await supabase.auth.signOut();

  if (error) return { error: error.message };

  return { message: "User Signed Out Successfully!" };
};

// ADD OAUTH PROVIDERS
