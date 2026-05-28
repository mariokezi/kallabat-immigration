"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { industries } from "@/data/site";
import {
  Monitor,
  Car,
  TrendingUp,
  Heart,
  Briefcase,
  FlaskConical,
  Trophy,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Car,
  TrendingUp,
  Heart,
  Briefcase,
  FlaskConical,
  Trophy,
};

export function IndustriesSection() {
  return (
    <Section className="bg-white">
      <SectionHeader
        badge="Industries We Serve"
        title="Deep Expertise Across Key Sectors"
        description="Our firm has a long history of partnering with companies across industries — from startups to Fortune 500 enterprises."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {industries.map((industry, i) => {
          const Icon = iconMap[industry.icon] || Monitor;
          return (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.07,
                duration: 0.5,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="group relative p-7 rounded-2xl border border-border/50 bg-warm-white hover:bg-white hover:border-gold/25 hover:shadow-xl hover:shadow-gold/[0.04] transition-all duration-500 overflow-hidden"
            >
              {/* Subtle corner glow */}
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gold/[0.04] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-navy/[0.04] border border-border/40 flex items-center justify-center mb-5 group-hover:bg-gold/[0.06] group-hover:border-gold/20 transition-all duration-500">
                  <Icon className="w-5 h-5 text-navy/70 group-hover:text-gold transition-colors duration-500" />
                </div>
                <h3 className="font-display text-xl font-semibold text-dark mb-2 group-hover:text-navy transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="text-sm text-body/80 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12"
      >
        <Link
          href="/industries"
          className="inline-flex items-center gap-2 text-navy font-medium hover:text-gold transition-colors duration-300 group"
        >
          <span>View All Industries</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
        </Link>
      </motion.div>
    </Section>
  );
}
