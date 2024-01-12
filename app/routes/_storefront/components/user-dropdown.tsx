import { User, UserPlus, LogIn, LogOut, Heart } from "lucide-react";
import { Button, ButtonProps } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Dialog, DialogTrigger } from "~/components/ui/dialog";
import { AuthDialogContent } from "~/components/shared/auth/auth-dialog-content";
import { ReactNode, useMemo, useState } from "react";
import { useOutletContext } from "@remix-run/react";
import { Session, SupabaseClient } from "@supabase/supabase-js";
import { handleLogout } from "~/lib/auth/auth";
import useMediaQuery from "~/hooks/useMediaQuery";
import { Drawer, DrawerContent, DrawerTrigger } from "~/components/ui/drawer";

interface UserDropdownProps {
  triggerVariant?: ButtonProps["variant"];
  triggerSize?: ButtonProps["size"];
}

// HAS TO BE ENCASED IN A DIALOG FOR IT TO WORK :/
export const UserDropdown = ({
  triggerVariant = "ghost",
  triggerSize = "icon",
}: UserDropdownProps) => {
  const { supabase, session } = useOutletContext<{
    supabase: SupabaseClient;
    session: Session;
  }>();

  const [isLoginModal, setIsLoginModal] = useState(false);

  const isLoggedIn = useMemo(() => session != null, [session]);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const ContentWrapper = isMobile
    ? MobileContentWrapper
    : DesktopContentWrapper;
  const ContentTriggerWrapper = isMobile
    ? MobileContentTriggerWrapper
    : DesktopContentTriggerWrapper;

  const menuItems = (
    <>
      {!isLoggedIn ? (
        <>
          <ContentTriggerWrapper onClick={() => setIsLoginModal(true)}>
            <DropdownMenuItem>
              <LogIn className="mr-2 h-4 w-4" />
              <span>Sign In</span>
            </DropdownMenuItem>
          </ContentTriggerWrapper>

          <ContentTriggerWrapper onClick={() => setIsLoginModal(false)}>
            <DropdownMenuItem>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Sign Up</span>
            </DropdownMenuItem>
          </ContentTriggerWrapper>
        </>
      ) : (
        <>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Heart className="mr-2 h-4 w-4" />
            <span>Favorites</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleLogout(supabase)}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log Out</span>
          </DropdownMenuItem>
        </>
      )}
    </>
  );

  return (
    <ContentWrapper>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size={triggerSize} variant={triggerVariant}>
            <User />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="z-[100] w-56">
          <DropdownMenuGroup>{menuItems}</DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <AuthDialogContent
        title={isLoginModal ? "Sign In" : "Create An Account"}
        description={
          isLoginModal
            ? "Continue where you left off!"
            : "New Here? Let's get started."
        }
        isLoginModal={isLoginModal}
        supabase={supabase}
      />
    </ContentWrapper>
  );
};

interface DropdownWrapperProps {
  children: ReactNode;
  onClick?: () => void;
}

const DesktopContentWrapper = ({ children }: DropdownWrapperProps) => {
  return <Dialog>{children}</Dialog>;
};

const DesktopContentTriggerWrapper = ({
  children,
  onClick,
}: DropdownWrapperProps) => {
  return (
    <DialogTrigger asChild onClick={onClick}>
      {children}
    </DialogTrigger>
  );
};

const MobileContentWrapper = ({ children }: DropdownWrapperProps) => {
  return <Drawer>{children}</Drawer>;
};

const MobileContentTriggerWrapper = ({
  children,
  onClick,
}: DropdownWrapperProps) => {
  return (
    <DrawerTrigger asChild onClick={onClick}>
      {children}
    </DrawerTrigger>
  );
};
