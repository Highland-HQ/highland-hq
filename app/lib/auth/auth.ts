import { SupabaseClient } from "@supabase/supabase-js";

export type HighlandAuthResponse = {
  name: string;
  message: string;
};

export const handleEmailLogin = async (
  supabase: SupabaseClient,
  email: string,
  password: string
): Promise<HighlandAuthResponse> => {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return {
      name: "AuthApiError",
      message: error.message,
    };
  }

  return { name: "Success", message: "User successfully Logged In!" };
};

export const handleEmailRegistration = async (
  supabase: SupabaseClient,
  name: string,
  email: string,
  birthday: Date | undefined,
  password: string
): Promise<HighlandAuthResponse> => {
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
      name: "AuthApiError",
      message: error.message,
    };
  }

  return { name: "AuthApiSuccess", message: "User successfully created!" };
};

export const handleLogout = async (supabase: SupabaseClient) => {
  const { error } = await supabase.auth.signOut();

  if (error) return { error: error.message };

  return { message: "User Signed Out Successfully!" };
};

// ADD OAUTH PROVIDERS
