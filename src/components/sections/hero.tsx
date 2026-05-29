"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PhoneCall, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedWords } from "@/components/ui/animated-hero";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { stats } from "@/data/site";
import { useEffect, useRef, useState } from "react";

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

/* ---------- Hero ---------- */
export function Hero() {
  return (
    <>
      <AuroraBackground className="min-h-[auto]">
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 pt-12 pb-14 sm:pt-20 sm:pb-24 md:pt-28 md:pb-32">
            <div className="flex flex-col items-center text-center">
              {/* Firm name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 sm:mb-8 flex flex-col items-center gap-3 sm:gap-4"
              >
                <Image
                  src="/logo.png"
                  alt="JK"
                  width={80}
                  height={80}
                  className="h-14 sm:h-20 w-auto object-contain"
                />
                <div className="text-center">
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-navy tracking-tight">
                    Joseph Kallabat &amp; Associates, P.C.
                  </p>
                  <p className="text-xs sm:text-sm text-body/50 mt-1">Immigration Law &middot; Est. 1997</p>
                </div>
                <span className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white border border-border/60 shadow-sm text-xs sm:text-sm">
                  <div className="flex -space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-navy font-semibold">4.9</span>
                  <span className="text-body/60">601+ reviews</span>
                </span>
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-full max-w-4xl"
              >
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-navy">
                  <span>Leaders in Global</span>
                  <AnimatedWords
                    words={["Immigration", "Talent Mobility", "Visa Strategy"]}
                    className="text-blue"
                    centered
                  />
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-base sm:text-lg md:text-xl text-body leading-relaxed max-w-2xl mt-5 sm:mt-8 mb-8 sm:mb-10 px-2"
              >
                Michigan&apos;s trusted immigration law firm since 1997. We help employers
                and individuals navigate U.S. immigration with confidence and clarity.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-2 sm:px-0"
              >
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" className="group w-full sm:w-auto">
                    Schedule a Free Consultation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    <PhoneCall className="w-4 h-4" />
                    (248) 865-3331
                  </Button>
                </Link>
              </motion.div>

              {/* Trust badges with real AILA logo */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap justify-center items-center gap-5 sm:gap-8 mt-10 sm:mt-14"
              >
                <Image
                  src="/aila-2026.png"
                  alt="AILA Member 2026"
                  width={70}
                  height={70}
                  className="w-[50px] h-[50px] sm:w-[65px] sm:h-[65px] object-contain opacity-70"
                />
                <div className="h-8 w-px bg-border/60 hidden sm:block" />
                <div className="text-center">
                  <p className="text-xs sm:text-sm font-semibold text-navy">AV Preeminent</p>
                  <p className="text-[10px] sm:text-xs text-body/50">Martindale-Hubbell</p>
                </div>
                <div className="h-8 w-px bg-border/60 hidden sm:block" />
                <div className="text-center">
                  <p className="text-xs sm:text-sm font-semibold text-navy">Super Lawyers</p>
                  <p className="text-[10px] sm:text-xs text-body/50">Selected Annually</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </AuroraBackground>

      {/* Stats Bar */}
      <section className="relative bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-1.5 tabular-nums">
                  <CountUp
                    target={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <div className="text-[10px] sm:text-[11px] text-white/40 font-medium uppercase tracking-[0.1em] sm:tracking-[0.12em]">
                  {stat.label}
                </div>
                {i < stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-white/[0.08]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
