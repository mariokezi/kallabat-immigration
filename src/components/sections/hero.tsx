"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PhoneCall, Star, Shield, Award, BadgeCheck } from "lucide-react";
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
          {/* Main hero content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-12 sm:pt-16 sm:pb-20 md:pt-24 md:pb-28">
            <div className="flex flex-col items-center text-center">
              {/* Trust badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 sm:mb-8"
              >
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

              {/* Headline with spring-animated words */}
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

              {/* Credential badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-8 sm:mt-10 text-[11px] sm:text-xs text-body/50"
              >
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-blue/60" />
                  AV Preeminent
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-blue/60" />
                  Super Lawyers
                </span>
                <span className="flex items-center gap-1.5">
                  <BadgeCheck className="w-3.5 h-3.5 text-blue/60" />
                  AILA Member
                </span>
              </motion.div>
            </div>
          </div>

          {/* People image strip */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-6xl mx-auto px-4 sm:px-6 pb-6 sm:pb-8"
          >
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl shadow-navy/8 border border-border/40">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=500&fit=crop&crop=center"
                alt="Professional attorneys consulting with clients in modern office"
                width={1200}
                height={500}
                className="w-full h-[200px] sm:h-[280px] md:h-[380px] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-navy/5 to-transparent" />

              {/* Floating cards on image */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex flex-wrap gap-2 sm:gap-3">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 shadow-lg border border-white/80">
                  <p className="text-[11px] sm:text-xs font-bold text-navy">8 Attorneys</p>
                  <p className="text-[9px] sm:text-[10px] text-body/60">Exclusively Immigration</p>
                </div>
                <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 shadow-lg border border-white/80">
                  <p className="text-[11px] sm:text-xs font-bold text-navy">29+ Years</p>
                  <p className="text-[9px] sm:text-[10px] text-body/60">Proven Track Record</p>
                </div>
                <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 shadow-lg border border-white/80 hidden sm:block">
                  <p className="text-xs font-bold text-navy">7 Industries</p>
                  <p className="text-[10px] text-body/60">From Tech to Healthcare</p>
                </div>
              </div>
            </div>
          </motion.div>
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
