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
  // Match the original logo: dark steel blue #3D5A80
  const fill = variant === "dark" ? "#3D5A80" : "#FFFFFF";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-label="JK — Joseph Kallabat & Associates"
    >
      {/*
        Faithful recreation of the original JK monogram:
        - Large serif J and K that overlap in the center
        - J has a curved descender tail going left
        - K has diagonal arms meeting at the stem
        - Letters interlock/share the center vertical space
      */}

      {/* J — serif letter with curved tail */}
      <path
        d="M20 12 L20 16 L28 16 L28 14 L42 14 L42 16 L34 16 L34 72
           C34 84 30 92 22 97 C16 101 8 103 2 103 L2 95
           C7 95 13 93 17 89 C22 84 24 78 24 70 L24 16 L20 16 L20 12
           L42 12 L42 16"
        fill={fill}
      />

      {/* K — serif letter with diagonal strokes, overlapping with J */}
      <path
        d="M52 12 L52 16 L58 16 L58 14 L72 14 L72 16 L66 16 L66 54
           L92 16 L86 16 L86 14 L112 14 L112 16 L104 16
           L78 52 L108 98 L114 98 L114 102 L86 102 L86 98
           L96 98 L70 58 L66 63 L66 98 L72 98 L72 102
           L52 102 L52 98 L58 98 L58 16 L52 16 L52 12
           L72 12 L72 16"
        fill={fill}
      />
      <path
        d="M86 12 L112 12 L112 16 L86 16 Z"
        fill={fill}
      />
    </svg>
  );
}
