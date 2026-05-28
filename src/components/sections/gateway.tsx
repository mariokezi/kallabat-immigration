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
    accent: "from-blue to-navy",
    accentLight: "bg-blue/[0.06]",
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
    accent: "from-gold to-gold-light",
    accentLight: "bg-gold/[0.05]",
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
      <div className="grid md:grid-cols-2 gap-8">
        {paths.map((path, i) => (
          <motion.div
            key={path.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <Link href={path.href} className="group block h-full">
              <div className="relative h-full p-8 md:p-10 rounded-2xl border border-border/60 bg-white hover:border-gold/30 transition-all duration-700 overflow-hidden shimmer-border">
                {/* Gradient top accent */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${path.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                {/* Background glow on hover */}
                <div className={`absolute -top-20 -right-20 w-60 h-60 rounded-full ${path.accentLight} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${path.accentLight} border border-border/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                      <path.icon className="w-6 h-6 text-navy" />
                    </div>
                    <h3 className="font-display text-3xl font-semibold text-dark group-hover:text-navy transition-colors duration-300">
                      {path.title}
                    </h3>
                  </div>

                  <p className="text-body mb-8 leading-relaxed">
                    {path.description}
                  </p>

                  <ul className="space-y-3.5 mb-8">
                    {path.features.map((feature, fi) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + fi * 0.06 }}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        <span className="text-dark/80">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-navy font-semibold text-sm group-hover:text-gold group-hover:gap-3 transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
