"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpDown, UserRound } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";

interface Props {
  className?: string;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProfilePopup: React.FC<Props> = ({ className, setIsLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className="flex items-center justify-center gap-1"
          onClick={() => setIsLoggedIn(true)}
        >
          <UserRound size={20} />
          Profile
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px]">
        <ul>
          <li
            className={cn(
              "hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md"
            )}
          >
            Settings
          </li>
          <li
            className={cn(
              "hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md"
            )}
          >
            Orders
          </li>
          <li
            className={cn(
              "hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md"
            )}
            onClick={() => setIsLoggedIn(false)}
          >
            Log out
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};
