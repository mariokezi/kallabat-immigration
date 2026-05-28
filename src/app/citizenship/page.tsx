"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  CheckCircle,
  FileText,
  Fingerprint,
  MessageSquare,
  Flag,
} from "lucide-react";

const requirements = [
  "Be at least 18 years old at the time of filing",
  "Be a lawful permanent resident (green card holder) for at least 5 years — or 3 years if married to and living with a U.S. citizen",
  "Have maintained continuous residence in the United States for at least 5 years (or 3 years) prior to filing",
  "Have been physically present in the United States for at least 30 months out of the 5 years (or 18 months out of 3 years) immediately preceding the filing date",
  "Have resided in the state or USCIS district where you file for at least 3 months",
  "Demonstrate good moral character for the statutory period",
  "Be able to read, write, and speak basic English",
  "Pass a civics test demonstrating knowledge of U.S. history and government",
  "Be willing to take the Oath of Allegiance to the United States",
];

const processSteps = [
  {
    icon: FileText,
    step: "01",
    title: "File Form N-400",
    description:
      "Submit the Application for Naturalization (Form N-400) with USCIS, along with required supporting documents, photographs, and the filing fee. Our attorneys prepare and review your application to ensure accuracy.",
  },
  {
    icon: Fingerprint,
    step: "02",
    title: "Biometrics Appointment",
    description:
      "Attend a biometrics appointment at a USCIS Application Support Center to provide your fingerprints, photograph, and signature for background check purposes.",
  },
  {
    icon: MessageSquare,
    step: "03",
    title: "The Interview",
    description:
      "Attend an in-person interview with a USCIS officer who will review your application, test your English proficiency, and administer the civics exam (covering U.S. history and government). You must answer at least 6 out of 10 civics questions correctly.",
  },
  {
    icon: Flag,
    step: "04",
    title: "Oath Ceremony",
    description:
      "Upon approval, take the Oath of Allegiance at a naturalization ceremony. You will receive your Certificate of Naturalization, officially making you a United States citizen with full rights and privileges.",
  },
];

export default function CitizenshipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gold/10 blur-[100px]"
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-gold mb-8"
          >
            <Shield className="w-4 h-4" />
            For Individuals
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6 max-w-3xl"
          >
            Citizenship &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-gold">
              Naturalization
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed"
          >
            Becoming a U.S. citizen is one of the most significant milestones in
            the immigration journey. Our attorneys guide you through every step of
            the naturalization process.
          </motion.p>
        </div>
      </section>

      {/* Requirements */}
      <Section>
        <SectionHeader
          badge="Eligibility"
          title="Naturalization Requirements"
          description="To be eligible for U.S. citizenship through naturalization, applicants must meet the following requirements established by the Immigration and Nationality Act."
        />
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {requirements.map((req, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex gap-4 p-5 rounded-xl bg-white border border-border hover:border-blue/20 hover:shadow-md transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-blue shrink-0 mt-0.5" />
                <p className="text-body leading-relaxed">{req}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Steps */}
      <Section dark>
        <SectionHeader
          badge="The Process"
          title="Steps to U.S. Citizenship"
          description="The naturalization process involves several stages, from application filing to the oath ceremony."
          light
        />
        <div className="grid md:grid-cols-2 gap-8">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center shrink-0">
                  <step.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <span className="text-xs font-mono text-gold/60 uppercase tracking-wider">
                    Step {step.step}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Begin Your Path to Citizenship
          </h2>
          <p className="text-lg text-body mb-8 leading-relaxed">
            Whether you are preparing to file your N-400 or need help understanding
            your eligibility, our experienced immigration attorneys are here to
            help.
          </p>
          <Link href="/contact">
            <Button size="lg" className="group">
              Schedule a Consultation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
