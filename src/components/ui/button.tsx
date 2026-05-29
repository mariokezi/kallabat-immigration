"use client";

import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/50 focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:pointer-events-none",
          "active:scale-[0.98]",
          {
            "bg-navy text-white hover:bg-navy-deep shadow-sm hover:shadow-md":
              variant === "primary",
            "bg-white text-navy border border-border hover:border-navy/30 hover:shadow-sm":
              variant === "secondary",
            "border border-white/30 text-white hover:bg-white/10 hover:border-white/50":
              variant === "outline",
            "text-navy hover:text-blue hover:bg-blue-light/50":
              variant === "ghost",
            "bg-gold text-navy hover:bg-gold-light shadow-sm hover:shadow-md":
              variant === "gold",
          },
          {
            "px-5 py-2.5 text-sm": size === "sm",
            "px-7 py-3 text-sm": size === "md",
            "px-8 py-3.5 text-base": size === "lg",
          },
          className
        )}
        {...props}
      >
        <span className="flex items-center gap-2">{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";
export { Button, type ButtonProps };
