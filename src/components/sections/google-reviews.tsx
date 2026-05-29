"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Star, ExternalLink, Quote } from "lucide-react";

const reviews = [
  {
    name: "Corporate HR Director",
    text: "An outstanding immigration lawyer. Mr. Kallabat and his team are very professional and knowledgeable. They handled our company's H-1B petitions flawlessly.",
  },
  {
    name: "Technology Company CEO",
    text: "We've been working with Kallabat Law for nearly 7 years. Their expertise in employment-based immigration is unmatched. Highly recommend for any business immigration needs.",
  },
  {
    name: "Healthcare Professional",
    text: "Scarlett and the team were knowledgeable, responsive, and patient throughout our H-4 and H-4 EAD applications. They made a complex process feel manageable.",
  },
  {
    name: "Automotive Engineer",
    text: "Joseph Kallabat & Associates handled my L-1 visa transfer and green card process with incredible expertise. The team kept me informed at every step.",
  },
  {
    name: "Financial Services Manager",
    text: "Professional, thorough, and always available to answer questions. They successfully handled our company's PERM labor certification and I-140 petition.",
  },
  {
    name: "Biotech Researcher",
    text: "Excellent service from start to finish. The team's knowledge of O-1 visa requirements for researchers was impressive. They built a strong case for my application.",
  },
];

export function GoogleReviews() {
  return (
    <Section className="bg-navy" dark>
      <div className="max-w-7xl mx-auto">
        {/* Header with rating */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-gold text-gold" />
              ))}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              4.9 out of 5 from 601+ Reviews
            </h2>
            <a
              href="https://www.google.com/maps/place/Joseph+Kallabat+%26+Associates,+P.C."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white/70 transition-colors"
            >
              See all reviews on Google
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>

        {/* Review grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.07] transition-colors duration-300"
            >
              <Quote className="w-5 h-5 text-gold/40 mb-3" />
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                {review.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-white/70">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-white/80 block">{review.name}</span>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-2.5 h-2.5 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
