"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart, FileCheck, Clock } from "lucide-react";

const preferences = [
  {
    category: "Immediate Relatives",
    subtitle: "No Annual Quota",
    description:
      "Spouses of U.S. citizens, unmarried children under 21 of U.S. citizens, and parents of U.S. citizens (petitioner must be 21+). Immediate relatives are not subject to annual numerical limitations, meaning visas are always available without a waiting period.",
    highlight: true,
  },
  {
    category: "1st Preference (F1)",
    subtitle: "23,400 visas per year",
    description:
      "Unmarried sons and daughters (21 years of age and older) of U.S. citizens. While the annual allocation is 23,400, any unused visas from the 4th preference category are added to this category.",
  },
  {
    category: "2nd Preference (F2)",
    subtitle: "114,200 visas per year",
    description:
      "Spouses, minor children, and unmarried sons and daughters (21 and older) of lawful permanent residents. This category is divided into F2A (spouses and minor children, who receive 77% of the allocation) and F2B (unmarried sons and daughters 21 and older).",
  },
  {
    category: "3rd Preference (F3)",
    subtitle: "23,400 visas per year",
    description:
      "Married sons and daughters of U.S. citizens, along with their spouses and minor children. Wait times in this category can be significant depending on the beneficiary's country of birth.",
  },
  {
    category: "4th Preference (F4)",
    subtitle: "65,000 visas per year",
    description:
      "Brothers and sisters of adult U.S. citizens (petitioner must be 21+), along with their spouses and minor children. This category typically has the longest wait times, often exceeding 15 years for certain countries.",
  },
];

const processSteps = [
  {
    icon: FileCheck,
    step: "01",
    title: "File the Petition",
    description:
      "The U.S. citizen or permanent resident sponsor files Form I-130 (Petition for Alien Relative) with USCIS, establishing the qualifying family relationship.",
  },
  {
    icon: Clock,
    step: "02",
    title: "Wait for Priority Date",
    description:
      "For preference categories, you must wait until your priority date becomes current according to the monthly Visa Bulletin published by the Department of State.",
  },
  {
    icon: Users,
    step: "03",
    title: "Apply for the Visa",
    description:
      "Once a visa is available, the beneficiary applies through either consular processing (at a U.S. embassy abroad) or adjustment of status (Form I-485, if already in the U.S.).",
  },
  {
    icon: Heart,
    step: "04",
    title: "Receive Your Green Card",
    description:
      "After approval, the beneficiary receives lawful permanent resident status and a green card, allowing them to live and work permanently in the United States.",
  },
];

export default function FamilyImmigrationPage() {
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
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-blue/20 blur-[120px]"
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-gold mb-8"
          >
            <Heart className="w-4 h-4" />
            For Individuals &amp; Families
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6 max-w-3xl"
          >
            Family-Based{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-gold">
              Immigration
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed"
          >
            Reuniting families is at the heart of U.S. immigration law. We guide
            U.S. citizens and permanent residents through every step of sponsoring
            their loved ones for green cards.
          </motion.p>
        </div>
      </section>

      {/* Preference Categories */}
      <Section>
        <SectionHeader
          badge="Preference Categories"
          title="Understanding Family-Based Visa Categories"
          description="U.S. immigration law organizes family-based immigration into categories based on the relationship between the petitioner and the beneficiary."
        />
        <div className="space-y-6">
          {preferences.map((pref, i) => (
            <motion.div
              key={pref.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`p-8 rounded-2xl border transition-all duration-300 ${
                pref.highlight
                  ? "bg-gradient-to-br from-navy to-blue/90 border-blue/30 text-white shadow-xl shadow-blue/10"
                  : "bg-white border-border hover:border-blue/20 hover:shadow-lg hover:shadow-blue/5"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="shrink-0">
                  <span
                    className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold ${
                      pref.highlight
                        ? "bg-gold/20 text-gold"
                        : "bg-blue-light text-blue"
                    }`}
                  >
                    {pref.subtitle}
                  </span>
                </div>
                <div>
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      pref.highlight ? "text-white" : "text-dark"
                    }`}
                  >
                    {pref.category}
                  </h3>
                  <p
                    className={`leading-relaxed ${
                      pref.highlight ? "text-gray-200" : "text-body"
                    }`}
                  >
                    {pref.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Process Overview */}
      <Section dark>
        <SectionHeader
          badge="The Process"
          title="How Family-Based Immigration Works"
          description="From filing the initial petition to receiving your green card, here is what to expect."
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
              className="flex gap-5"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center shrink-0">
                <span className="text-gold font-mono font-bold text-sm">
                  {step.step}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Ready to Reunite Your Family?
          </h2>
          <p className="text-lg text-body mb-8 leading-relaxed">
            Our attorneys have helped thousands of families navigate the
            immigration process. Schedule a consultation to discuss your
            family-based petition today.
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
