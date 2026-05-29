import { Metadata } from "next";
import { QuestionnaireForm, type FormSection } from "@/components/forms/questionnaire-form";

export const metadata: Metadata = {
  title: "H-1B Employee Questionnaire",
};

const sections: FormSection[] = [
  {
    title: "Personal Information",
    fields: [
      { name: "full_name", label: "Full Legal Name (as on passport)", type: "text", required: true },
      { name: "other_names", label: "Any Other Names Used (maiden, previous)", type: "text" },
      { name: "dob", label: "Date of Birth", type: "date", required: true },
      { name: "country_birth", label: "Country of Birth", type: "text", required: true },
      { name: "country_citizenship", label: "Country of Citizenship", type: "text", required: true },
      { name: "gender", label: "Gender", type: "select", options: ["Male", "Female", "Other"], required: true },
      { name: "marital_status", label: "Marital Status", type: "select", options: ["Single", "Married", "Divorced", "Widowed"], required: true },
      { name: "ssn", label: "Social Security Number (if any)", type: "text", placeholder: "Leave blank if N/A" },
      { name: "a_number", label: "Alien Registration Number (A#, if any)", type: "text" },
    ],
  },
  {
    title: "Contact Information",
    fields: [
      { name: "us_address", label: "Current U.S. Address", type: "text", required: true },
      { name: "city", label: "City", type: "text", required: true },
      { name: "state", label: "State", type: "text", required: true },
      { name: "zip", label: "Zip Code", type: "text", required: true },
      { name: "phone", label: "Phone Number", type: "tel", required: true },
      { name: "email", label: "Email Address", type: "email", required: true },
      { name: "foreign_address", label: "Foreign / Home Country Address", type: "text" },
    ],
  },
  {
    title: "Immigration History",
    fields: [
      { name: "current_status", label: "Current Immigration Status", type: "select", options: ["H-1B", "H-4", "F-1 (OPT)", "F-1 (CPT)", "L-1", "L-2", "B-1/B-2", "TN", "J-1", "Other"], required: true },
      { name: "status_expires", label: "Current Status Expiration Date (I-94)", type: "date", required: true },
      { name: "last_entry_date", label: "Date of Last Entry into the U.S.", type: "date" },
      { name: "last_entry_status", label: "Status at Last Entry", type: "text" },
      { name: "passport_number", label: "Passport Number", type: "text", required: true },
      { name: "passport_expiry", label: "Passport Expiration Date", type: "date", required: true },
      { name: "visa_denials", label: "Have You Ever Been Denied a U.S. Visa or Admission?", type: "select", options: ["Yes", "No"], required: true },
      { name: "denial_details", label: "If Yes, Explain", type: "textarea" },
    ],
  },
  {
    title: "Education",
    fields: [
      { name: "highest_degree", label: "Highest Degree Earned", type: "select", options: ["Bachelor's", "Master's", "Doctorate / Ph.D.", "Professional (M.D., J.D., etc.)", "Associate's", "Other"], required: true },
      { name: "degree_field", label: "Field of Study / Major", type: "text", required: true },
      { name: "university", label: "University / Institution Name", type: "text", required: true },
      { name: "university_country", label: "Country of Institution", type: "text", required: true },
      { name: "graduation_date", label: "Graduation Date", type: "date", required: true },
      { name: "additional_degrees", label: "Other Degrees (list institution, degree, field, year)", type: "textarea" },
      { name: "licenses", label: "Professional Licenses or Certifications", type: "textarea" },
    ],
  },
  {
    title: "Employment Information",
    fields: [
      { name: "current_employer", label: "Current / Most Recent Employer", type: "text", required: true },
      { name: "current_job_title", label: "Job Title", type: "text", required: true },
      { name: "employment_start", label: "Employment Start Date", type: "date" },
      { name: "work_history", label: "Previous Employment History (employer, title, dates, country)", type: "textarea", placeholder: "List your last 3-5 positions..." },
    ],
  },
  {
    title: "Dependents & Additional Info",
    fields: [
      { name: "spouse_name", label: "Spouse's Full Name (if applicable)", type: "text" },
      { name: "spouse_dob", label: "Spouse's Date of Birth", type: "date" },
      { name: "spouse_citizenship", label: "Spouse's Country of Citizenship", type: "text" },
      { name: "children", label: "Dependents / Children (name, DOB, citizenship for each)", type: "textarea" },
      { name: "additional_notes", label: "Additional Notes or Questions", type: "textarea" },
    ],
  },
];

export default function H1BEmployeePage() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 bg-blue-50 min-h-screen">
      <QuestionnaireForm
        title="H-1B Employee Questionnaire"
        description="Please provide your personal, educational, and immigration details. This information is kept strictly confidential and used only for your visa petition."
        sections={sections}
        formType="H-1B Employee Questionnaire"
      />
    </div>
  );
}
