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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {industries.map((industry, i) => {
          const Icon = iconMap[industry.icon] || Monitor;
          return (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl border border-border/50 bg-warm-white hover:bg-white hover:border-navy/15 hover:shadow-[0_12px_40px_-10px_rgba(10,37,64,0.10)] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-navy/[0.05] flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-navy/10 group-hover:to-blue/10 transition-all duration-300">
                <Icon className="w-5 h-5 text-navy/70" />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">
                {industry.name}
              </h3>
              <p className="text-sm text-body/80 leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          );
        })}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-12"
      >
        <Link
          href="/industries"
          className="inline-flex items-center gap-2 text-navy font-semibold text-sm hover:gap-3 transition-all duration-300"
        >
          View All Industries &rarr;
        </Link>
      </motion.div>
    </Section>
  );
}
