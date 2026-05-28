import type { Metadata } from "next";
import { ForEmployersContent } from "./content";

export const metadata: Metadata = {
  title: "For Employers",
  description:
    "Corporate immigration solutions for businesses of all sizes. H-1B sponsorship, PERM labor certification, green cards, and compliance audits.",
};

export default function ForEmployersPage() {
  return <ForEmployersContent />;
}
