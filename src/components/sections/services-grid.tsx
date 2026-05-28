"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/section";
import { services } from "@/data/site";
import { FileText, Award, Users, Shield, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  FileText,
  Award,
  Users,
  Shield,
};

export function ServicesGrid() {
  return (
    <Section dark>
      <SectionHeader
        badge="Our Services"
        title="Comprehensive Immigration Solutions"
        description="From temporary work visas to permanent residency, our team handles every aspect of immigration law."
        light
      />
      <div className="grid md:grid-cols-2 gap-5">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] || FileText;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              <Link href={service.href} className="group block h-full">
                <div className="h-full p-8 rounded-2xl glass-card hover:bg-white/[0.06] hover:border-gold/20 transition-all duration-500 relative overflow-hidden">
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-gold/[0.08] border border-gold/[0.12] flex items-center justify-center shrink-0 group-hover:bg-gold/[0.12] group-hover:scale-105 transition-all duration-500">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-white/40 leading-relaxed mb-5">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm text-gold/80 font-medium group-hover:text-gold group-hover:gap-3 transition-all duration-300">
                        Learn More <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
