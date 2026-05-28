"use client";

import { cn } from "@/lib/utils";

export function Logo({
  className,
  size = 40,
  variant = "dark",
}: {
  className?: string;
  size?: number;
  variant?: "dark" | "light";
}) {
  const primary = variant === "dark" ? "#0A2540" : "#FFFFFF";
  const secondary = variant === "dark" ? "#0D5C8F" : "#E8F1F8";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
    >
      {/* Background */}
      <rect width="120" height="120" rx="16" fill={variant === "dark" ? "#F0F4F8" : "rgba(255,255,255,0.1)"} />

      {/* J letter */}
      <path
        d="M32 28h8v48c0 6-2 10-6 13s-9 4-14 4v-7c3 0 6-1 8-2s4-4 4-8V28z"
        fill={primary}
      />
      <path
        d="M32 28h8v3H32V28z"
        fill={secondary}
      />

      {/* K letter */}
      <path
        d="M62 28h8v26l22-26h10L80 54l24 38h-10L74 58l-4 5v29h-8V28z"
        fill={primary}
      />
      <path
        d="M62 28h8v3H62V28z"
        fill={secondary}
      />

      {/* Subtle underline accent */}
      <rect x="28" y="100" width="64" height="2" rx="1" fill={secondary} opacity="0.6" />
    </svg>
  );
}
