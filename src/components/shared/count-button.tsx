import React from "react";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  value?: number;
  size?: "sm" | "lg";
  className?: string;
  setValue?: (value: number) => void;
}

export const CountButton: React.FC<Props> = ({
  className,
  value = 1,
  setValue,
  size = "sm",
}) => {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-between gap-3",
        className
      )}
    >
      <Button
        variant="outline"
        className={cn(
          "p-0 hover:bg-primary hover:text-white",
          size === "sm"
            ? "w-[30px] h-[30px] rounded-sm"
            : "w-[38px] h-[38px] rounded-se-md"
        )}
        onClick={() => setValue && setValue(value - 1)}
      >
        <Minus className={size === "sm" ? "h-4" : "h-5"} />
      </Button>
      <b className={size === "sm" ? "text-sm" : "text-md"}>{value}</b>
      <Button
        variant="outline"
        className={cn(
          "p-0 hover:bg-primary hover:text-white",
          size === "sm"
            ? "w-[30px] h-[30px] rounded-sm"
            : "w-[38px] h-[38px] rounded-md"
        )}
        onClick={() => setValue && setValue(value + 1)}
      >
        <Plus className={size === "sm" ? "h-4" : "h-5"} />
      </Button>
    </div>
  );
};
