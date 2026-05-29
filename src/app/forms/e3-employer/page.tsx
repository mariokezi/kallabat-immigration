import { Metadata } from "next";
import { QuestionnaireForm, type FormSection } from "@/components/forms/questionnaire-form";

export const metadata: Metadata = {
  title: "E-3 Employer Questionnaire",
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
    title: "E-3 Position Details",
    fields: [
      { name: "job_title", label: "Job Title", type: "text", required: true },
      { name: "soc_code", label: "SOC / O*NET Code (if known)", type: "text", placeholder: "e.g., 15-1256.00" },
      { name: "job_location", label: "Work Location", type: "text", required: true },
      { name: "full_part", label: "Full-Time or Part-Time", type: "select", options: ["Full-Time", "Part-Time"], required: true },
      { name: "wage_offered", label: "Annual Wage Offered ($)", type: "text", required: true },
      { name: "prevailing_wage", label: "Prevailing Wage for Position ($, if known)", type: "text" },
      { name: "start_date", label: "Requested Start Date", type: "date", required: true },
      { name: "end_date", label: "Requested End Date (E-3 max 2 years)", type: "date" },
      { name: "education_required", label: "Minimum Education Required", type: "select", options: ["Bachelor's Degree", "Master's Degree", "Doctorate", "Other"], required: true },
      { name: "field_of_study", label: "Required Field of Study", type: "text", required: true },
      { name: "job_duties", label: "Detailed Job Duties", type: "textarea", required: true },
      { name: "specialty_occupation", label: "Why Is This a Specialty Occupation?", type: "textarea", placeholder: "Explain why a bachelor's degree or higher in a specific field is required..." },
    ],
  },
  {
    title: "LCA Information",
    fields: [
      { name: "lca_filed", label: "Has a Labor Condition Application (LCA) Been Filed?", type: "select", options: ["Yes", "No", "Unsure"], required: true },
      { name: "lca_number", label: "LCA Case Number (if filed)", type: "text" },
      { name: "additional_notes", label: "Additional Notes or Questions", type: "textarea" },
    ],
  },
];

export default function E3EmployerPage() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 bg-blue-50 min-h-screen">
      <QuestionnaireForm
        title="E-3 Employer Questionnaire"
        description="For employers hiring Australian specialty workers under the E-3 visa category. An LCA must be filed before the visa can be issued."
        sections={sections}
        formType="E-3 Employer Questionnaire"
      />
    </div>
  );
}
