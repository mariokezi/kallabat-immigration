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
      <div className="grid md:grid-cols-2 gap-4">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] || FileText;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Link href={service.href} className="group block h-full">
                <div className="h-full p-8 rounded-xl border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-lg bg-white/[0.06] flex items-center justify-center shrink-0 group-hover:bg-white/[0.1] transition-colors duration-300">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-white/40 leading-relaxed mb-4 text-sm">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm text-white/50 font-medium group-hover:text-gold group-hover:gap-3 transition-all duration-300">
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
