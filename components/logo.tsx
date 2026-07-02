"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Logo({
  className,
  iconClassName,
  showName = true,
}: {
  className?: string;
  iconClassName?: string;
  showName?: boolean;
}) {
  return (
    <Link href="/" className="flex items-center gap-3 cursor-pointer group h-full">
      <img
        src="/vuno-logo.png"
        alt="Vuno"
        className={cn("h-8 w-auto", className, iconClassName)}
      />

      {showName && (
        <span className="text-xl font-bold tracking-tighter text-foreground transition-colors group-hover:text-primary">
          Vuno
        </span>
      )}
    </Link>
  );
}
