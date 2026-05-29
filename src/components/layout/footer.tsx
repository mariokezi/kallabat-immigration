"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, ArrowRight } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";

const footerLinks = {
  "For Employers": [
    { label: "Work Visas", href: "/work-visas" },
    { label: "Green Cards & PERM", href: "/green-cards" },
    { label: "Industries", href: "/industries" },
    { label: "Employer Forms", href: "/forms" },
  ],
  "For Individuals": [
    { label: "Family Immigration", href: "/family-immigration" },
    { label: "Citizenship", href: "/citizenship" },
    { label: "FAQs", href: "/faqs" },
  ],
  "Our Firm": [
    { label: "About Us", href: "/about" },
    { label: "Attorney Profiles", href: "/attorneys" },
    { label: "Contact", href: "/contact" },
  ],
};

const badges = ["AILA Member", "AV Preeminent", "Super Lawyers"];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* CTA Band */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-5"
          >
            Get Started Today
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-5"
          >
            Ready to Discuss Your{" "}
            <span className="text-blue-light">Immigration Needs?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-lg mb-10 max-w-xl mx-auto"
          >
            Schedule a consultation with one of our experienced immigration attorneys today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <Button variant="gold" size="lg">
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a href={`tel:${siteConfig.phone.replace(/[^\d]/g, "")}`}>
              <Button variant="outline" size="lg">
                <Phone className="w-4 h-4" />
                Call {siteConfig.phone}
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="Joseph Kallabat & Associates, P.C."
                width={200}
                height={55}
                className="h-10 w-auto object-contain brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-white/35 text-sm mb-8 max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-white/45 hover:text-white/65 transition-colors">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{siteConfig.address.full}</span>
              </div>
              <div className="flex items-center gap-3 text-white/45 hover:text-white/65 transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/[^\d]/g, "")}`}>
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/45 hover:text-white/65 transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
              <div className="flex items-start gap-3 text-white/45">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p>Mon - Thu: 9AM - 6PM</p>
                  <p>Friday: 9AM - 5PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white/80 text-sm uppercase tracking-[0.1em] mb-5">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/35 hover:text-white/70 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-3 mt-14 pt-8 border-t border-white/[0.06]">
          {badges.map((badge) => (
            <span
              key={badge}
              className="px-3 py-1.5 rounded text-xs font-medium bg-white/[0.04] border border-white/[0.06] text-white/50"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/25">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/faqs" className="hover:text-white/50 transition-colors">
              FAQs
            </Link>
            <Link href="/contact" className="hover:text-white/50 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
