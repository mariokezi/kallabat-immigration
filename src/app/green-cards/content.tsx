"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  FileText,
  Clock,
  CheckCircle,
  Users,
  Award,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

interface GreenCardCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  whoQualifies: string[];
  requirements: string[];
  processing: string;
  subcategories?: { name: string; description: string }[];
}

const categories: GreenCardCategory[] = [
  {
    id: "eb1",
    title: "EB-1 Priority Workers",
    subtitle: "First preference employment-based immigrant visa",
    description:
      "The EB-1 category is reserved for individuals at the very top of their field. It offers the fastest path to a green card for qualifying individuals, as it does not require PERM labor certification and typically has shorter wait times than other employment-based categories.",
    subcategories: [
      {
        name: "EB-1A: Extraordinary Ability",
        description:
          "For individuals who have risen to the very top of their field in the sciences, arts, education, business, or athletics. No job offer or employer sponsor is required. The applicant must demonstrate sustained national or international acclaim through extensive documentation.",
      },
      {
        name: "EB-1B: Outstanding Professors & Researchers",
        description:
          "For internationally recognized outstanding professors and researchers with at least 3 years of experience in teaching or research. Requires a job offer from a U.S. employer for a tenured or tenure-track position or a comparable research position at a university or private employer.",
      },
      {
        name: "EB-1C: Multinational Managers & Executives",
        description:
          "For managers and executives being transferred to the U.S. by a multinational company. The beneficiary must have been employed abroad by the qualifying organization for at least 1 of the preceding 3 years in a managerial or executive capacity.",
      },
    ],
    whoQualifies: [
      "EB-1A: Individuals with extraordinary ability demonstrated by sustained national or international acclaim",
      "EB-1B: Outstanding professors and researchers with at least 3 years of experience and international recognition",
      "EB-1C: Multinational managers or executives transferring to a U.S. affiliate, subsidiary, or parent company",
      "All EB-1 categories are exempt from PERM labor certification requirements",
    ],
    requirements: [
      "EB-1A: Evidence of a major internationally recognized award (Nobel, Pulitzer) OR at least 3 of 10 regulatory criteria",
      "EB-1B: At least 2 of 6 criteria demonstrating international recognition, plus a qualifying job offer",
      "EB-1C: Employment abroad for 1+ year in the past 3 years in a managerial/executive capacity with a qualifying organization",
      "All petitions filed on Form I-140 with comprehensive supporting documentation",
      "Premium processing available ($2,805 fee for 15 business day adjudication)",
    ],
    processing:
      "EB-1 is the first preference category and generally has the shortest visa bulletin wait times. For nationals of most countries, visa numbers are often current. However, India and China-born applicants may face retrogression. No PERM labor certification is required, significantly reducing overall processing time. Concurrent filing of I-140 and I-485 (adjustment of status) is possible when visa numbers are current.",
  },
  {
    id: "eb2",
    title: "EB-2 Advanced Degree / Exceptional Ability",
    subtitle: "Second preference for advanced degree professionals",
    description:
      "The EB-2 category is for professionals holding an advanced degree (master's or higher) or demonstrating exceptional ability in their field. It generally requires PERM labor certification, except for the National Interest Waiver (NIW) subcategory.",
    subcategories: [
      {
        name: "EB-2 with PERM",
        description:
          "The standard EB-2 path requires the employer to complete the PERM labor certification process, demonstrating that no qualified, willing, and able U.S. workers are available for the position. The job must require an advanced degree or its equivalent.",
      },
      {
        name: "EB-2 National Interest Waiver (NIW)",
        description:
          "The NIW allows applicants to self-petition without employer sponsorship or PERM labor certification by demonstrating that their work is in the national interest of the United States. Under the Matter of Dhanasar framework, the applicant must show: (1) the proposed endeavor has substantial merit and national importance, (2) they are well-positioned to advance the endeavor, and (3) it would be beneficial to the U.S. to waive the job offer and labor certification requirements.",
      },
    ],
    whoQualifies: [
      "Professionals with a U.S. master's degree or higher, or a foreign equivalent",
      "Professionals with a U.S. bachelor's degree plus 5 years of progressive post-baccalaureate experience (treated as equivalent to a master's)",
      "Individuals with exceptional ability in the sciences, arts, or business (above ordinary competence)",
      "NIW: Individuals whose work serves the national interest, regardless of employer sponsorship",
    ],
    requirements: [
      "An advanced degree (or equivalent) in the relevant field, OR evidence of exceptional ability",
      "Exceptional ability requires at least 3 of 6 criteria: academic record, 10+ years experience, professional license, high salary, professional association membership, or recognition for contributions",
      "PERM labor certification (unless filing under NIW)",
      "An approved I-140 petition demonstrating the beneficiary meets the EB-2 qualifications",
      "NIW applicants must satisfy the three-prong Dhanasar test",
    ],
    processing:
      "EB-2 with PERM typically takes 18-24+ months for the full process (PERM + I-140 + I-485/consular processing). Visa bulletin retrogression affects India and China-born nationals significantly. NIW petitions bypass PERM but still require an approved I-140 and available visa number. EB-2 to EB-3 downgrade is a common strategy when EB-3 priority dates are more favorable.",
  },
  {
    id: "eb3",
    title: "EB-3 Professionals & Skilled Workers",
    subtitle: "Third preference for professionals and skilled workers",
    description:
      "The EB-3 category covers professionals with bachelor's degrees, skilled workers with at least 2 years of training or experience, and other (unskilled) workers. It requires PERM labor certification and an employer sponsor.",
    whoQualifies: [
      "Professionals: Individuals with a U.S. bachelor's degree or foreign equivalent where the position requires a bachelor's degree",
      "Skilled Workers: Individuals with at least 2 years of job experience or training in a position that is not temporary or seasonal",
      "Other Workers (EW-3): Unskilled workers filling positions requiring less than 2 years of training or experience",
    ],
    requirements: [
      "PERM labor certification approved by the Department of Labor",
      "A permanent, full-time job offer from a U.S. employer",
      "The employer must demonstrate ability to pay the offered wage",
      "The beneficiary must meet the education and experience requirements specified in the PERM application",
      "I-140 petition filed with USCIS with all supporting documentation",
    ],
    processing:
      "EB-3 processing times depend heavily on the PERM stage (6-12+ months), I-140 adjudication (4-12 months without premium processing), and visa bulletin wait times. India and China-born nationals face significant backlogs. For some countries, EB-3 priority dates may actually be more current than EB-2, making EB-2 to EB-3 downgrade a viable strategy. Premium processing is available for the I-140 stage.",
  },
  {
    id: "eb5",
    title: "EB-5 Investor Visa",
    subtitle: "Immigration through capital investment",
    description:
      "The EB-5 Immigrant Investor Program provides a path to permanent residence for foreign nationals who invest a substantial amount of capital in a new commercial enterprise that creates at least 10 full-time jobs for qualifying U.S. workers. The EB-5 Reform and Integrity Act of 2022 established updated investment thresholds and program requirements.",
    whoQualifies: [
      "Foreign nationals who invest the required capital in a new commercial enterprise",
      "Direct investors: $1,050,000 minimum investment in a new commercial enterprise",
      "TEA investors: $800,000 minimum investment in a Targeted Employment Area (rural area or area with high unemployment)",
      "Regional Center investors: Investment through a USCIS-designated Regional Center that pools investments for job creation",
    ],
    requirements: [
      "Investment of $1,050,000 (general) or $800,000 (Targeted Employment Area) in a new commercial enterprise",
      "The investment must be at-risk; guaranteed returns or debt arrangements do not qualify",
      "The enterprise must create at least 10 full-time positions for qualifying U.S. workers",
      "Regional Center investments may count indirect and induced jobs toward the 10-job requirement",
      "Lawful source of investment funds must be thoroughly documented",
      "The investor must be actively engaged in management (unless investing through a Regional Center limited partnership)",
    ],
    processing:
      "EB-5 processing involves filing Form I-526E (Regional Center) or I-526 (direct investment), followed by consular processing or adjustment of status. Conditional permanent residence is granted for 2 years, after which the investor must file Form I-829 to remove conditions by demonstrating the investment was sustained and jobs were created. TEA/Rural area and infrastructure projects receive priority processing under the 2022 Reform Act. Concurrent filing of I-526E and I-485 is available when visa numbers are current.",
  },
  {
    id: "perm",
    title: "PERM Labor Certification",
    subtitle: "The foundation of most employment-based green card processes",
    description:
      "PERM (Program Electronic Review Management) labor certification is the first and often most critical step in the employment-based green card process for EB-2 and EB-3 categories. It requires the employer to demonstrate through a structured recruitment process that there are no qualified, willing, and able U.S. workers available for the position at the prevailing wage.",
    subcategories: [
      {
        name: "Step 1: PERM Labor Certification (ETA Form 9089)",
        description:
          "The employer conducts a prevailing wage determination through the DOL, then undertakes a rigorous recruitment campaign (minimum 30 days of recruitment including newspaper ads, job order with SWA, and 3 additional recruitment steps for professional positions). After a 30-day cooling-off period, the employer files the PERM application electronically with the DOL. Current processing times are approximately 6-12 months.",
      },
      {
        name: "Step 2: I-140 Immigrant Petition",
        description:
          "After PERM approval, the employer files Form I-140 with USCIS, demonstrating that the beneficiary meets the qualifications for the position and that the employer has the ability to pay the offered wage. Premium processing is available for 15-business-day adjudication. The priority date is established based on the PERM filing date.",
      },
      {
        name: "Step 3: I-485 Adjustment of Status or Consular Processing",
        description:
          "Once a visa number is available (per the monthly Visa Bulletin), the beneficiary files Form I-485 to adjust status to permanent resident while in the U.S., or undergoes consular processing at a U.S. embassy abroad. Concurrent filing with I-140 is possible when a visa number is immediately available. I-485 pending applicants may obtain work authorization (EAD) and advance parole (travel document).",
      },
    ],
    whoQualifies: [
      "U.S. employers seeking to sponsor a foreign national for permanent residence in EB-2 or EB-3 categories",
      "The position must be a permanent, full-time role (not temporary or seasonal)",
      "The employer must be willing to pay the prevailing wage as determined by the DOL",
      "The employer must have conducted a good-faith recruitment process and found no qualified U.S. workers",
    ],
    requirements: [
      "Prevailing Wage Determination from the DOL National Prevailing Wage Center",
      "Structured recruitment: 2 Sunday newspaper ads, 30-day SWA job order, and 3 additional recruitment steps for professional positions",
      "30-day cooling-off period after recruitment before filing",
      "No qualified, willing, and able U.S. workers identified during recruitment",
      "The position's requirements must reflect the employer's actual minimum requirements (no tailoring to the beneficiary)",
      "Detailed recruitment report documenting the results of each recruitment step",
      "The beneficiary must meet all stated requirements at the time of PERM filing",
    ],
    processing:
      "The full PERM to green card timeline varies significantly: PERM filing and approval (6-12+ months), I-140 (4-12 months standard, 15 business days with premium processing), and I-485/consular processing (depends on visa number availability). For countries without backlogs, the total process may take 2-3 years. For India and China, the wait for a visa number can extend well beyond a decade. Employers should maintain the PERM audit file for 5 years. DOL audits approximately 20-30% of PERM applications.",
  },
];

function AccordionItem({
  category,
  isOpen,
  onToggle,
}: {
  category: GreenCardCategory;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-border rounded-2xl bg-white overflow-hidden hover:border-blue/20 transition-colors"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer group"
      >
        <div className="flex-1 min-w-0 pr-4">
          <h3 className="text-xl md:text-2xl font-bold text-dark group-hover:text-blue transition-colors">
            {category.title}
          </h3>
          <p className="text-body text-sm mt-1">{category.subtitle}</p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 w-10 h-10 rounded-full bg-blue-light flex items-center justify-center group-hover:bg-blue/10 transition-colors"
        >
          <ChevronDown className="w-5 h-5 text-blue" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="px-6 md:px-8 pb-8 space-y-6 border-t border-border pt-6">
              <p className="text-body leading-relaxed">{category.description}</p>

              {/* Subcategories */}
              {category.subcategories && (
                <div className="grid gap-4">
                  {category.subcategories.map((sub, i) => (
                    <motion.div
                      key={sub.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="glass-dark rounded-xl p-6"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-4 h-4 text-gold shrink-0" />
                        <h4 className="text-white font-semibold text-sm">
                          {sub.name}
                        </h4>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {sub.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-warm-white rounded-xl p-6 border border-border">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-5 h-5 text-blue" />
                    <h4 className="text-dark font-semibold">Who Qualifies</h4>
                  </div>
                  <ul className="space-y-3">
                    {category.whoQualifies.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-body">
                        <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-warm-white rounded-xl p-6 border border-border">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-5 h-5 text-blue" />
                    <h4 className="text-dark font-semibold">Key Requirements</h4>
                  </div>
                  <ul className="space-y-3">
                    {category.requirements.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-body">
                        <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-blue-light rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-blue" />
                  <h4 className="text-dark font-semibold">Processing Notes</h4>
                </div>
                <p className="text-body text-sm leading-relaxed">
                  {category.processing}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function GreenCardsContent() {
  const [openId, setOpenId] = useState<string | null>("eb1");

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-blue/15 blur-[100px]"
          />
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-gold/10 blur-[80px]"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-gold mb-6"
          >
            <Award className="w-4 h-4" />
            Employment-Based Immigrant Visas
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Green Cards{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-gold">
              & PERM
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed"
          >
            Permanent residence through employment-based immigration. From EB-1
            priority workers to PERM labor certification, we guide employers and
            employees through every step to a green card.
          </motion.p>
        </div>
      </section>

      {/* Accordion Sections */}
      <Section>
        <div className="max-w-4xl mx-auto space-y-4">
          {categories.map((category) => (
            <AccordionItem
              key={category.id}
              category={category}
              isOpen={openId === category.id}
              onToggle={() =>
                setOpenId(openId === category.id ? null : category.id)
              }
            />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Your Green Card Journey
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Whether you are an employer sponsoring a key employee or an
            individual pursuing permanent residence, our team will develop a
            strategic immigration plan tailored to your goals.
          </p>
          <Link href="/contact">
            <Button size="lg" className="group">
              Schedule a Consultation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </Section>
    </>
  );
}
