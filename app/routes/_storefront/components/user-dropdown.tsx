import { User, UserPlus, LogIn } from "lucide-react";
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

  console.log(supabase);

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
        title={isLoginModal ? "Login To Highland" : "Create An Account"}
        isLoginModal={isLoginModal}
        supabase={supabase}
      />
    </Dialog>
  );
};
