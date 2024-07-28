"use client";

import { ChevronsUpDown } from "lucide-react";
import * as React from "react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export const CollapsibleLargeText = ({ text }: { text: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="flex flex-1 flex-row items-start">
      <span className={cn("", isOpen ? "" : "line-clamp-2")}>{text}</span>
      <Button
        variant="ghost"
        size="sm"
        className="w-9 p-0"
        onClick={() => setIsOpen((open) => !open)}
      >
        <ChevronsUpDown className="h-4 w-4" />
        <span className="sr-only">Toggle</span>
      </Button>
    </div>
  );
};
