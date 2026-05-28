"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { industries } from "@/data/site";
import {
  ArrowRight,
  Monitor,
  Car,
  TrendingUp,
  Heart,
  Briefcase,
  FlaskConical,
  Trophy,
  Building,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Car,
  TrendingUp,
  Heart,
  Briefcase,
  FlaskConical,
  Trophy,
};

const visaTypes: Record<string, string[]> = {
  Technology: ["H-1B", "L-1", "O-1A", "TN", "E-3", "EB-1", "EB-2 NIW"],
  Automotive: ["H-1B", "L-1A", "L-1B", "TN", "EB-1C", "EB-2", "PERM"],
  "Financial Services": ["H-1B", "E-2", "L-1", "O-1", "TN", "EB-2", "PERM"],
  "Healthcare & Medical": [
    "H-1B",
    "J-1",
    "O-1A",
    "EB-1A",
    "EB-2 NIW",
    "Conrad 30",
  ],
  "Professional Services": ["H-1B", "L-1", "TN", "E-3", "PERM", "EB-2"],
  "Pharma & Biotech": ["H-1B", "O-1A", "EB-1A", "EB-1B", "EB-2 NIW", "J-1"],
  "Arts, Sports & Entertainment": ["O-1B", "P-1A", "P-1B", "P-3", "EB-1A"],
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-blue/20 blur-[120px]"
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-gold mb-8"
          >
            <Building className="w-4 h-4" />
            For Employers
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6 max-w-3xl"
          >
            Industries{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-gold">
              We Serve
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
          >
            From technology startups to Fortune 500 enterprises, our deep
            industry expertise ensures your immigration program is built on
            proven strategies tailored to your sector.
          </motion.p>
        </div>
      </section>

      {/* Industries */}
      <Section>
        <SectionHeader
          badge="Sector Expertise"
          title="Deep Knowledge Across Key Industries"
          description="We understand the unique workforce and compliance challenges each industry faces, and we tailor our immigration strategies accordingly."
        />
        <div className="space-y-6">
          {industries.map((industry, i) => {
            const Icon = iconMap[industry.icon] || Monitor;
            const visas = visaTypes[industry.name] || [];
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-8 md:p-10 rounded-2xl bg-white border border-border hover:border-blue/20 hover:shadow-xl hover:shadow-blue/5 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue to-navy flex items-center justify-center shrink-0">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-blue transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-body leading-relaxed mb-5">
                      {industry.description}
                    </p>
                    {visas.length > 0 && (
                      <div>
                        <span className="text-xs font-semibold text-dark/50 uppercase tracking-wider mb-2 block">
                          Common Visa Types
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {visas.map((visa) => (
                            <span
                              key={visa}
                              className="px-3 py-1 rounded-full text-xs font-medium bg-blue-light text-blue"
                            >
                              {visa}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Partner With Industry-Savvy Immigration Attorneys
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Let our team develop an immigration strategy tailored to your
            industry, workforce needs, and compliance requirements.
          </p>
          <Link href="/contact">
            <Button size="lg" className="group">
              Schedule a Consultation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
