"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, User, ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";

const paths = [
  {
    title: "For Employers",
    description:
      "H-1B sponsorship, PERM labor certification, green cards, and compliance solutions for businesses of all sizes.",
    icon: Building2,
    href: "/for-employers",
    features: [
      "H-1B & Work Visa Sponsorship",
      "Green Cards & PERM",
      "Worksite Compliance",
      "Industry-Specific Solutions",
    ],
  },
  {
    title: "For Individuals",
    description:
      "Family-based immigration, citizenship and naturalization, and personal visa matters.",
    icon: User,
    href: "/for-individuals",
    features: [
      "Family Green Cards",
      "Citizenship & Naturalization",
      "Visa Consultations",
      "Status Adjustments",
    ],
  },
];

export function Gateway() {
  return (
    <Section>
      <SectionHeader
        badge="How Can We Help?"
        title="Immigration Solutions Tailored to You"
        description="Whether you're an employer seeking global talent or an individual navigating the immigration process, we're here to guide you."
      />
      <div className="grid md:grid-cols-2 gap-6">
        {paths.map((path, i) => (
          <motion.div
            key={path.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6 }}
          >
            <Link href={path.href} className="group block h-full">
              <div className="relative h-full p-8 md:p-10 rounded-xl border border-border/60 bg-white hover:border-navy/20 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-navy/[0.04] flex items-center justify-center group-hover:bg-navy/[0.08] transition-colors duration-300">
                    <path.icon className="w-5 h-5 text-navy" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark">
                    {path.title}
                  </h3>
                </div>

                <p className="text-body mb-8 leading-relaxed">
                  {path.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {path.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                    >
                      <div className="w-1 h-1 rounded-full bg-navy/40 shrink-0" />
                      <span className="text-dark/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-navy font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
