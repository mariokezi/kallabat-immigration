"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Printer,
  Send,
  CheckCircle,
  Calendar,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

const areasOfInterest = [
  "Work Visas",
  "Green Cards",
  "Family Immigration",
  "Citizenship",
  "Other",
];

const contactInfo = [
  {
    icon: MapPin,
    label: "Office Address",
    value: siteConfig.address.full,
    href: siteConfig.social.google,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`,
  },
  {
    icon: Printer,
    label: "Fax",
    value: siteConfig.fax,
    href: null,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: siteConfig.hours,
    href: null,
  },
];

export function ContactContent() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    area: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSending(true);
    console.log("Contact form submission:", formState);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 1000);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="contact-grid"
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
            <rect width="100%" height="100%" fill="url(#contact-grid)" />
          </svg>
        </div>
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-blue/20 blur-[120px]"
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-gold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            We&apos;re Here to Help
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl"
          >
            Have a question about your immigration case? Reach out to our team
            for a confidential consultation.
          </motion.p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <Section>
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl border border-border p-12 text-center"
              >
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-3">
                  Thank You!
                </h3>
                <p className="text-body max-w-md mx-auto">
                  We&apos;ve received your message and will get back to you
                  within one business day. For urgent matters, please call us
                  directly at{" "}
                  <a
                    href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                    className="text-blue font-medium hover:underline"
                  >
                    {siteConfig.phone}
                  </a>
                  .
                </p>
                <Button
                  className="mt-8"
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({
                      name: "",
                      email: "",
                      phone: "",
                      company: "",
                      area: "",
                      message: "",
                    });
                  }}
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-border p-8 md:p-10 shadow-sm"
              >
                <h2 className="text-2xl font-bold text-dark mb-2">
                  Send Us a Message
                </h2>
                <p className="text-body mb-8">
                  Fill out the form below and a member of our team will respond
                  promptly.
                </p>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-dark mb-1.5"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-warm-white text-dark placeholder:text-body/50 focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-dark mb-1.5"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-warm-white text-dark placeholder:text-body/50 focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-dark mb-1.5"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-warm-white text-dark placeholder:text-body/50 focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-dark mb-1.5"
                    >
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formState.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-warm-white text-dark placeholder:text-body/50 focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-colors"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="area"
                    className="block text-sm font-medium text-dark mb-1.5"
                  >
                    Area of Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="area"
                    name="area"
                    required
                    value={formState.area}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-warm-white text-dark focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-colors appearance-none"
                  >
                    <option value="" disabled>
                      Select an area...
                    </option>
                    {areasOfInterest.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-dark mb-1.5"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell us about your immigration needs..."
                    className="w-full px-4 py-3 rounded-lg border border-border bg-warm-white text-dark placeholder:text-body/50 focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="mt-6 w-full sm:w-auto"
                  disabled={sending}
                >
                  {sending ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Right: Contact Info + Calendly */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Office Info */}
            <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
              <h3 className="text-xl font-bold text-dark mb-6">
                Office Information
              </h3>
              <ul className="space-y-5">
                {contactInfo.map((item) => (
                  <li key={item.label} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-light flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-blue" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-body/70 uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-dark font-medium hover:text-blue transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-dark font-medium">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Calendly Placeholder */}
            <div className="bg-gradient-to-br from-blue to-navy rounded-2xl p-8 text-white">
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Schedule a Consultation
              </h3>
              <p className="text-blue-200 text-sm leading-relaxed mb-5">
                Book a convenient time to speak with one of our immigration
                attorneys about your case.
              </p>
              <div className="rounded-xl border border-white/20 bg-white/10 p-6 text-center">
                <Calendar className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="text-sm font-medium text-white/90">
                  Calendly link coming soon
                </p>
                <p className="text-xs text-white/60 mt-1">
                  Online scheduling will be available shortly
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Map Placeholder */}
      <Section className="!pt-0">
        <SectionHeader
          badge="Our Location"
          title="Visit Our Office"
          description="Conveniently located on Orchard Lake Road in West Bloomfield, Michigan."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm"
        >
          <div className="h-80 md:h-96 bg-blue-light flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full bg-blue/10 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-blue" />
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-dark mb-1">
                {siteConfig.name}
              </p>
              <p className="text-body">{siteConfig.address.street}</p>
              <p className="text-body">
                {siteConfig.address.city}, {siteConfig.address.state}{" "}
                {siteConfig.address.zip}
              </p>
            </div>
            <a
              href={siteConfig.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue text-white text-sm font-medium hover:bg-navy transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Open in Google Maps
            </a>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
