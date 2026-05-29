"use client";

import { cn } from "@/lib/utils";

export function Logo({
  className,
  size = 40,
  variant = "dark",
  full = false,
}: {
  className?: string;
  size?: number;
  variant?: "dark" | "light";
  full?: boolean;
}) {
  const primary = variant === "dark" ? "#0A2540" : "#FFFFFF";
  const accent = variant === "dark" ? "#0D5C8F" : "#93C5E8";

  if (!full) {
    // Compact JK monogram for navbar
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("shrink-0", className)}
        aria-label="Kallabat Law"
      >
        {/* J */}
        <path
          d="M18 16H30V68C30 78 26 85 20 89C15 92 9 94 3 94V86C8 86 12 84 15 81C19 77 20 72 20 66V16"
          fill={primary}
          strokeWidth="0"
        />
        {/* J serif */}
        <rect x="14" y="14" width="20" height="4" rx="0.5" fill={primary} />

        {/* K */}
        <path
          d="M46 16H58V52L82 16H94L68 54L96 92H84L60 58L58 61V92H46V16Z"
          fill={primary}
          strokeWidth="0"
        />
        {/* K serif */}
        <rect x="42" y="14" width="20" height="4" rx="0.5" fill={primary} />
        <rect x="78" y="14" width="20" height="4" rx="0.5" fill={primary} />

        {/* Accent underline */}
        <rect x="14" y="96" width="84" height="2.5" rx="1.25" fill={accent} opacity="0.5" />
      </svg>
    );
  }

  // Full logo with text
  return (
    <svg
      width={size * 2.8}
      height={size}
      viewBox="0 0 280 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-label="Joseph Kallabat & Associates, P.C."
    >
      {/* J */}
      <path
        d="M10 10H22V58C22 68 19 74 14 78C10 81 5 82 0 82V76C4 76 7 74 10 72C13 68 14 64 14 58V10"
        fill={primary}
      />
      <rect x="6" y="8" width="20" height="3.5" fill={primary} />

      {/* K */}
      <path
        d="M36 10H48V42L68 10H78L56 44L80 80H70L50 48L48 51V80H36V10Z"
        fill={primary}
      />
      <rect x="32" y="8" width="20" height="3.5" fill={primary} />
      <rect x="64" y="8" width="18" height="3.5" fill={primary} />

      {/* Divider */}
      <rect x="96" y="18" width="1.5" height="52" rx="0.75" fill={accent} opacity="0.3" />

      {/* JOSEPH KALLABAT */}
      <text
        x="110"
        y="38"
        fill={primary}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="15"
        fontWeight="700"
        letterSpacing="2.5"
      >
        JOSEPH KALLABAT
      </text>

      {/* & Associates, P.C. */}
      <text
        x="110"
        y="58"
        fill={variant === "dark" ? "#4A5568" : "rgba(255,255,255,0.6)"}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="11.5"
        fontWeight="400"
        letterSpacing="1.5"
      >
        &amp; Associates, P.C.
      </text>

      {/* Accent line under text */}
      <rect x="110" y="66" width="60" height="1.5" rx="0.75" fill={accent} opacity="0.4" />
    </svg>
  );
}
