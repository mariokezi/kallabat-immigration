"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig, navLinks } from "@/data/site";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Top bar — desktop only */}
      <div className="bg-navy text-white/60 text-xs py-2.5 px-6 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3" />
            <span>{siteConfig.address.full}</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.phone.replace(/[^\d]/g, "")}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3" />
              {siteConfig.phone}
            </a>
            <span className="text-white/20">|</span>
            <span className="text-white/40">{siteConfig.hours.split("|")[0].trim()}</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300 bg-white border-b",
          scrolled ? "shadow-sm border-border/50" : "border-border/20"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
          {/* Logo — bigger on mobile, with company name */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/logo.png"
              alt="Joseph Kallabat & Associates, P.C."
              width={200}
              height={60}
              className="h-10 sm:h-12 w-auto object-contain"
              priority
            />
            <div className="sm:hidden leading-tight">
              <span className="font-bold text-[14px] text-navy block">Kallabat Law</span>
            </div>
          </Link>

          {/* Desktop nav — more spacing */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() =>
                  link.children && setActiveDropdown(link.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "px-4 py-2.5 rounded-lg text-[13px] font-medium transition-colors duration-150",
                    "text-body hover:text-navy",
                    activeDropdown === link.label && "text-navy"
                  )}
                >
                  <span className="flex items-center gap-1.5">
                    {link.label}
                    {link.children && (
                      <ChevronDown
                        className={cn(
                          "w-3 h-3 transition-transform duration-200",
                          activeDropdown === link.label && "rotate-180"
                        )}
                      />
                    )}
                  </span>
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.12 }}
                      className="absolute top-full left-0 mt-2 w-56 rounded-xl shadow-lg shadow-navy/5 p-2 bg-white border border-border/60"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 rounded-lg text-sm text-body hover:text-navy hover:bg-gray-50 transition-colors duration-100"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Phone on tablet */}
            <a
              href={`tel:${siteConfig.phone.replace(/[^\d]/g, "")}`}
              className="hidden md:flex lg:hidden items-center gap-1.5 text-sm text-navy font-medium"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phone}
            </a>
            <Link href="/contact" className="hidden md:block">
              <Button size="sm" variant="primary" className="rounded-full px-6">
                Schedule Consultation
              </Button>
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 rounded-lg transition-colors hover:bg-gray-50 text-navy"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-white overflow-y-auto lg:hidden"
          >
            <nav className="px-4 py-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3.5 rounded-xl text-base font-medium text-dark hover:text-navy hover:bg-gray-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 mb-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2.5 rounded-lg text-sm text-body/70 hover:text-navy hover:bg-gray-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Mobile CTA area */}
              <div className="mt-6 pt-6 border-t border-border/40 space-y-3 px-2">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  <Button variant="primary" className="w-full rounded-full" size="lg">
                    Schedule Consultation
                  </Button>
                </Link>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^\d]/g, "")}`}
                  className="flex items-center justify-center gap-2 py-3 text-navy font-medium text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.phone}
                </a>
                <p className="text-center text-xs text-body/40 pt-2">
                  {siteConfig.address.full}
                </p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
