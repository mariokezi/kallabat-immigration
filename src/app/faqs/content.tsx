"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/section";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  badge: string;
  items: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    title: "General Immigration",
    badge: "General",
    items: [
      {
        question: "How long does the typical immigration case take?",
        answer:
          "Processing times vary significantly depending on the visa type, USCIS workload, and the specific service center handling your case. For example, an H-1B petition may take 3-6 months under regular processing or 15 business days under premium processing. Green card cases can range from under a year to several years depending on the category and country of chargeability. During your consultation, we will provide a realistic timeline based on current processing trends for your specific case.",
      },
      {
        question: "What documents do I typically need to begin my case?",
        answer:
          "The required documents depend on the type of petition. Generally, you will need a valid passport, any prior immigration documents (I-94, visa stamps, prior approvals), educational credentials and transcripts, and employment records. For employer-sponsored cases, the employer will also need to provide corporate documents such as tax returns, organizational charts, and financial statements. We provide a detailed checklist tailored to your case type at the start of every engagement.",
      },
      {
        question: "How much does it cost to hire an immigration attorney?",
        answer:
          "Attorney fees depend on the complexity and type of case. We offer transparent flat-fee pricing for most petition types, which we discuss in detail during your initial consultation. In addition to legal fees, there are government filing fees charged by USCIS, and in some cases fees for credential evaluations or labor condition applications. We provide a complete fee breakdown before you commit to representation.",
      },
      {
        question: "Can I check my case status online?",
        answer:
          "Yes. Once USCIS issues a receipt number for your petition, you can track its status on the USCIS website at egov.uscis.gov/casestatus. As your attorneys, we also monitor your case and proactively communicate any updates, requests for evidence (RFEs), or status changes.",
      },
      {
        question: "What happens if my case is denied?",
        answer:
          "A denial is not necessarily the end of the road. Depending on the circumstances, you may be able to file a motion to reopen or reconsider, appeal the decision to the Administrative Appeals Office (AAO) or Board of Immigration Appeals (BIA), or refile a new petition addressing the deficiencies cited. We carefully analyze every denial to determine the strongest path forward.",
      },
      {
        question:
          "Do I need to be present in the U.S. to begin the immigration process?",
        answer:
          "Not always. Many employment-based petitions can be filed by the U.S. employer while the beneficiary is abroad. Consular processing allows individuals to receive their visa at a U.S. embassy or consulate in their home country. However, adjustment of status (Form I-485) requires physical presence in the United States. We will advise you on the appropriate process based on your location and circumstances.",
      },
    ],
  },
  {
    title: "Employment-Based Immigration",
    badge: "Employment",
    items: [
      {
        question: "What is the H-1B cap and how does the lottery work?",
        answer:
          "The H-1B visa has an annual cap of 65,000 visas, plus an additional 20,000 for applicants with a U.S. master's degree or higher. Because demand typically exceeds supply, USCIS conducts a random selection (lottery) among timely-filed registrations. Employers must submit electronic registrations during the designated registration period, usually in March, for an October 1 start date. Cap-exempt employers, such as universities and affiliated research organizations, are not subject to the lottery.",
      },
      {
        question: "How long does the PERM labor certification process take?",
        answer:
          "The PERM process involves several stages. First, the employer must obtain a prevailing wage determination from the Department of Labor, which currently takes 6-12 months. Then, the employer conducts a recruitment period of at least 30 days, followed by a mandatory 30-day cooling-off period. After that, the PERM application is filed and typically takes 6-12 months for processing. In total, the entire PERM process currently takes approximately 18-24 months from start to finish, though this can vary.",
      },
      {
        question:
          "What is the difference between H-1B and L-1 visas?",
        answer:
          "The H-1B is for specialty occupation workers being hired by a U.S. employer, requiring at minimum a bachelor's degree in a related field. The L-1 visa is for intracompany transferees who have worked for the same employer (or a parent, subsidiary, or affiliate) abroad for at least one continuous year within the preceding three years. L-1A is for managers and executives, while L-1B is for employees with specialized knowledge. Unlike the H-1B, the L-1 has no annual cap and does not require a labor condition application.",
      },
      {
        question: "Can I change employers while on an H-1B visa?",
        answer:
          "Yes. Under the AC21 portability provisions, you can begin working for a new employer as soon as the new employer files an H-1B transfer petition on your behalf, provided the petition is non-frivolous. You do not need to wait for approval before starting work with the new employer. However, if the transfer petition is ultimately denied, you must stop working for the new employer. It is critical to ensure the new petition is properly prepared.",
      },
      {
        question: "What is an O-1 visa and who qualifies?",
        answer:
          "The O-1 visa is for individuals with extraordinary ability or achievement in their field, including sciences, arts, education, business, athletics, or the motion picture and television industry. Applicants must demonstrate sustained national or international acclaim by meeting at least three of eight evidentiary criteria, such as awards, published material, high salary, or original contributions of major significance. There is no annual cap on O-1 visas.",
      },
    ],
  },
  {
    title: "Family-Based Immigration",
    badge: "Family",
    items: [
      {
        question: "How long does family-based immigration take?",
        answer:
          "Processing times depend on the relationship and the beneficiary's country of birth. Immediate relatives of U.S. citizens (spouses, unmarried children under 21, and parents) have no waiting period for visa numbers, so the process typically takes 12-24 months. Family preference categories, however, can involve significant wait times. For example, siblings of U.S. citizens (F4 category) may wait 15-20+ years depending on country of chargeability. Current wait times are published monthly in the Department of State Visa Bulletin.",
      },
      {
        question: "What are the family preference categories?",
        answer:
          "There are four family preference categories: F1 is for unmarried adult sons and daughters of U.S. citizens. F2A is for spouses and minor children of permanent residents, and F2B is for unmarried adult sons and daughters of permanent residents. F3 is for married sons and daughters of U.S. citizens. F4 is for siblings of adult U.S. citizens. Each category has different annual limits and wait times. Immediate relatives (spouses, minor children, and parents of U.S. citizens) are not subject to these preference categories and have no numerical limits.",
      },
      {
        question:
          "Can a permanent resident sponsor a spouse for a green card?",
        answer:
          "Yes. Permanent residents (green card holders) can petition for their spouses under the F2A preference category. While there is technically no visa backlog for this category in most cases, processing times still typically run 12-24 months. If the petitioning spouse becomes a U.S. citizen during the process, the beneficiary is automatically upgraded to the immediate relative category, which can expedite processing.",
      },
      {
        question:
          "What if my family-based petition is denied or I receive a Request for Evidence?",
        answer:
          "A Request for Evidence (RFE) is not a denial -- it is an opportunity to provide additional documentation to support your case. Common reasons for RFEs include insufficient proof of a bona fide relationship, missing documents, or financial insufficiency on the Affidavit of Support. We carefully prepare responses with comprehensive evidence packages. If a petition is denied, we evaluate options including motions to reopen, appeals, or refiling with stronger documentation.",
      },
    ],
  },
  {
    title: "Citizenship & Naturalization",
    badge: "Citizenship",
    items: [
      {
        question: "What are the eligibility requirements for U.S. citizenship?",
        answer:
          "To naturalize, you generally must be at least 18 years old, have been a permanent resident for at least 5 years (or 3 years if married to a U.S. citizen), have lived within the USCIS district where you file for at least 3 months, demonstrate continuous residence and physical presence in the U.S., be able to read, write, and speak basic English, pass a civics test on U.S. history and government, and demonstrate good moral character. Certain exceptions exist for military service members and other special categories.",
      },
      {
        question: "Does the United States allow dual citizenship?",
        answer:
          "The United States does not require you to renounce your current citizenship when naturalizing. However, the U.S. Oath of Allegiance does include a statement of renunciation of foreign allegiances, though this is generally not enforced as an actual requirement to give up foreign nationality. Whether you can maintain dual citizenship also depends on the laws of your home country -- some countries do not permit their citizens to hold dual nationality. We recommend consulting with both U.S. and foreign legal counsel on this issue.",
      },
      {
        question: "How long does the naturalization process take?",
        answer:
          "From filing Form N-400 to the oath ceremony, the naturalization process currently takes approximately 8-14 months, depending on your USCIS field office. The process includes biometrics collection, an interview where you take the English and civics tests, and a final oath ceremony. Premium processing is not available for naturalization applications. Processing times can be checked on the USCIS website for your specific field office.",
      },
      {
        question:
          "Can I travel outside the U.S. while my citizenship application is pending?",
        answer:
          "Yes, but you must be careful. Extended absences can disrupt your continuous residence requirement and potentially jeopardize your application. Trips under 6 months generally do not cause issues, but trips of 6 months or more may break your continuous residence. If you have an interview or biometrics appointment scheduled, you must be present for it. We advise clients to limit international travel during the pendency of their naturalization application and to consult with us before any planned trips.",
      },
    ],
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-border rounded-xl overflow-hidden bg-white transition-shadow hover:shadow-sm">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer"
      >
        <span className="text-dark font-medium pr-4">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
              <div className="h-px bg-border mb-4" />
              <p className="text-body leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQsContent() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  function toggleItem(key: string) {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="faq-grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#faq-grid)" />
          </svg>
        </div>
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-blue/20 blur-[120px]"
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-gold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            Knowledge Base
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl"
          >
            Find answers to common immigration questions. For case-specific
            guidance, schedule a consultation with our attorneys.
          </motion.p>
        </div>
      </section>

      {/* FAQ Sections */}
      {faqCategories.map((category, catIndex) => (
        <Section
          key={category.title}
          className={catIndex % 2 === 1 ? "!bg-white" : ""}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-blue-light text-blue mb-4">
              {category.badge}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-dark">
              {category.title}
            </h2>
          </motion.div>

          <div className="space-y-3 max-w-4xl">
            {category.items.map((item, itemIndex) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: itemIndex * 0.05, duration: 0.4 }}
              >
                <AccordionItem
                  item={item}
                  isOpen={
                    openItems[`${catIndex}-${itemIndex}`] ?? false
                  }
                  onToggle={() => toggleItem(`${catIndex}-${itemIndex}`)}
                />
              </motion.div>
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}
