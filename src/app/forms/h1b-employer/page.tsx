import { Metadata } from "next";
import { QuestionnaireForm, type FormSection } from "@/components/forms/questionnaire-form";

export const metadata: Metadata = {
  title: "H-1B Employer Questionnaire",
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
      { name: "year_established", label: "Year Established", type: "text" },
      { name: "num_employees", label: "Total Number of Employees", type: "number" },
      { name: "annual_revenue", label: "Gross Annual Income / Revenue", type: "text" },
      { name: "business_type", label: "Type of Business / Industry", type: "text", required: true },
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
    title: "Position Details",
    fields: [
      { name: "job_title", label: "Job Title for H-1B Worker", type: "text", required: true },
      { name: "job_location", label: "Job Location (if different from company address)", type: "text" },
      { name: "num_positions", label: "Number of Positions", type: "number" },
      { name: "full_part", label: "Full-Time or Part-Time", type: "select", options: ["Full-Time", "Part-Time"], required: true },
      { name: "wage_offered", label: "Annual Wage Offered ($)", type: "text", required: true },
      { name: "start_date", label: "Requested Start Date", type: "date" },
      { name: "education_required", label: "Minimum Education Required", type: "select", options: ["Bachelor's Degree", "Master's Degree", "Doctorate", "Professional Degree", "Other"], required: true },
      { name: "field_of_study", label: "Required Field of Study", type: "text", required: true },
      { name: "experience_required", label: "Years of Experience Required", type: "text" },
      { name: "job_duties", label: "Detailed Job Duties", type: "textarea", required: true, placeholder: "Describe the specific duties, responsibilities, and technical requirements of the position..." },
      { name: "special_skills", label: "Special Skills, Licenses, or Certifications Required", type: "textarea", placeholder: "List any specific skills, software, tools, certifications..." },
    ],
  },
  {
    title: "Work Environment",
    fields: [
      { name: "supervised_by", label: "Who Will Supervise This Position?", type: "text" },
      { name: "supervisor_title", label: "Supervisor's Title", type: "text" },
      { name: "department", label: "Department", type: "text" },
      { name: "num_h1b_current", label: "Number of Current H-1B Workers", type: "number" },
      { name: "offsite_work", label: "Will Worker Perform Services at Client Sites?", type: "select", options: ["Yes", "No"] },
      { name: "offsite_details", label: "If Yes, Provide Client Name and Location", type: "textarea" },
    ],
  },
  {
    title: "Additional Information",
    fields: [
      { name: "previous_h1b", label: "Has Company Previously Filed H-1B Petitions?", type: "select", options: ["Yes", "No"] },
      { name: "lca_filed", label: "Has an LCA Been Filed for This Position?", type: "select", options: ["Yes", "No", "Unsure"] },
      { name: "additional_notes", label: "Additional Notes or Questions", type: "textarea", placeholder: "Any other information you'd like us to know..." },
    ],
  },
];

export default function H1BEmployerPage() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 bg-blue-50 min-h-screen">
      <QuestionnaireForm
        title="H-1B Employer Questionnaire"
        description="Please complete all fields to begin the H-1B specialty occupation visa process. This information helps our attorneys prepare your petition accurately."
        sections={sections}
        formType="H-1B Employer Questionnaire"
      />
    </div>
  );
}
