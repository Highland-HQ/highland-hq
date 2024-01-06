import { User, UserPlus, LogIn, LogOut } from "lucide-react";
import { Button, ButtonProps } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Dialog, DialogTrigger } from "~/components/ui/dialog";
import { AuthDialogContent } from "~/components/shared/auth-dialog-content";
import { useState } from "react";
import { useOutletContext } from "@remix-run/react";
import { SupabaseClient } from "@supabase/supabase-js";
import { HighlandAuthResponse, handleLogout } from "~/lib/auth";

interface UserDropdownProps {
  triggerVariant?: ButtonProps["variant"];
  triggerSize?: ButtonProps["size"];
}

// HAS TO BE ENCASED IN A DIALOG FOR IT TO WORK :/
export const UserDropdown = ({
  triggerVariant = "ghost",
  triggerSize = "icon",
}: UserDropdownProps) => {
  const { supabase } = useOutletContext<{ supabase: SupabaseClient }>();

  const [isLoginModal, setIsLoginModal] = useState(false);

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size={triggerSize} variant={triggerVariant}>
            <User />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            <DialogTrigger asChild onClick={() => setIsLoginModal(true)}>
              <DropdownMenuItem>
                <LogIn className="mr-2 h-4 w-4" />
                <span>Log In</span>
              </DropdownMenuItem>
            </DialogTrigger>

            <DropdownMenuItem onClick={() => handleLogout(supabase)}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log Out</span>
            </DropdownMenuItem>

            <DialogTrigger asChild onClick={() => setIsLoginModal(false)}>
              <DropdownMenuItem>
                <UserPlus className="mr-2 h-4 w-4" />
                <span>Register</span>
              </DropdownMenuItem>
            </DialogTrigger>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <AuthDialogContent
        title={isLoginModal ? "Login" : "Create An Account"}
        description={
          isLoginModal
            ? "Continue where you've left off!"
            : "New Here? Let's get started."
        }
        isLoginModal={isLoginModal}
        supabase={supabase}
      />
    </Dialog>
  );
};
