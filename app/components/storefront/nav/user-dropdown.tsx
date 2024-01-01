import { Link } from "@remix-run/react";
import { LogIn, User, UserPlus } from "lucide-react";
import { Button, ButtonProps } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

interface UserDropdownProps {
  triggerVariant?: ButtonProps["variant"];
  triggerSize?: ButtonProps["size"];
}

// CHECK IF USER IS SIGNED IN TO RENDER DIFFERENT ITEMS
export const UserDropdown = ({
  triggerVariant = "ghost",
  triggerSize = "sm",
}: UserDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={triggerSize} variant={triggerVariant}>
          <User />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <Link to="auth/sign-in">
            <DropdownMenuItem>
              <LogIn className="mr-2 h-4 w-4" />
              <span>Sign In</span>
            </DropdownMenuItem>
          </Link>
          <Link to="auth/register">
            <DropdownMenuItem>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Register</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
