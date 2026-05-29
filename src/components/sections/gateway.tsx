"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
    imageAlt: "Diverse business team meeting in modern office",
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
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop&crop=faces",
    imageAlt: "Happy diverse family together",
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
      <div className="grid md:grid-cols-2 gap-6">
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
              <div className="relative h-full rounded-2xl border border-border/60 bg-white transition-all duration-300 overflow-hidden group-hover:shadow-[0_20px_50px_-15px_rgba(13,92,143,0.12)] group-hover:border-blue/20">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={path.image}
                    alt={path.imageAlt}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 pt-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue/[0.06] flex items-center justify-center">
                      <path.icon className="w-5 h-5 text-blue" />
                    </div>
                    <h3 className="text-xl font-bold text-navy">
                      {path.title}
                    </h3>
                  </div>

                  <p className="text-body text-sm mb-6 leading-relaxed">
                    {path.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
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
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
