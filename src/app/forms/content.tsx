"use client";

import { motion } from "framer-motion";

import {
  FileText,
  Users,
  Briefcase,
  Globe,
  Shield,
  Heart,
  Lock,
  ArrowRight,
} from "lucide-react";
import { Section } from "@/components/ui/section";

const formCards = [
  {
    title: "H-1B Employer Questionnaire",
    description: "For employers petitioning for H-1B workers",
    icon: Briefcase,
    slug: "h1b-employer",
    color: "from-blue to-navy",
  },
  {
    title: "H-1B Employee Questionnaire",
    description: "For employees being sponsored for H-1B",
    icon: FileText,
    slug: "h1b-employee",
    color: "from-blue to-navy",
  },
  {
    title: "TN Employer Questionnaire",
    description: "For employers petitioning for TN workers",
    icon: Globe,
    slug: "tn-employer",
    color: "from-blue to-navy",
  },
  {
    title: "TN Employee Questionnaire",
    description: "For TN visa applicants",
    icon: Users,
    slug: "tn-employee",
    color: "from-blue to-navy",
  },
  {
    title: "E-3 Employer Questionnaire",
    description: "For employers of Australian specialty workers",
    icon: Shield,
    slug: "e3-employer",
    color: "from-blue to-navy",
  },
  {
    title: "H-4/TD Dependent Questionnaire",
    description: "For dependents of H/TN visa holders",
    icon: Heart,
    slug: "h4-td-dependent",
    color: "from-blue to-navy",
  },
];

export function FormsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="forms-grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#forms-grid)" />
          </svg>
        </div>
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-blue/20 blur-[120px]"
        />
        <motion.div
          animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-gold/10 blur-[100px]"
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-gold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            Secure Online Forms
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4"
          >
            Immigration Questionnaires
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8"
          >
            Complete the appropriate questionnaire below. Your responses are
            transmitted securely and go directly to our legal team.
          </motion.p>

          {/* Security Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/10"
          >
            <Lock className="w-4 h-4 text-success" />
            <span className="text-sm text-gray-300">
              256-bit Encrypted &bull; Secure Submission &bull; No Data Stored
            </span>
          </motion.div>
        </div>
      </section>

      {/* Form Cards Grid */}
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {formCards.map((card, index) => (
            <motion.div
              key={card.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <div className="group block h-full cursor-pointer">
                <div className="relative h-full bg-white rounded-2xl border border-border p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue/30 overflow-hidden">
                  {/* Subtle gradient accent on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-light/0 to-blue-light/0 group-hover:from-blue-light/40 group-hover:to-transparent transition-all duration-500 rounded-2xl" />

                  <div className="relative">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue to-navy flex items-center justify-center mb-6 shadow-lg shadow-blue/20 group-hover:shadow-xl group-hover:shadow-blue/30 transition-shadow duration-300">
                      <card.icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-blue transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-body text-sm leading-relaxed mb-6">
                      {card.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-blue text-sm font-medium">
                      <span>Coming Soon</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white rounded-full border border-border px-6 py-3 shadow-sm">
            <Shield className="w-5 h-5 text-blue" />
            <p className="text-sm text-body">
              All questionnaire data is encrypted end-to-end and handled in
              compliance with attorney-client privilege.
            </p>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
