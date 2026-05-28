import type { Metadata } from "next";
import { ForIndividualsContent } from "./content";

export const metadata: Metadata = {
  title: "For Individuals",
  description:
    "Personal immigration solutions including family-based green cards, citizenship, naturalization, and visa consultations.",
};

export default function ForIndividualsPage() {
  return <ForIndividualsContent />;
}
