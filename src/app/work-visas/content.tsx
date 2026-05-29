"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, FileText, Clock, CheckCircle, Users } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface VisaType {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  whoQualifies: string[];
  requirements: string[];
  processing: string;
  details?: string[];
}

const visaTypes: VisaType[] = [
  {
    id: "h1b",
    title: "H-1B Specialty Occupation",
    subtitle: "The most common employer-sponsored work visa",
    description:
      "The H-1B visa allows U.S. employers to temporarily employ foreign workers in specialty occupations that require at least a bachelor's degree or equivalent in a specific field. It is the primary pathway for skilled professionals to work in the United States.",
    whoQualifies: [
      "Foreign professionals with a U.S. bachelor's degree or higher (or foreign equivalent) in a specialty field",
      "Workers whose job requires the theoretical and practical application of a body of specialized knowledge",
      "Employers who can demonstrate the position qualifies as a specialty occupation",
      "H-4 dependent spouses and children under 21 may accompany the H-1B holder; H-4 EAD work authorization is available for certain H-4 spouses",
    ],
    requirements: [
      "Employer must file a Labor Condition Application (LCA) with the Department of Labor",
      "Employer must pay the prevailing wage or actual wage, whichever is higher",
      "Position must require at minimum a bachelor's degree in a specific specialty",
      "The beneficiary must hold the required degree or equivalent work experience",
      "Employer must maintain a public access file at the worksite",
    ],
    processing:
      "H-1B petitions are subject to an annual cap of 65,000 visas, plus 20,000 for U.S. advanced degree holders. USCIS conducts a lottery in March for an October 1 start date. Cap-exempt employers (universities, nonprofits affiliated with higher education, government research organizations) are not subject to the cap. Premium processing is available for an additional $2,805 fee, reducing processing to 15 business days.",
    details: [
      "Initial validity of up to 3 years, extendable to a maximum of 6 years",
      "Extensions beyond 6 years available under AC21 if a PERM or I-140 has been pending for 365+ days",
      "Portability allows workers to transfer employers upon filing a new H-1B petition",
      "Dual intent visa: H-1B holders may pursue lawful permanent residence simultaneously",
    ],
  },
  {
    id: "l1",
    title: "L-1 Intra-Company Transferee",
    subtitle: "For multinational companies transferring key employees",
    description:
      "The L-1 visa enables multinational companies to transfer managers, executives, and employees with specialized knowledge from a foreign office to a U.S. office. It is an essential tool for global companies establishing or expanding U.S. operations.",
    whoQualifies: [
      "L-1A: Managers and executives being transferred to a U.S. parent, subsidiary, branch, or affiliate",
      "L-1B: Employees with specialized knowledge of the company's products, services, or procedures",
      "The employee must have worked for the qualifying foreign entity for at least 1 continuous year within the preceding 3 years",
      "The U.S. and foreign entities must have a qualifying relationship (parent, subsidiary, branch, or affiliate)",
    ],
    requirements: [
      "Qualifying relationship between U.S. and foreign entities must be established",
      "Employee must have worked abroad for the related company for at least 1 year in the past 3 years",
      "L-1A applicants must be coming to serve in a managerial or executive capacity",
      "L-1B applicants must possess specialized knowledge not readily available in the U.S. labor market",
      "New office petitions must show the U.S. entity has secured sufficient physical premises",
    ],
    processing:
      "L-1A is valid for up to 7 years total; L-1B for up to 5 years total. New office L-1 petitions are initially approved for 1 year. Blanket L petitions are available for qualifying organizations that have obtained USCIS approval, streamlining individual transfers. Premium processing is available.",
  },
  {
    id: "tn",
    title: "TN USMCA Visa",
    subtitle: "For Canadian and Mexican professionals under the trade agreement",
    description:
      "The TN visa is available under the United States-Mexico-Canada Agreement (USMCA, formerly NAFTA) and allows citizens of Canada and Mexico to work in the United States in prearranged professional-level positions. It offers a streamlined process compared to other work visa categories.",
    whoQualifies: [
      "Canadian and Mexican citizens who are professionals in one of the designated USMCA professions",
      "Designated professions include: Accountants, Engineers, Lawyers, Scientists, Pharmacists, Teachers, Computer Systems Analysts, Management Consultants, and approximately 60 other professional categories",
      "The applicant must possess the credentials required for the specific profession (typically a bachelor's degree)",
      "The position must require a USMCA professional and cannot be self-employment",
    ],
    requirements: [
      "Applicant must be a citizen of Canada or Mexico",
      "The profession must appear on the USMCA professions list",
      "The applicant must possess the required qualifications for the profession",
      "A prearranged full-time or part-time professional position with a U.S. employer",
      "Canadians may apply directly at the port of entry; Mexicans must obtain a TN visa from a U.S. consulate",
    ],
    processing:
      "TN status is granted in increments of up to 3 years with unlimited renewals. Canadian citizens can apply at the border or preclearance locations without a petition. Mexican citizens must apply at a U.S. consulate. There is no annual cap on TN visas. Processing at the border for Canadians is typically same-day.",
  },
  {
    id: "e3",
    title: "E-3 Australian Specialty Worker",
    subtitle: "Exclusively for Australian nationals in specialty occupations",
    description:
      "The E-3 visa is exclusively available to Australian nationals and is similar to the H-1B in that it requires a specialty occupation and at least a bachelor's degree. However, it has a separate annual allocation and a simpler application process.",
    whoQualifies: [
      "Australian nationals who will work in a specialty occupation in the United States",
      "The applicant must possess at least a bachelor's degree or equivalent in the relevant specialty field",
      "The position must qualify as a specialty occupation requiring theoretical and practical application of specialized knowledge",
    ],
    requirements: [
      "Applicant must be an Australian national",
      "An approved LCA from the Department of Labor is required",
      "The position must qualify as a specialty occupation",
      "The applicant must hold a relevant degree or equivalent credentials",
      "No employer petition is required; the applicant applies directly at a U.S. consulate",
    ],
    processing:
      "The E-3 has a separate annual cap of 10,500 visas (which has never been reached). Granted in 2-year increments with unlimited renewals. Spouses of E-3 holders receive automatic work authorization. The application process is streamlined compared to H-1B.",
  },
  {
    id: "o1",
    title: "O-1 Extraordinary Ability",
    subtitle: "For individuals with extraordinary achievement in their field",
    description:
      "The O-1 visa is for individuals who possess extraordinary ability in the sciences, arts, education, business, or athletics, or who have a demonstrated record of extraordinary achievement in the motion picture or television industry. It is a prestige category with no annual cap.",
    whoQualifies: [
      "Individuals who have risen to the top of their field and can demonstrate sustained national or international acclaim",
      "O-1A: Extraordinary ability in sciences, education, business, or athletics",
      "O-1B: Extraordinary ability in the arts, or extraordinary achievement in motion picture or television",
      "Evidence must show the individual is among the small percentage at the very top of their field",
    ],
    requirements: [
      "Evidence of a major internationally recognized award (e.g., Nobel Prize) OR at least 3 of the following:",
      "Receipt of nationally or internationally recognized prizes or awards for excellence",
      "Membership in associations requiring outstanding achievements",
      "Published material about the individual in professional or major trade publications",
      "Original contributions of major significance in the field",
      "Authorship of scholarly articles in the field",
      "A high salary or remuneration relative to others in the field",
      "Participation as a judge of the work of others in the field",
      "Employment in a critical or essential capacity at organizations with a distinguished reputation",
    ],
    processing:
      "There is no annual cap on O-1 visas. Initial validity is up to 3 years with 1-year extensions. An agent or employer must file the petition. A peer group advisory opinion is generally required. Premium processing is available. O-1 holders have dual intent and may pursue permanent residence.",
  },
  {
    id: "h2b",
    title: "H-2B Seasonal Worker",
    subtitle: "For temporary non-agricultural workers",
    description:
      "The H-2B program allows U.S. employers to bring foreign nationals to the United States to fill temporary nonagricultural jobs when there are not enough U.S. workers available. Common industries include hospitality, landscaping, forestry, and construction.",
    whoQualifies: [
      "Foreign workers filling temporary or seasonal non-agricultural positions",
      "The employer must demonstrate the need is temporary: one-time, seasonal, peak-load, or intermittent",
      "The employer must show there are insufficient U.S. workers able, willing, and qualified for the position",
    ],
    requirements: [
      "The employer must obtain a temporary labor certification from the Department of Labor",
      "Active U.S. worker recruitment efforts must be documented",
      "The job must be genuinely temporary in nature",
      "The employer must pay the prevailing wage for the position and area",
      "Employer must demonstrate the need is temporary (seasonal, peak-load, one-time, or intermittent)",
    ],
    processing:
      "The H-2B visa has a statutory cap of 66,000 per fiscal year (33,000 for each half of the year). Congress has authorized supplemental H-2B visas in recent years. Processing time varies, and employers should begin the process at least 5-6 months before the need date. Workers may stay for the period authorized on the petition, up to 1 year, with extensions up to 3 years total.",
  },
  {
    id: "e1e2",
    title: "E-1/E-2 Treaty Trader & Investor",
    subtitle: "For entrepreneurs, investors, and traders from treaty countries",
    description:
      "The E-1 (Treaty Trader) and E-2 (Treaty Investor) visas are available to nationals of countries with which the U.S. maintains treaties of commerce and navigation. E-1 is for those engaged in substantial trade, while E-2 is for those investing a substantial amount of capital in a U.S. business.",
    whoQualifies: [
      "E-1: Nationals of treaty countries who carry on substantial trade principally between the U.S. and their home country",
      "E-2: Nationals of treaty countries who invest a substantial amount of capital in a bona fide U.S. enterprise",
      "The investor must show the investment is substantial relative to the total cost of the enterprise",
      "Key employees (executive, supervisory, or essential skill employees) of E-1/E-2 companies may also qualify",
    ],
    requirements: [
      "The applicant must be a national of a country with a qualifying treaty with the U.S.",
      "E-1: Trade must be substantial in volume and principally (>50%) between the U.S. and the treaty country",
      "E-2: Investment must be substantial (generally $100,000+, though more is advisable) and at-risk",
      "E-2: The investor must direct and develop the enterprise; marginal enterprises do not qualify",
      "The enterprise must be a real, active, operating commercial enterprise (not speculative)",
    ],
    processing:
      "E-1 and E-2 visas are typically granted in 2-year increments at the consulate, or 5-year increments when extending within the U.S. via USCIS. There is no maximum limit on extensions. E-2 spouses receive automatic work authorization. There is no annual cap. Processing is done at the U.S. consulate in the applicant's home country or via a change of status petition with USCIS.",
  },
];

function AccordionItem({ visa, isOpen, onToggle }: { visa: VisaType; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-border rounded-2xl bg-white overflow-hidden hover:border-blue/20 transition-colors"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer group"
      >
        <div className="flex-1 min-w-0 pr-4">
          <h3 className="text-xl md:text-2xl font-bold text-dark group-hover:text-blue transition-colors">
            {visa.title}
          </h3>
          <p className="text-body text-sm mt-1">{visa.subtitle}</p>
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
              <p className="text-body leading-relaxed">{visa.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-5 h-5 text-gold" />
                    <h4 className="text-white font-semibold">Who Qualifies</h4>
                  </div>
                  <ul className="space-y-3">
                    {visa.whoQualifies.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-5 h-5 text-gold" />
                    <h4 className="text-white font-semibold">Key Requirements</h4>
                  </div>
                  <ul className="space-y-3">
                    {visa.requirements.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-gray-300">
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
                  {visa.processing}
                </p>
              </div>

              {visa.details && (
                <div className="bg-warm-white rounded-xl p-6 border border-border">
                  <h4 className="text-dark font-semibold mb-3">Additional Details</h4>
                  <ul className="space-y-2">
                    {visa.details.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-body">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function WorkVisasContent() {
  const [openId, setOpenId] = useState<string | null>("h1b");

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-1/5 w-80 h-80 rounded-full bg-blue/15 blur-[100px]"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-gold mb-6"
          >
            <FileText className="w-4 h-4" />
            Employment-Based Nonimmigrant Visas
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-gold">
              Visas
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed"
          >
            We handle every major employment-based visa category, guiding
            employers and employees through the complex requirements of each
            program. Click any visa type below for detailed information.
          </motion.p>
        </div>
      </section>

      {/* Accordion Sections */}
      <Section>
        <div className="max-w-4xl mx-auto space-y-4">
          {visaTypes.map((visa) => (
            <AccordionItem
              key={visa.id}
              visa={visa}
              isOpen={openId === visa.id}
              onToggle={() => setOpenId(openId === visa.id ? null : visa.id)}
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
            Not Sure Which Visa Is Right?
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Our experienced attorneys will evaluate your qualifications, business
            needs, and timeline to recommend the strongest visa strategy for your
            situation.
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
