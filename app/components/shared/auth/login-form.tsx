import { Dispatch, SetStateAction } from "react";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

interface LoginFormProps {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
}

export const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
}: LoginFormProps) => {
  return (
    <div className="grid items-start gap-4">
      <div className="grid gap-2">
        <Label htmlFor="email">Email*</Label>
        <Input
          required
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="password">Password*</Label>
        <Input
          required
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>
  );
};
