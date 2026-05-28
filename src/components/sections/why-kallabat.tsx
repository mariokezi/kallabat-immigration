"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { Scale, Clock, Users, Building } from "lucide-react";

const differentiators = [
  {
    icon: Scale,
    title: "Exclusively Immigration Law",
    description:
      "Since 1997, every attorney in our firm has practiced exclusively in immigration and nationality law. This singular focus means deeper expertise for your case.",
    number: "01",
  },
  {
    icon: Users,
    title: "8 Dedicated Attorneys",
    description:
      "Our team of eight experienced immigration lawyers ensures your case receives the specialized attention it deserves, with collaborative knowledge across all visa categories.",
    number: "02",
  },
  {
    icon: Clock,
    title: "29+ Years of Results",
    description:
      "With nearly three decades of experience and thousands of successfully resolved cases, we bring proven strategies to every filing.",
    number: "03",
  },
  {
    icon: Building,
    title: "Startups to Fortune 500",
    description:
      "We partner with companies of all sizes — from small businesses hiring their first foreign worker to global enterprises managing hundreds of immigration cases.",
    number: "04",
  },
];

export function WhyKallabat() {
  return (
    <Section>
      <SectionHeader
        badge="Why Choose Us"
        title="What Sets Kallabat Law Apart"
        description="Our commitment to excellence in immigration law has earned us the trust of hundreds of employers and thousands of individuals."
      />
      <div className="grid md:grid-cols-2 gap-5">
        {differentiators.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="group relative p-8 rounded-2xl border border-border/50 bg-white hover:border-navy/15 hover:shadow-[0_16px_48px_-12px_rgba(10,37,64,0.12)] transition-all duration-300 overflow-hidden"
          >
            {/* Number watermark */}
            <span className="absolute top-4 right-6 text-7xl font-bold text-navy/[0.03] group-hover:text-gold/[0.06] transition-colors duration-500 select-none">
              {item.number}
            </span>

            <div className="relative flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy to-blue flex items-center justify-center shrink-0 shadow-lg shadow-navy/15">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-body/80 leading-relaxed text-sm">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
