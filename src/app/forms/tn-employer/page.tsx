import { Metadata } from "next";
import { QuestionnaireForm, type FormSection } from "@/components/forms/questionnaire-form";

export const metadata: Metadata = {
  title: "TN Employer Questionnaire",
};

const sections: FormSection[] = [
  {
    title: "Company Information",
    fields: [
      { name: "company_name", label: "Company Name", type: "text", required: true },
      { name: "company_address", label: "Company Address", type: "text", required: true },
      { name: "city", label: "City", type: "text", required: true },
      { name: "state", label: "State", type: "text", required: true },
      { name: "zip", label: "Zip Code", type: "text", required: true },
      { name: "phone", label: "Company Phone", type: "tel", required: true },
      { name: "fein", label: "Federal Employer ID Number (FEIN)", type: "text", required: true },
      { name: "business_type", label: "Type of Business / Industry", type: "text", required: true },
      { name: "num_employees", label: "Total Number of Employees", type: "number" },
      { name: "website", label: "Company Website", type: "text" },
    ],
  },
  {
    title: "Contact Person",
    fields: [
      { name: "contact_name", label: "Full Name", type: "text", required: true },
      { name: "contact_title", label: "Title / Position", type: "text", required: true },
      { name: "contact_email", label: "Email Address", type: "email", required: true },
      { name: "contact_phone", label: "Direct Phone", type: "tel", required: true },
    ],
  },
  {
    title: "TN Position Details",
    fields: [
      { name: "job_title", label: "Job Title for TN Worker", type: "text", required: true },
      { name: "tn_category", label: "USMCA/NAFTA Professional Category", type: "select", options: ["Accountant", "Architect", "Computer Systems Analyst", "Engineer", "Graphic Designer", "Management Consultant", "Mathematician / Statistician", "Pharmacist", "Physician", "Scientist", "Technical Writer", "Other"], required: true },
      { name: "tn_category_other", label: "If Other, Specify", type: "text" },
      { name: "job_location", label: "Work Location", type: "text", required: true },
      { name: "full_part", label: "Full-Time or Part-Time", type: "select", options: ["Full-Time", "Part-Time"], required: true },
      { name: "wage_offered", label: "Annual Salary Offered ($)", type: "text", required: true },
      { name: "start_date", label: "Requested Start Date", type: "date", required: true },
      { name: "end_date", label: "Requested End Date (TN is max 3 years)", type: "date" },
      { name: "education_required", label: "Minimum Education Required", type: "select", options: ["Bachelor's Degree", "Master's Degree", "Doctorate", "Licensure", "Other"], required: true },
      { name: "job_duties", label: "Detailed Job Duties and Responsibilities", type: "textarea", required: true },
      { name: "prearranged_employment", label: "Is This Prearranged Full-Time Employment?", type: "select", options: ["Yes", "No"], required: true },
    ],
  },
  {
    title: "Additional Information",
    fields: [
      { name: "worker_nationality", label: "Worker's Nationality", type: "select", options: ["Canadian", "Mexican"], required: true },
      { name: "previous_tn", label: "Has Worker Previously Held TN Status?", type: "select", options: ["Yes", "No"] },
      { name: "additional_notes", label: "Additional Notes or Questions", type: "textarea" },
    ],
  },
];

export default function TNEmployerPage() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 bg-blue-50 min-h-screen">
      <QuestionnaireForm
        title="TN Employer Questionnaire"
        description="For employers hiring Canadian or Mexican professionals under the USMCA (formerly NAFTA) TN visa category. Complete all fields to begin the process."
        sections={sections}
        formType="TN Employer Questionnaire"
      />
    </div>
  );
}
