import { Metadata } from "next";
import { QuestionnaireForm, type FormSection } from "@/components/forms/questionnaire-form";

export const metadata: Metadata = {
  title: "H-4 / TD Dependent Questionnaire",
};

const sections: FormSection[] = [
  {
    title: "Dependent's Personal Information",
    fields: [
      { name: "full_name", label: "Full Legal Name (as on passport)", type: "text", required: true },
      { name: "other_names", label: "Any Other Names Used", type: "text" },
      { name: "dob", label: "Date of Birth", type: "date", required: true },
      { name: "country_birth", label: "Country of Birth", type: "text", required: true },
      { name: "country_citizenship", label: "Country of Citizenship", type: "text", required: true },
      { name: "gender", label: "Gender", type: "select", options: ["Male", "Female", "Other"], required: true },
      { name: "relationship", label: "Relationship to Principal Visa Holder", type: "select", options: ["Spouse", "Child (under 21)"], required: true },
    ],
  },
  {
    title: "Contact Information",
    fields: [
      { name: "current_address", label: "Current Address", type: "text", required: true },
      { name: "city", label: "City", type: "text", required: true },
      { name: "state_province", label: "State / Province", type: "text", required: true },
      { name: "zip_postal", label: "Zip / Postal Code", type: "text", required: true },
      { name: "country", label: "Country", type: "text", required: true },
      { name: "phone", label: "Phone Number", type: "tel", required: true },
      { name: "email", label: "Email Address", type: "email", required: true },
    ],
  },
  {
    title: "Passport & Travel Documents",
    fields: [
      { name: "passport_number", label: "Passport Number", type: "text", required: true },
      { name: "passport_country", label: "Passport Issuing Country", type: "text", required: true },
      { name: "passport_expiry", label: "Passport Expiration Date", type: "date", required: true },
      { name: "current_location", label: "Current Location", type: "select", options: ["In the United States", "Outside the United States"], required: true },
      { name: "current_status", label: "Current Immigration Status (if in U.S.)", type: "text" },
      { name: "i94_expiry", label: "I-94 Expiration Date (if in U.S.)", type: "date" },
    ],
  },
  {
    title: "Principal Visa Holder Information",
    fields: [
      { name: "principal_name", label: "Principal Visa Holder's Full Name", type: "text", required: true },
      { name: "principal_status", label: "Principal's Visa Status", type: "select", options: ["H-1B", "H-1B1", "TN", "L-1A", "L-1B", "E-1", "E-2", "E-3", "Other"], required: true },
      { name: "principal_employer", label: "Principal's Employer Name", type: "text", required: true },
      { name: "principal_receipt", label: "Principal's I-797 Receipt/Approval Number (if known)", type: "text" },
      { name: "principal_status_expiry", label: "Principal's Status Expiration Date", type: "date" },
    ],
  },
  {
    title: "Immigration History",
    fields: [
      { name: "previous_us_visas", label: "Previous U.S. Visas Held (type and dates)", type: "textarea" },
      { name: "visa_denials", label: "Have You Ever Been Denied a U.S. Visa or Admission?", type: "select", options: ["Yes", "No"], required: true },
      { name: "denial_details", label: "If Yes, Explain", type: "textarea" },
      { name: "removal_proceedings", label: "Have You Ever Been in Removal / Deportation Proceedings?", type: "select", options: ["Yes", "No"], required: true },
    ],
  },
  {
    title: "Additional Information",
    fields: [
      { name: "ead_request", label: "Are You Requesting an Employment Authorization Document (EAD)?", type: "select", options: ["Yes", "No", "Not Sure"] },
      { name: "additional_notes", label: "Additional Notes or Questions", type: "textarea" },
    ],
  },
];

export default function H4TDDependentPage() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 bg-blue-50 min-h-screen">
      <QuestionnaireForm
        title="H-4 / TD Dependent Questionnaire"
        description="For dependents (spouse or children under 21) of H-1B, TN, L-1, or E visa holders seeking dependent status in the United States."
        sections={sections}
        formType="H-4 / TD Dependent Questionnaire"
      />
    </div>
  );
}
