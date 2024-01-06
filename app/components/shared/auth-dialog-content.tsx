import { useOutletContext } from "@remix-run/react";
import { SupabaseClient } from "@supabase/supabase-js";
import { FormEvent, useState } from "react";
import {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogDescription,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Separator } from "~/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";

import { AlertCircle, ArrowRight } from "lucide-react";

import {
  type HighlandAuthResponse,
  handleEmailLogin,
  handleEmailRegistration,
} from "~/lib/auth";
import { BirthdayPopover } from "./birthday-popover";

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (isLoginModal) {
      const response = await handleEmailLogin(supabase, email, password);
      console.log(response);

      // setAuthResponse(response);
    } else {
      const response = await handleEmailRegistration(
        supabase,
        name,
        email,
        birthday,
        password
      );

      setAuthResponse(response);
    }
  };

  return (
    <DialogContent>
      <DialogHeader>
        {authResponse && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error While Authenticating</AlertTitle>
            <AlertDescription>{authResponse.message}</AlertDescription>
          </Alert>
        )}

        <DialogTitle className="font-serif font-bold text-3xl">
          {title}
        </DialogTitle>
        {description && <DialogDescription>{description}</DialogDescription>}
      </DialogHeader>

      <Separator className="mb-4" />

      <form onSubmit={handleSubmit}>
        {!isLoginModal ? (
          <div className="grid items-start gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2 col-span-1">
                <Label htmlFor="name">First Name*</Label>
                <Input
                  required
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="grid gap-2 col-span-1">
                <Label>Birthday</Label>
                <BirthdayPopover date={birthday} setDate={setBirthday} />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email*</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password*</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="conf-password">Confirm Password*</Label>
              <Input
                id="conf-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
        ) : (
          <div className="grid items-start gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email*</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password*</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        )}

        <div className="flex justify-end items-center">
          <Button type="submit" size="sm" className="mt-4">
            <span>Submit</span>
            <ArrowRight className="w-6 h-6" />
          </Button>
        </div>
      </form>

      <Separator className="my-2" />

      <DialogFooter className="flex flex-col">
        <Button className="w-full">
          <svg
            className="w-4 h-4 mr-2 fill-current text-white"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Apple</title>
            <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
          </svg>
          <span>Sign In With Apple</span>
        </Button>
        <Button className="w-full" variant="outline">
          <svg
            className="w-4 h-4 mr-2 fill-current text-black"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Google</title>
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
          </svg>
          <span>Sign In With Google</span>
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
