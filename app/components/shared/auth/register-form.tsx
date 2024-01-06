import { Dispatch, SetStateAction } from "react";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { BirthdayPopover } from "../birthday-popover";

interface LoginFormProps {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
  birthday: Date | undefined;
  setBirthday: Dispatch<SetStateAction<Date | undefined>>;
}

export const RegisterForm = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  birthday,
  setBirthday,
  confirmPassword,
  setConfirmPassword,
}: LoginFormProps) => {
  return (
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

      <div className="grid gap-2">
        <Label htmlFor="conf-password">Confirm Password*</Label>
        <Input
          required
          id="conf-password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
    </div>
  );
};
