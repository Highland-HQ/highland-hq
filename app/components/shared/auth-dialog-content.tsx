import { useOutletContext } from "@remix-run/react";
import { SupabaseClient } from "@supabase/supabase-js";
import { useState } from "react";
import {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { Label } from "~/components/ui/label";

import { ArrowRight } from "lucide-react";

import { handleEmailLogin, handleEmailRegistration } from "~/lib/auth";
import { BirthdayPopover } from "./birthday-popover";

interface AuthDialogContentProps {
  title: string;
  isLoginModal: boolean;
  supabase: SupabaseClient;
}

export const AuthDialogContent = ({
  title,
  isLoginModal,
  supabase,
}: AuthDialogContentProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState<Date | undefined>(new Date());
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    console.log("god is good");
    if (isLoginModal) {
      handleEmailLogin(supabase, "", "");
    } else {
      handleEmailRegistration(supabase, name, email, birthday, password);
    }
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="font-bold text-xl">{title}</DialogTitle>
      </DialogHeader>

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

        <DialogFooter>
          <Button type="submit" size="sm">
            <span>Submit</span>
            <ArrowRight className="w-6 h-6" />
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};
