"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { stats } from "@/data/site";
import { useEffect, useRef, useState } from "react";

/* ---------- Rotating word ---------- */
const rotatingWords = ["Immigration", "Talent Mobility", "Workforce Solutions"];

function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block h-[1.1em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={rotatingWords[index]}
          initial={{ y: 60, opacity: 0, filter: "blur(6px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -60, opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 text-blue whitespace-nowrap"
        >
          {rotatingWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
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

/* ---------- Hero ---------- */
export function Hero() {
  return (
    <>
      <AuroraBackground>
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-40 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
            }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-10"
            >
              <Logo size={44} variant="dark" />
              <div className="text-sm">
                <span className="text-navy font-semibold">Est. 1997</span>
                <span className="text-body/40 mx-2">&middot;</span>
                <span className="text-body/60">AV Preeminent Rated</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-navy mb-6"
            >
              Leaders In Global{" "}
              <RotatingWord />
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-body max-w-xl mb-10 leading-relaxed"
            >
              Serving our clients&apos; business and professional needs in the areas
              of family and employment immigration law since 1997.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <Button variant="primary" size="lg" className="group">
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/for-employers">
                <Button variant="secondary" size="lg">
                  Explore Our Services
                </Button>
              </Link>
            </motion.div>

            {/* Trust line */}
            <motion.p
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-xs text-body/40 mt-6 tracking-wide"
            >
              601+ Google Reviews &middot; 4.9 Star Rating &middot; 8 Immigration Attorneys
            </motion.p>
          </motion.div>
        </div>
      </AuroraBackground>

      {/* Stats Bar */}
      <section className="relative bg-navy">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 tabular-nums">
                  <CountUp
                    target={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <div className="text-xs text-white/40 font-medium uppercase tracking-[0.15em]">
                  {stat.label}
                </div>
                {i < stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-white/[0.08]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
