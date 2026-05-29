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
          <div className="max-w-7xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28">
            <div className="flex flex-col items-center text-center">
              {/* Trust badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-border/60 shadow-sm text-sm">
                  <div className="flex -space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-navy font-semibold">4.9</span>
                  <span className="text-body/60">from 601+ reviews</span>
                </span>
              </motion.div>

              {/* Headline with spring-animated words */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-navy max-w-4xl">
                  <span>Leaders in Global</span>
                  <AnimatedWords
                    words={["Immigration", "Talent Mobility", "Workforce Solutions", "Visa Strategy"]}
                    className="text-blue"
                  />
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-lg md:text-xl text-body leading-relaxed max-w-2xl mt-8 mb-10"
              >
                Michigan&apos;s trusted immigration law firm since 1997. We help employers
                and individuals navigate U.S. immigration with confidence, clarity, and
                decades of proven expertise.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Link href="/contact">
                  <Button variant="primary" size="lg" className="group">
                    Schedule a Free Consultation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="secondary" size="lg">
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
                className="flex flex-wrap justify-center items-center gap-6 mt-10 text-xs text-body/50"
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
            className="max-w-6xl mx-auto px-6 pb-8"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy/8 border border-border/40">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=500&fit=crop&crop=center"
                alt="Diverse professional team collaborating in modern office"
                width={1200}
                height={500}
                className="w-full h-[280px] md:h-[380px] object-cover"
                priority
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-navy/5 to-transparent" />

              {/* Floating cards on image */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2.5 shadow-lg border border-white/80"
                >
                  <p className="text-xs font-bold text-navy">8 Attorneys</p>
                  <p className="text-[10px] text-body/60">Exclusively Immigration</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.15 }}
                  className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2.5 shadow-lg border border-white/80"
                >
                  <p className="text-xs font-bold text-navy">29+ Years</p>
                  <p className="text-[10px] text-body/60">Proven Track Record</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 }}
                  className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2.5 shadow-lg border border-white/80 hidden sm:block"
                >
                  <p className="text-xs font-bold text-navy">7 Industries</p>
                  <p className="text-[10px] text-body/60">From Tech to Healthcare</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </AuroraBackground>

      {/* Stats Bar */}
      <section className="relative bg-navy">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1.5 tabular-nums">
                  <CountUp
                    target={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <div className="text-[11px] text-white/40 font-medium uppercase tracking-[0.12em]">
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
