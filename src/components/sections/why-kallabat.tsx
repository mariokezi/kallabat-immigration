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
  },
  {
    icon: Users,
    title: "8 Dedicated Attorneys",
    description:
      "Our team of eight experienced immigration lawyers ensures your case receives the specialized attention it deserves, with collaborative knowledge across all visa categories.",
  },
  {
    icon: Clock,
    title: "29+ Years of Results",
    description:
      "With nearly three decades of experience and thousands of successfully resolved cases, we bring proven strategies to every filing.",
  },
  {
    icon: Building,
    title: "Startups to Fortune 500",
    description:
      "We partner with companies of all sizes — from small businesses hiring their first foreign worker to global enterprises managing hundreds of immigration cases.",
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
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group p-8 rounded-xl border border-border/50 bg-white hover:border-navy/15 hover:shadow-md transition-all duration-300"
          >
            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center shrink-0">
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
