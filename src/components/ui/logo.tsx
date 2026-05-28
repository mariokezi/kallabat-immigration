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
  const fillColor = variant === "dark" ? "#3D5A80" : "#FFFFFF";

  return (
    <svg
      width={size}
      height={size * 1.1}
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-label="Joseph Kallabat & Associates, P.C."
    >
      {/* J — serif capital */}
      <path
        d="M48 20 L48 24 L62 24 L62 120 C62 138 56 150 44 156 C36 161 26 163 16 163 L16 153 C24 153 32 150 37 146 C44 140 48 130 48 118 L48 24 L34 24 L34 20 L76 20 L76 24 L62 24"
        fill={fillColor}
      />
      {/* Serif tops for J */}
      <path d="M34 20 L76 20 L76 23 L34 23 Z" fill={fillColor} />

      {/* K — serif capital */}
      <path
        d="M104 20 L104 24 L118 24 L118 82 L160 24 L148 24 L148 20 L184 20 L184 24 L172 24 L134 76 L176 148 L188 148 L188 152 L150 152 L150 148 L162 148 L126 86 L118 96 L118 148 L132 148 L132 152 L90 152 L90 148 L104 148 L104 24 L90 24 L90 20 L132 20 L132 24 L118 24"
        fill={fillColor}
      />
      {/* Serif tops for K */}
      <path d="M90 20 L132 20 L132 23 L90 23 Z" fill={fillColor} />
      <path d="M148 20 L184 20 L184 23 L148 23 Z" fill={fillColor} />

      {/* JOSEPH KALLABAT — small caps text */}
      <text
        x="100"
        y="185"
        textAnchor="middle"
        fill={fillColor}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="16"
        fontWeight="700"
        letterSpacing="3"
      >
        JOSEPH KALLABAT
      </text>

      {/* & Associates, P.C. */}
      <text
        x="100"
        y="205"
        textAnchor="middle"
        fill={fillColor}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="13"
        fontWeight="400"
        letterSpacing="1"
      >
        &amp; Associates, P.C.
      </text>
    </svg>
  );
}
