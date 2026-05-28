import type { Metadata } from "next";
import { FAQsContent } from "./content";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common immigration questions about work visas, green cards, family immigration, citizenship, and the immigration process.",
};

export default function FAQsPage() {
  return <FAQsContent />;
}
