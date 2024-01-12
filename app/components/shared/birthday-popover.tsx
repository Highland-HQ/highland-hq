import { CalendarIcon } from "lucide-react";

import { Popover, PopoverTrigger } from "~/components/ui/popover";
import { Button } from "~/components/ui/button";
import { format, setYear } from "date-fns";
import { PopoverContent } from "@radix-ui/react-popover";
import { Calendar } from "~/components/ui/calendar";
import { Dispatch, SetStateAction } from "react";

interface BirthdayPopoverProps {
  date: Date | undefined;
  setDate: Dispatch<SetStateAction<Date | undefined>>;
}

export const BirthdayPopover = ({ date, setDate }: BirthdayPopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "MM/dd/yyyy") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto bg-background border border-border rounded-md mt-2 shadow-md dark:shadow-none">
        <Calendar
          mode="single"
          captionLayout="dropdown-buttons"
          fromYear={1960}
          toYear={new Date().getFullYear()}
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
