import type { Metadata } from "next";
import { GreenCardsContent } from "./content";

export const metadata: Metadata = {
  title: "Green Cards & PERM",
  description:
    "Employment-based green cards and PERM labor certification. EB-1, EB-2, EB-3, EB-5 immigrant visa categories and the PERM process.",
};

export default function GreenCardsPage() {
  return <GreenCardsContent />;
}
