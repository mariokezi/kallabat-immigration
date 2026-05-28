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
        dark ? "bg-navy-deep text-white" : "bg-warm-white",
        className
      )}
    >
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
            "inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-5",
            light ? "text-white/50" : "text-blue"
          )}
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5",
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
            light ? "text-white/50" : "text-body"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
