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
    <Section className="bg-blue-50">
      <SectionHeader
        badge="How Can We Help?"
        title="Immigration Solutions Tailored to You"
        description="Whether you're an employer seeking global talent or an individual navigating the immigration process, we're here to guide you."
      />
      <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
        {paths.map((path, i) => (
          <motion.div
            key={path.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
          >
            <Link href={path.href} className="group block h-full">
              <div className="relative h-full p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl border border-border/60 bg-white transition-all duration-300 overflow-hidden group-hover:shadow-[0_20px_50px_-15px_rgba(13,92,143,0.12)] group-hover:border-blue/20">
                <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue/[0.06] flex items-center justify-center group-hover:bg-blue/[0.10] transition-colors duration-300">
                    <path.icon className="w-5 h-5 text-blue" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy">
                    {path.title}
                  </h3>
                </div>

                <p className="text-body text-sm mb-5 sm:mb-6 leading-relaxed">
                  {path.description}
                </p>

                <ul className="space-y-2.5 mb-5 sm:mb-6">
                  {path.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                      <span className="text-dark/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-blue font-semibold text-sm group-hover:gap-3 transition-all duration-300">
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
