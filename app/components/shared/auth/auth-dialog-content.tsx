import { SupabaseClient } from "@supabase/supabase-js";
import { FormEvent, ReactNode, useEffect, useState } from "react";
import {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogDescription,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";

import { AlertCircle, ArrowRight } from "lucide-react";

import {
  type HighlandAuthResponse,
  handleEmailLogin,
  handleEmailRegistration,
} from "~/lib/auth/auth";

import { LoginForm } from "./login-form";
import { OAuthButtonGroup } from "./oauth-button-group";
import { RegisterForm } from "./register-form";
import {
  passwordsMatch,
  validateEmail,
  validateName,
  validatePassword,
} from "~/lib/auth/auth-helpers";
import { Link } from "@remix-run/react";
import {
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "~/components/ui/drawer";
import useMediaQuery from "~/hooks/useMediaQuery";
import { toast } from "sonner";

interface AuthDialogContentProps {
  title: string;
  description?: string;
  isLoginModal: boolean;
  supabase: SupabaseClient;
}

export const AuthDialogContent = ({
  title,
  description,
  isLoginModal,
  supabase,
}: AuthDialogContentProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState<Date | undefined>(new Date());
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [authResponse, setAuthResponse] = useState<HighlandAuthResponse | null>(
    null
  );

  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!isLoginModal && !validateName(name)) {
      setAuthResponse({
        name: "SubmissionError",
        message: "Please use a valid name.",
      });
      return;
    }

    if (!validateEmail(email)) {
      setAuthResponse({
        name: "SubmissionError",
        message: "Please enter a valid email address.",
      });
      return;
    }

    if (!isLoginModal && !validatePassword(password)) {
      setAuthResponse({
        name: "SubmissionError",
        message:
          "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one symbol.",
      });
      return;
    }

    if (!isLoginModal && !passwordsMatch(password, confirmPassword)) {
      setAuthResponse({
        name: "SubmissionError",
        message: "Passwords do not match.",
      });
      return;
    }

    let response;
    if (isLoginModal) {
      console.log("here");
      response = await handleEmailLogin(supabase, email, password);

      console.log("here");

      toast(response.message, { dismissible: true, position: "bottom-center" });
    } else {
      response = await handleEmailRegistration(
        supabase,
        name,
        email,
        birthday,
        password
      );
    }

    setAuthResponse(response);
    toast(response.message, { dismissible: true, position: "bottom-center" });
  };

  useEffect(() => {
    console.log(authResponse);
  }, [authResponse]);

  return (
    <ResponsiveContent isMobile={isMobile}>
      <ResponsiveHeader isMobile={isMobile}>
        <ResponsiveTitle isMobile={isMobile}>{title}</ResponsiveTitle>
        {description && (
          <ResponsiveDescription isMobile={isMobile}>
            {description}
          </ResponsiveDescription>
        )}
      </ResponsiveHeader>

      <Separator className="mb-4" />

      <form onSubmit={handleSubmit}>
        {!isLoginModal ? (
          <RegisterForm
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            birthday={birthday}
            setBirthday={setBirthday}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
          />
        ) : (
          <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        )}

        <div className="flex flex-col md:flex-row justify-between items-center">
          {isLoginModal ? (
            <Link to="/reset-password">
              <Button type="button" variant="link" size="sm" className="mt-4">
                <span>Forgot Password?</span>
              </Button>
            </Link>
          ) : (
            <div />
          )}
          <Button type="submit" size="sm" className="mt-4 w-full md:w-auto">
            <span>Submit</span>
            <ArrowRight className="w-6 h-6" />
          </Button>
        </div>
      </form>

      <Separator className="my-2" />

      <ResponsiveFooter isMobile={isMobile}>
        <div className="grid gap-y-4 w-full">
          <OAuthButtonGroup />
        </div>
      </ResponsiveFooter>
    </ResponsiveContent>
  );
};

interface ResponsiveComponentProps {
  isMobile: boolean;
  children: ReactNode;
}

const ResponsiveContent = ({
  isMobile,
  children,
}: ResponsiveComponentProps) => {
  return isMobile ? (
    <DrawerContent className="px-4">{children}</DrawerContent>
  ) : (
    <DialogContent>{children}</DialogContent>
  );
};

const ResponsiveHeader = ({ isMobile, children }: ResponsiveComponentProps) => {
  return isMobile ? (
    <DrawerHeader>{children}</DrawerHeader>
  ) : (
    <DialogHeader>{children}</DialogHeader>
  );
};

const ResponsiveFooter = ({ isMobile, children }: ResponsiveComponentProps) => {
  return isMobile ? (
    <DrawerFooter className="px-0">{children}</DrawerFooter>
  ) : (
    <DialogFooter>{children}</DialogFooter>
  );
};

const ResponsiveTitle = ({ isMobile, children }: ResponsiveComponentProps) => {
  return isMobile ? (
    <DrawerTitle className="font-serif font-bold text-2xl text-left">
      {children}
    </DrawerTitle>
  ) : (
    <DialogTitle className="font-serif font-bold text-3xl">
      {children}
    </DialogTitle>
  );
};

const ResponsiveDescription = ({
  isMobile,
  children,
}: ResponsiveComponentProps) => {
  return isMobile ? (
    <DrawerDescription className="text-primary text-left">
      {children}
    </DrawerDescription>
  ) : (
    <DialogDescription>{children}</DialogDescription>
  );
};
