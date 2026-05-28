import type { Metadata } from "next";
import { FormsContent } from "./content";

export const metadata: Metadata = {
  title: "Immigration Questionnaires",
  description:
    "Complete your immigration questionnaire securely online. Forms for H-1B, TN, E-3 employers and employees, and dependent visa applicants.",
};

export default function FormsPage() {
  return <FormsContent />;
}
