"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { attorneys } from "@/data/site";
import { ArrowRight, GraduationCap, Scale } from "lucide-react";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const accentColors = [
  "from-blue to-navy",
  "from-navy to-blue",
  "from-blue/80 to-navy/90",
  "from-navy/90 to-blue/80",
  "from-blue to-navy",
  "from-navy to-blue",
  "from-blue/80 to-navy/90",
  "from-navy/90 to-blue/80",
];

export default function AttorneysPage() {
  const principal = attorneys[0];
  const team = attorneys.slice(1);

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
          className="absolute top-1/4 right-1/3 w-80 h-80 rounded-full bg-blue/20 blur-[120px]"
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-gold mb-8"
          >
            <Scale className="w-4 h-4" />
            8 Immigration Attorneys
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6 max-w-3xl"
          >
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-gold">
              Attorney Team
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
          >
            Every attorney at our firm practices exclusively in immigration and
            nationality law, bringing deep expertise and dedicated focus to your
            case.
          </motion.p>
        </div>
      </section>

      {/* Principal Attorney - Featured */}
      <Section className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-10 md:p-14 rounded-3xl bg-gradient-to-br from-navy to-blue/90 border border-blue/30 shadow-2xl shadow-navy/20"
        >
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Avatar */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-gold/30 to-gold/10 border-2 border-gold/30 flex items-center justify-center shrink-0">
              <span className="text-4xl md:text-5xl font-bold text-gold font-mono">
                {getInitials(principal.name)}
              </span>
            </div>
            {/* Details */}
            <div className="flex-1">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gold/20 text-gold uppercase tracking-wider mb-3">
                {principal.title}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {principal.name}
              </h2>
              <div className="flex items-start gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-gold/60 shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  {principal.education}
                </p>
              </div>
              <p className="text-gray-200 leading-relaxed mb-6">
                {principal.bio}
              </p>
              <div className="flex flex-wrap gap-2">
                {principal.memberships.map((m) => (
                  <span
                    key={m}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-blue-200 border border-white/10"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Team Grid */}
      <Section>
        <SectionHeader
          badge="Our Team"
          title="Attorney Profiles"
          description="Each member of our team brings unique strengths and shared dedication to immigration law excellence."
        />
        <div className="grid md:grid-cols-2 gap-8">
          {team.map((attorney, i) => (
            <motion.div
              key={attorney.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-8 rounded-2xl bg-white border border-border hover:border-blue/20 hover:shadow-xl hover:shadow-blue/5 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                {/* Avatar */}
                <div
                  className={`w-20 h-20 rounded-xl bg-gradient-to-br ${accentColors[i % accentColors.length]} flex items-center justify-center shrink-0`}
                >
                  <span className="text-xl font-bold text-white font-mono">
                    {getInitials(attorney.name)}
                  </span>
                </div>
                {/* Header */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-dark mb-1">
                    {attorney.name}
                  </h3>
                  <span className="inline-block text-sm text-blue font-medium">
                    {attorney.title}
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-border">
                <div className="flex items-start gap-2 mb-4">
                  <GraduationCap className="w-4 h-4 text-blue/50 shrink-0 mt-0.5" />
                  <p className="text-sm text-body leading-relaxed">
                    {attorney.education}
                  </p>
                </div>
                <p className="text-body text-sm leading-relaxed mb-4">
                  {attorney.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  {attorney.memberships.map((m) => (
                    <span
                      key={m}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-blue-light text-blue"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Work With Our Team
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Our attorneys are ready to put their combined expertise to work on
            your immigration matter. Schedule a consultation today.
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
