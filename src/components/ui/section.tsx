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
        "relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden",
        dark ? "bg-navy text-white" : "bg-white",
        className
      )}
    >
      <div className="relative z-10 max-w-7xl mx-auto">{children}</div>
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
    <div className={cn("text-center mb-12 sm:mb-20", className)}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn(
            "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] mb-6 border",
            light
              ? "border-white/[0.08] text-white/50 bg-white/[0.04]"
              : "border-blue/15 text-blue bg-blue-50"
          )}
        >
          <span className={cn(
            "w-1.5 h-1.5 rounded-full",
            light ? "bg-blue-light" : "bg-blue"
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
          "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-5",
          light ? "text-white" : "text-navy"
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
            "text-base sm:text-lg max-w-2xl mx-auto leading-relaxed",
            light ? "text-white/45" : "text-body"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
