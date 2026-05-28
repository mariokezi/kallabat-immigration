import type { Metadata } from "next";
import { WorkVisasContent } from "./content";

export const metadata: Metadata = {
  title: "Work Visas",
  description:
    "Comprehensive work visa solutions including H-1B, L-1, TN, O-1, E-2, and other employment-based nonimmigrant visas.",
};

export default function WorkVisasPage() {
  return <WorkVisasContent />;
}
