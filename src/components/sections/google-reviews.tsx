"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { Star, ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Corporate HR Director",
    text: "An outstanding immigration lawyer. Mr. Kallabat and his team are very professional and knowledgeable. They handled our company's H-1B petitions flawlessly.",
    rating: 5,
  },
  {
    name: "Technology Company CEO",
    text: "We've been working with Kallabat Law for nearly 7 years. Their expertise in employment-based immigration is unmatched. Highly recommend for any business immigration needs.",
    rating: 5,
  },
  {
    name: "Healthcare Professional",
    text: "Scarlett and the team were knowledgeable, responsive, and patient throughout our H-4 and H-4 EAD applications. They made a complex process feel manageable.",
    rating: 5,
  },
  {
    name: "Automotive Engineer",
    text: "Joseph Kallabat & Associates handled my L-1 visa transfer and green card process with incredible expertise. The team kept me informed at every step.",
    rating: 5,
  },
  {
    name: "Financial Services Manager",
    text: "Professional, thorough, and always available to answer questions. They successfully handled our company's PERM labor certification and I-140 petition.",
    rating: 5,
  },
  {
    name: "Biotech Researcher",
    text: "Excellent service from start to finish. The team's knowledge of O-1 visa requirements for researchers was impressive. They built a strong case for my application.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="w-[380px] shrink-0 p-7 rounded-2xl border border-border/50 bg-white hover:border-gold/20 hover:shadow-lg hover:shadow-gold/[0.03] transition-all duration-500 mx-3">
      <Stars count={review.rating} />
      <p className="text-dark/80 mt-4 mb-5 leading-relaxed text-sm">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-navy to-blue flex items-center justify-center">
          <span className="text-xs font-bold text-white">
            {review.name.charAt(0)}
          </span>
        </div>
        <div>
          <span className="text-sm font-medium text-dark block">
            {review.name}
          </span>
          <span className="text-xs text-body/60">Verified Review</span>
        </div>
      </div>
    </div>
  );
}

export function GoogleReviews() {
  const allReviews = [...reviews, ...reviews];

  return (
    <Section className="bg-white !px-0">
      <div className="px-6">
        <SectionHeader
          badge="Client Reviews"
          title="Trusted by Hundreds of Clients"
          description="With 601+ Google Reviews and a 4.9-star rating, our track record speaks for itself."
        />

        {/* Overall rating */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-14"
        >
          <div className="flex items-center gap-4 mb-3">
            <span className="font-display text-6xl font-semibold text-dark">4.9</span>
            <div>
              <Stars count={5} />
              <span className="text-sm text-body/60 mt-1 block">601+ Reviews on Google</span>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/place/Joseph+Kallabat+%26+Associates,+P.C."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-navy hover:text-gold font-medium mt-2 transition-colors duration-300"
          >
            See All Reviews on Google
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>

      {/* Marquee row */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {allReviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>
    </Section>
  );
}
