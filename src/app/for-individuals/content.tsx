"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Heart, Shield, User, Users, Globe } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Family Immigration",
    description:
      "Reunite with your loved ones through family-based green cards and immigrant visa petitions. We handle spousal, parent, child, and sibling petitions with care and attention to detail.",
    icon: Heart,
    href: "/family-immigration",
    features: [
      "Spousal & Fiance(e) Petitions",
      "Parent & Child Sponsorship",
      "Sibling Petitions",
      "Adjustment of Status",
      "Consular Processing",
    ],
  },
  {
    title: "Citizenship & Naturalization",
    description:
      "Take the final step on your immigration journey. We guide you through the naturalization process from eligibility evaluation to your oath ceremony.",
    icon: Shield,
    href: "/citizenship",
    features: [
      "N-400 Naturalization Applications",
      "Citizenship Through Parents",
      "Civics & Interview Preparation",
      "Certificate of Citizenship",
      "Dual Citizenship Guidance",
    ],
  },
];

const highlights = [
  {
    icon: Users,
    title: "Families Reunited",
    value: "1,000+",
    description: "Families brought together through our immigration services.",
  },
  {
    icon: Globe,
    title: "Countries Represented",
    value: "80+",
    description: "Clients from countries around the world trust our firm.",
  },
  {
    icon: Shield,
    title: "Years of Service",
    value: "27+",
    description: "Dedicated to personal immigration since 1997.",
  },
];

export function ForIndividualsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-navy">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="grid-ind"
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
              <rect width="100%" height="100%" fill="url(#grid-ind)" />
            </svg>
          </div>
          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full bg-blue/20 blur-[120px]"
          />
          <motion.div
            animate={{ y: [15, -15, 15] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-gold/10 blur-[100px]"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-gold mb-8"
            >
              <User className="w-4 h-4" />
              Personal Immigration
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              Personal Immigration{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-gold">
                Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed"
            >
              From reuniting families to achieving citizenship, we provide
              compassionate and experienced legal guidance for every step of your
              personal immigration journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <Button size="lg" className="group">
                  Schedule Personal Consultation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/family-immigration">
                <Button variant="outline" size="lg">
                  Family Immigration
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <item.icon className="w-8 h-8 text-blue mb-3" />
                <div className="text-3xl md:text-4xl font-bold font-mono text-navy mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-body font-medium uppercase tracking-wider mb-1">
                  {item.title}
                </div>
                <p className="text-xs text-body">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <Section>
        <SectionHeader
          badge="Our Services"
          title="How We Help Individuals & Families"
          description="We understand that immigration is deeply personal. Our team provides individualized attention and strategic guidance for every case."
        />
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Link href={service.href} className="group block h-full">
                <div className="relative h-full p-8 md:p-10 rounded-2xl border border-border bg-white hover:border-blue/30 hover:shadow-xl hover:shadow-blue/5 transition-all duration-500 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue to-navy opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-blue-light flex items-center justify-center group-hover:bg-blue/10 transition-colors">
                      <service.icon className="w-7 h-7 text-blue" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark group-hover:text-blue transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-body mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                        <span className="text-dark">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-blue font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Family & Citizenship Description */}
      <Section dark>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-blue-200 text-sm font-medium mb-6">
              Family-Based Immigration
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Bringing Families Together
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Family-based immigration is the cornerstone of the U.S.
              immigration system. U.S. citizens and lawful permanent residents
              can petition for certain family members to receive green cards and
              join them in the United States.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We handle the full spectrum of family petitions, including
              immediate relative petitions for spouses, parents, and unmarried
              children under 21, as well as family preference categories for
              adult children, siblings, and married sons and daughters of U.S.
              citizens and LPRs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-blue-200 text-sm font-medium mb-6">
              Citizenship & Naturalization
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Your Path to Citizenship
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Naturalization is the process by which a lawful permanent resident
              becomes a U.S. citizen. It is the culmination of your immigration
              journey and opens the door to full civic participation, including
              voting and the ability to sponsor additional family members.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our team guides you through the entire process: eligibility
              evaluation, N-400 preparation, interview and civics test
              preparation, and representation at your naturalization interview.
              We also handle derivative citizenship and certificates of
              citizenship for those who may have acquired citizenship through
              their parents.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Let Us Guide Your Immigration Journey
          </h2>
          <p className="text-body text-lg mb-8 leading-relaxed">
            Every case is unique. Schedule a personal consultation to discuss
            your immigration goals, and we will create a plan that puts your
            family first.
          </p>
          <Link href="/contact">
            <Button size="lg" className="group">
              Schedule a Personal Consultation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </Section>
    </>
  );
}
