"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Shield,
  Users,
  Building2,
  Briefcase,
  Scale,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Work Visas",
    description:
      "H-1B, L-1, TN, O-1, E-2, and other nonimmigrant visa sponsorship for your global workforce.",
    icon: FileText,
    href: "/work-visas",
    features: [
      "H-1B Specialty Occupation",
      "L-1 Intra-Company Transfers",
      "TN USMCA Professionals",
      "O-1 Extraordinary Ability",
    ],
  },
  {
    title: "Green Cards & PERM",
    description:
      "Permanent residency through employment-based categories and PERM labor certification.",
    icon: Users,
    href: "/green-cards",
    features: [
      "EB-1, EB-2, EB-3 Petitions",
      "PERM Labor Certification",
      "EB-5 Investor Visas",
      "National Interest Waivers",
    ],
  },
  {
    title: "Industry Solutions",
    description:
      "Tailored immigration strategies for your specific industry, from tech to healthcare.",
    icon: Building2,
    href: "/industries",
    features: [
      "Technology & IT",
      "Healthcare & Life Sciences",
      "Manufacturing & Engineering",
      "Education & Research",
    ],
  },
];

const stats = [
  { value: "7+", label: "Industries Served" },
  { value: "500+", label: "Employers Partnered" },
  { value: "97%", label: "Approval Rate" },
  { value: "27+", label: "Years Experience" },
];

export function ForEmployersContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-navy">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="grid-emp"
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
              <rect width="100%" height="100%" fill="url(#grid-emp)" />
            </svg>
          </div>
          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-blue/20 blur-[120px]"
          />
          <motion.div
            animate={{ y: [20, -20, 20] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-gold/10 blur-[100px]"
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
              <Building2 className="w-4 h-4" />
              Corporate Immigration
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              Corporate Immigration{" "}
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
              From visa sponsorship to PERM certification and compliance audits,
              we help businesses of all sizes build and retain a global workforce
              with confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <Button size="lg" className="group">
                  Schedule Corporate Consultation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/work-visas">
                <Button variant="outline" size="lg">
                  View Visa Options
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-body mb-8 text-lg"
          >
            We partner with companies from startups to Fortune 500 across 7
            industries
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold font-mono text-navy mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-body font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <Section>
        <SectionHeader
          badge="Our Services"
          title="Comprehensive Employer Immigration"
          description="End-to-end immigration support covering every visa category, compliance requirement, and strategic need."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Link href={service.href} className="group block h-full">
                <div className="relative h-full p-8 rounded-2xl border border-border bg-white hover:border-blue/30 hover:shadow-xl hover:shadow-blue/5 transition-all duration-500 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue to-navy opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="w-12 h-12 rounded-xl bg-blue-light flex items-center justify-center mb-6 group-hover:bg-blue/10 transition-colors">
                    <service.icon className="w-6 h-6 text-blue" />
                  </div>

                  <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-blue transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-body mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
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

                  <div className="flex items-center gap-2 text-blue font-semibold text-sm group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Compliance Section */}
      <Section dark>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-blue-200 text-sm font-medium mb-6">
              Compliance & Audits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Stay Compliant with Confidence
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Immigration compliance is not optional. ICE worksite enforcement
              actions have increased significantly, and I-9 penalties can reach
              up to $2,507 per violation. Our proactive compliance programs
              protect your business.
            </p>
            <ul className="space-y-4">
              {[
                "I-9 audits and remediation",
                "H-1B public access file compliance",
                "LCA posting and wage-level reviews",
                "Worksite visit preparation",
                "Policy development and training",
                "Government audit response",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <Shield className="w-4 h-4 text-gold shrink-0" />
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              {
                icon: Shield,
                title: "Proactive Audits",
                desc: "Regular I-9 and compliance reviews to catch issues before they become violations.",
              },
              {
                icon: Scale,
                title: "Government Response",
                desc: "Expert representation during DOL, ICE, and USCIS investigations.",
              },
              {
                icon: Briefcase,
                title: "Policy Design",
                desc: "Custom immigration policies and procedures tailored to your organization.",
              },
              {
                icon: Users,
                title: "Staff Training",
                desc: "I-9 completion training and best practices for HR teams.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-6"
              >
                <card.icon className="w-8 h-8 text-gold mb-3" />
                <h4 className="text-white font-semibold mb-2 text-sm">
                  {card.title}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
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
            Ready to Build Your Global Team?
          </h2>
          <p className="text-body text-lg mb-8 leading-relaxed">
            Schedule a corporate consultation to discuss your immigration needs.
            We will develop a strategic plan tailored to your business goals and
            timeline.
          </p>
          <Link href="/contact">
            <Button size="lg" className="group">
              Schedule a Corporate Consultation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </Section>
    </>
  );
}
