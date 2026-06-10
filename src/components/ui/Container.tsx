import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

const widths = {
  default: "max-w-7xl",
  wide: "max-w-[88rem]",
  narrow: "max-w-5xl",
  prose: "max-w-3xl",
} as const;

export function Container({
  as: Tag = "div",
  size = "default",
  className,
  children,
}: {
  as?: ElementType;
  size?: keyof typeof widths;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag className={cn("mx-auto w-full px-5 sm:px-8 lg:px-10", widths[size], className)}>
      {children}
    </Tag>
  );
}
