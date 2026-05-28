"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
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
      {/* Top bar */}
      <div className="bg-navy-deep text-white/70 text-xs py-2.5 px-6 hidden md:block border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="tracking-wide">{siteConfig.address.full}</span>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.phone.replace(/[^\d]/g, "")}`}
              className="flex items-center gap-1.5 hover:text-gold transition-colors duration-300"
            >
              <Phone className="w-3 h-3" />
              <span className="tracking-wide">{siteConfig.phone}</span>
            </a>
            <span className="text-white/30">|</span>
            <span className="text-white/40">{siteConfig.hours.split("|")[0].trim()}</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.72)" : "rgba(6,23,39,0.95)",
        }}
        transition={{ duration: 0.5 }}
        className={cn(
          "sticky top-0 z-50 transition-all duration-500",
          scrolled
            ? "glass shadow-lg shadow-black/[0.04] backdrop-blur-xl"
            : "backdrop-blur-sm border-b border-white/[0.05]"
        )}
      >
        <div className={cn(
          "max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500",
          scrolled ? "h-18" : "h-20"
        )}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 border",
              scrolled
                ? "bg-navy border-navy/20"
                : "bg-white/[0.06] border-white/[0.1]"
            )}>
              <span className="text-gold font-display font-bold text-xl">K</span>
            </div>
            <div className="hidden sm:block">
              <span className={cn(
                "font-display font-semibold text-xl leading-tight block transition-colors duration-500",
                scrolled ? "text-navy" : "text-white"
              )}>
                Kallabat Law
              </span>
              <span className={cn(
                "text-[11px] tracking-[0.15em] uppercase leading-tight transition-colors duration-500",
                scrolled ? "text-body/60" : "text-white/40"
              )}>
                Immigration Attorneys
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
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
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative",
                    scrolled
                      ? "text-dark/70 hover:text-navy hover:bg-navy/[0.04]"
                      : "text-white/60 hover:text-white hover:bg-white/[0.06]"
                  )}
                >
                  <span className="flex items-center gap-1">
                    {link.label}
                    {link.children && (
                      <ChevronDown
                        className={cn(
                          "w-3 h-3 transition-transform duration-300",
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
                      initial={{ opacity: 0, y: 10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
                      className={cn(
                        "absolute top-full left-0 mt-2 w-60 rounded-xl shadow-2xl p-2",
                        scrolled
                          ? "bg-white border border-border/60 shadow-black/[0.08]"
                          : "bg-navy/95 backdrop-blur-xl border border-white/[0.08] shadow-black/40"
                      )}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block px-4 py-2.5 rounded-lg text-sm transition-all duration-200",
                            scrolled
                              ? "text-body hover:text-navy hover:bg-blue-light/50"
                              : "text-white/60 hover:text-white hover:bg-white/[0.06]"
                          )}
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

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden md:block">
              <Button size="sm" variant={scrolled ? "primary" : "gold"}>
                Schedule Consultation
              </Button>
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                scrolled
                  ? "hover:bg-navy/[0.04] text-dark"
                  : "hover:bg-white/[0.06] text-white"
              )}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed inset-0 top-[calc(4.5rem+1px)] z-40 bg-navy-deep overflow-y-auto lg:hidden"
          >
            <nav className="p-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3.5 rounded-xl text-lg font-display font-medium text-white/80 hover:text-gold hover:bg-white/[0.04] transition-all"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 space-y-0.5 mb-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2 rounded-lg text-sm text-white/40 hover:text-gold hover:bg-white/[0.04] transition-all"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <div className="pt-6 space-y-3">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  <Button variant="gold" className="w-full" size="lg">
                    Schedule Consultation
                  </Button>
                </Link>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^\d]/g, "")}`}
                  className="flex items-center justify-center gap-2 py-3 text-gold font-medium"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.phone}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
