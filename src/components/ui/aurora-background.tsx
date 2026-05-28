"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col min-h-[92vh] items-center justify-center bg-white text-slate-950",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="pointer-events-none absolute will-change-transform"
          style={{
            inset: "-10px",
            opacity: 0.4,
            filter: "blur(10px)",
            backgroundImage: [
              "repeating-linear-gradient(100deg, #FFFFFF 0%, #FFFFFF 7%, transparent 10%, transparent 12%, #FFFFFF 16%)",
              "repeating-linear-gradient(100deg, #0D5C8F 10%, #93A7D1 15%, #7EB4D8 20%, #C4B5FD 25%, #4A90BF 30%)",
            ].join(", "),
            backgroundSize: "300% 100%, 200% 100%",
            backgroundPosition: "50% 50%, 50% 50%",
            ...(showRadialGradient
              ? {
                  maskImage:
                    "radial-gradient(ellipse at 100% 0%, black 10%, transparent 70%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse at 100% 0%, black 10%, transparent 70%)",
                }
              : {}),
          }}
        >
          {/* After pseudo-element via a real div */}
          <div
            className="absolute inset-0 animate-aurora"
            style={{
              backgroundImage: [
                "repeating-linear-gradient(100deg, #FFFFFF 0%, #FFFFFF 7%, transparent 10%, transparent 12%, #FFFFFF 16%)",
                "repeating-linear-gradient(100deg, #0D5C8F 10%, #93A7D1 15%, #7EB4D8 20%, #C4B5FD 25%, #4A90BF 30%)",
              ].join(", "),
              backgroundSize: "200% 100%, 100% 100%",
              backgroundAttachment: "fixed",
              mixBlendMode: "difference",
            }}
          />
        </div>
      </div>
      {children}
    </div>
  );
};
