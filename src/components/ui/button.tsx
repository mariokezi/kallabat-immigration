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
          "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-500 cursor-pointer relative overflow-hidden",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:pointer-events-none",
          "active:scale-[0.98]",
          {
            "bg-gradient-to-r from-navy to-blue text-white shadow-lg shadow-navy/25 hover:shadow-xl hover:shadow-navy/40 hover:-translate-y-0.5 before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue before:to-navy before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 [&>*]:relative [&>*]:z-10":
              variant === "primary",
            "bg-white text-navy border border-border hover:border-gold/40 hover:shadow-lg hover:shadow-gold/10 hover:-translate-y-0.5":
              variant === "secondary",
            "border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/60 backdrop-blur-sm":
              variant === "outline",
            "text-blue hover:text-navy hover:bg-blue-light/50":
              variant === "ghost",
            "bg-gradient-to-r from-gold to-gold-light text-navy font-semibold shadow-lg shadow-gold/25 hover:shadow-xl hover:shadow-gold/40 hover:-translate-y-0.5":
              variant === "gold",
          },
          {
            "px-5 py-2.5 text-sm": size === "sm",
            "px-7 py-3.5 text-base": size === "md",
            "px-9 py-4.5 text-lg tracking-wide": size === "lg",
          },
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";
export { Button, type ButtonProps };
