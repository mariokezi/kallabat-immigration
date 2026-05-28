"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export function Section({ children, className, id, dark }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      className={cn(
        "relative py-24 md:py-32 px-6 overflow-hidden",
        dark ? "bg-navy text-white" : "bg-warm-white",
        className
      )}
    >
      {dark && (
        <>
          <div className="absolute inset-0 opacity-[0.03]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="section-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#section-grid)" />
            </svg>
          </div>
          <div className="grain absolute inset-0" />
        </>
      )}
      <div className="relative max-w-7xl mx-auto">{children}</div>
    </motion.section>
  );
}

export function SectionHeader({
  badge,
  title,
  description,
  light,
  className,
}: {
  badge?: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("text-center mb-20", className)}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn(
            "inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium tracking-wide mb-6",
            light
              ? "bg-white/[0.06] border border-white/[0.08] text-gold-light"
              : "bg-gold/[0.08] border border-gold/[0.15] text-gold"
          )}
        >
          <span className={cn(
            "w-1.5 h-1.5 rounded-full",
            light ? "bg-gold-light" : "bg-gold"
          )} />
          {badge}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn(
          "font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-5",
          light ? "text-white" : "text-dark"
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn(
            "text-lg max-w-2xl mx-auto leading-relaxed",
            light ? "text-gray-400" : "text-body"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
