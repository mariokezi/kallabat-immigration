"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { stats } from "@/data/site";
import {
  ArrowRight,
  Scale,
  Heart,
  Users,
  Globe,
  Award,
  Star,
  BadgeCheck,
  Shield,
} from "lucide-react";

const values = [
  {
    icon: Scale,
    title: "Exclusively Immigration Law",
    description:
      "Every attorney at our firm practices exclusively in immigration and nationality law. This singular focus allows us to stay ahead of constantly changing regulations and deliver expert counsel.",
  },
  {
    icon: Heart,
    title: "Personal & Corporate Care",
    description:
      "We combine the professionalism of a corporate law practice with the warmth and personal attention our clients deserve. Every case matters, whether it is a multinational corporation or a family petition.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description:
      "Serving clients from every corner of the world, our team understands the cultural nuances and unique challenges that come with navigating the U.S. immigration system.",
  },
  {
    icon: Users,
    title: "Collaborative Team",
    description:
      "With eight experienced immigration attorneys, we leverage collective knowledge and diverse experience to develop the strongest strategy for every case.",
  },
];

const awards = [
  {
    icon: Award,
    title: "AV Preeminent",
    description:
      "Martindale-Hubbell's highest peer review rating for legal ability and professional ethics.",
  },
  {
    icon: Star,
    title: "Super Lawyers",
    description:
      "Recognized among the top attorneys in the state by Super Lawyers magazine.",
  },
  {
    icon: BadgeCheck,
    title: "AILA Member",
    description:
      "Active member of the American Immigration Lawyers Association, the national bar association for immigration lawyers.",
  },
  {
    icon: Shield,
    title: "Avvo Client's Choice",
    description:
      "Awarded the Client's Choice distinction on Avvo based on outstanding client reviews.",
  },
];

export default function AboutPage() {
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
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-blue/20 blur-[120px]"
        />
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
            <Scale className="w-4 h-4" />
            Established 1997
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6 max-w-4xl"
          >
            Michigan&apos;s Trusted{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-gold">
              Immigration Law Firm
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed"
          >
            Founded in 1997 in West Bloomfield, Michigan, Joseph Kallabat &amp;
            Associates has grown to become one of the region&apos;s most respected
            immigration law practices, serving corporate and individual clients
            with unwavering dedication.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6 bg-blue-light text-blue">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Exclusively Dedicated to Immigration Law
            </h2>
            <p className="text-lg text-body leading-relaxed mb-6">
              Since our founding, Joseph Kallabat &amp; Associates has practiced
              exclusively in immigration and nationality law. This deliberate
              focus has allowed our team of eight attorneys to develop deep
              expertise across every area of immigration — from employment-based
              visas and PERM labor certifications to family-based petitions and
              naturalization.
            </p>
            <p className="text-lg text-body leading-relaxed">
              We serve both corporate clients — from startups to Fortune 500
              companies — and individual clients seeking to build their futures in
              the United States. Our approach combines corporate-level
              professionalism with genuine personal care, because behind every
              case is a person or family whose life is about to change.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Values */}
      <Section dark>
        <SectionHeader
          badge="Our Approach"
          title="What Drives Us"
          description="Our values shape how we serve every client, from initial consultation to case resolution."
          light
        />
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Awards */}
      <Section>
        <SectionHeader
          badge="Recognition"
          title="Awards & Distinctions"
          description="Our commitment to excellence has earned recognition from the legal community's most respected organizations."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl bg-white border border-border hover:border-blue/20 hover:shadow-lg hover:shadow-blue/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-light flex items-center justify-center mx-auto mb-4">
                <award.icon className="w-7 h-7 text-blue" />
              </div>
              <h3 className="font-bold text-dark mb-2">{award.title}</h3>
              <p className="text-sm text-body leading-relaxed">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Stats Bar */}
      <section className="relative bg-navy border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "29+", label: "Years of Experience" },
              { value: "601+", label: "Google Reviews" },
              { value: "8", label: "Immigration Attorneys" },
              { value: "7", label: "Industries Served" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold font-mono text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section className="bg-white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Let Us Help You Navigate Immigration
          </h2>
          <p className="text-lg text-body mb-8 leading-relaxed">
            Whether you are an employer seeking to sponsor talent or an individual
            pursuing your American dream, our team is ready to guide you.
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
