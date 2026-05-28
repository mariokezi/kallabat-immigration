import type { Metadata } from "next";
import { ContactContent } from "./content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Joseph Kallabat & Associates. Schedule a consultation for immigration legal services in West Bloomfield, Michigan.",
};

export default function ContactPage() {
  return <ContactContent />;
}
