"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stats } from "@/data/site";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/* ---------- Floating geometric shapes ---------- */
function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.06]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -120, rotate: rotate - 12 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.2,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.0 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border border-white/[0.08]",
            "shadow-[0_8px_32px_0_rgba(201,168,76,0.06)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,76,0.12),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

/* ---------- CountUp ---------- */
function CountUp({
  target,
  decimals = 0,
  suffix = "",
}: {
  target: number;
  decimals?: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2200;
          const steps = 70;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            setCount(current);
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

/* ---------- Word-by-word reveal ---------- */
function RevealText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={className}>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.08,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* ---------- Hero ---------- */
export function Hero() {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-deep">
        {/* Layered background */}
        <div className="absolute inset-0">
          {/* Gradient base */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-navy-deep" />

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.04]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-grid)" />
            </svg>
          </div>

          {/* Radial glow behind content */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(13,92,143,0.15)_0%,transparent_70%)]" />
          <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.08)_0%,transparent_60%)]" />
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <ElegantShape
            delay={0.3}
            width={550}
            height={130}
            rotate={12}
            gradient="from-blue/[0.10]"
            className="left-[-8%] md:left-[-3%] top-[18%] md:top-[22%]"
          />
          <ElegantShape
            delay={0.5}
            width={450}
            height={110}
            rotate={-15}
            gradient="from-gold/[0.08]"
            className="right-[-5%] md:right-[2%] top-[65%] md:top-[70%]"
          />
          <ElegantShape
            delay={0.4}
            width={280}
            height={75}
            rotate={-8}
            gradient="from-blue/[0.08]"
            className="left-[8%] md:left-[12%] bottom-[8%] md:bottom-[12%]"
          />
          <ElegantShape
            delay={0.6}
            width={200}
            height={55}
            rotate={20}
            gradient="from-gold/[0.12]"
            className="right-[12%] md:right-[18%] top-[8%] md:top-[12%]"
          />
          <ElegantShape
            delay={0.7}
            width={140}
            height={38}
            rotate={-22}
            gradient="from-white/[0.04]"
            className="left-[22%] md:left-[28%] top-[6%] md:top-[8%]"
          />
        </div>

        {/* Globe wireframe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 0.06, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute right-[-12%] top-1/2 -translate-y-1/2 w-[900px] h-[900px] hidden md:block"
        >
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="200" cy="200" r="190" stroke="white" strokeWidth="0.4" />
            <ellipse cx="200" cy="200" rx="130" ry="190" stroke="white" strokeWidth="0.4" />
            <ellipse cx="200" cy="200" rx="60" ry="190" stroke="white" strokeWidth="0.4" />
            <line x1="10" y1="200" x2="390" y2="200" stroke="white" strokeWidth="0.4" />
            <ellipse cx="200" cy="200" rx="190" ry="60" stroke="white" strokeWidth="0.4" />
            <ellipse cx="200" cy="200" rx="190" ry="130" stroke="white" strokeWidth="0.4" />
          </motion.svg>
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/80 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-deep to-transparent pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-40">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-sm mb-10"
            >
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-gold-light tracking-wide">
                Trusted Since 1997
              </span>
              <span className="text-white/20">|</span>
              <span className="text-white/50">AV Preeminent Rated</span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight mb-8">
              <RevealText
                text="Leaders In"
                className="text-white block"
                delay={0.5}
              />
              <RevealText
                text="Global Immigration"
                className="block gradient-text-gold"
                delay={0.8}
              />
            </h1>

            {/* Gold accent line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ delay: 1.3, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              className="h-[2px] bg-gradient-to-r from-gold to-gold/30 mb-8"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.7 }}
              className="text-lg md:text-xl text-white/50 max-w-2xl mb-12 leading-relaxed font-light tracking-wide"
            >
              Serving our clients&apos; business and professional needs in the areas
              of family and employment immigration law since 1997.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <Button variant="gold" size="lg" className="group">
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/for-employers">
                <Button variant="outline" size="lg">
                  Explore Our Services
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] text-white/30 uppercase tracking-[0.3em]">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-4 h-4 text-white/20" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative bg-navy border-t border-white/[0.06]">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy to-navy-deep" />
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="relative"
              >
                <div className="font-display text-5xl md:text-6xl font-semibold text-white mb-2">
                  <CountUp
                    target={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <div className="text-xs text-white/40 font-medium uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
                {/* Gold dot separator (except last) */}
                {i < stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-gold/40" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
