import { Metadata } from "next";
import { QuestionnaireForm, type FormSection } from "@/components/forms/questionnaire-form";

export const metadata: Metadata = {
  title: "TN Employee Questionnaire",
};

const sections: FormSection[] = [
  {
    title: "Personal Information",
    fields: [
      { name: "full_name", label: "Full Legal Name (as on passport)", type: "text", required: true },
      { name: "other_names", label: "Any Other Names Used", type: "text" },
      { name: "dob", label: "Date of Birth", type: "date", required: true },
      { name: "country_birth", label: "Country of Birth", type: "text", required: true },
      { name: "country_citizenship", label: "Country of Citizenship", type: "select", options: ["Canada", "Mexico"], required: true },
      { name: "gender", label: "Gender", type: "select", options: ["Male", "Female", "Other"], required: true },
      { name: "marital_status", label: "Marital Status", type: "select", options: ["Single", "Married", "Divorced", "Widowed"], required: true },
    ],
  },
  {
    title: "Contact Information",
    fields: [
      { name: "current_address", label: "Current Address", type: "text", required: true },
      { name: "city", label: "City", type: "text", required: true },
      { name: "province_state", label: "Province / State", type: "text", required: true },
      { name: "postal_code", label: "Postal / Zip Code", type: "text", required: true },
      { name: "country", label: "Country", type: "text", required: true },
      { name: "phone", label: "Phone Number", type: "tel", required: true },
      { name: "email", label: "Email Address", type: "email", required: true },
    ],
  },
  {
    title: "Passport & Immigration",
    fields: [
      { name: "passport_number", label: "Passport Number", type: "text", required: true },
      { name: "passport_expiry", label: "Passport Expiration Date", type: "date", required: true },
      { name: "current_status", label: "Current Immigration Status in U.S. (if applicable)", type: "text" },
      { name: "previous_tn", label: "Have You Previously Held TN Status?", type: "select", options: ["Yes", "No"], required: true },
      { name: "previous_tn_details", label: "If Yes, Provide Dates and Employer", type: "textarea" },
      { name: "visa_denials", label: "Have You Ever Been Denied a Visa or Entry?", type: "select", options: ["Yes", "No"] },
      { name: "denial_details", label: "If Yes, Explain", type: "textarea" },
    ],
  },
  {
    title: "Education",
    fields: [
      { name: "highest_degree", label: "Highest Degree Earned", type: "select", options: ["Bachelor's", "Master's", "Doctorate / Ph.D.", "Professional (M.D., J.D.)", "Associate's", "Other"], required: true },
      { name: "degree_field", label: "Field of Study / Major", type: "text", required: true },
      { name: "university", label: "University / Institution Name", type: "text", required: true },
      { name: "university_country", label: "Country of Institution", type: "text", required: true },
      { name: "graduation_date", label: "Graduation Date", type: "date", required: true },
      { name: "licenses", label: "Professional Licenses (state, license #, expiry)", type: "textarea" },
    ],
  },
  {
    title: "Employment & TN Category",
    fields: [
      { name: "tn_category", label: "TN Professional Category", type: "text", required: true, placeholder: "e.g., Computer Systems Analyst, Engineer, Accountant" },
      { name: "employer_name", label: "U.S. Employer Name", type: "text", required: true },
      { name: "job_title", label: "Job Title", type: "text", required: true },
      { name: "work_history", label: "Previous Employment History (last 3 positions)", type: "textarea", placeholder: "Employer, title, dates, country..." },
    ],
  },
  {
    title: "Dependents & Additional Info",
    fields: [
      { name: "spouse_name", label: "Spouse's Full Name (if applicable)", type: "text" },
      { name: "spouse_dob", label: "Spouse's Date of Birth", type: "date" },
      { name: "spouse_citizenship", label: "Spouse's Country of Citizenship", type: "text" },
      { name: "children", label: "Children (name, DOB, citizenship)", type: "textarea" },
      { name: "additional_notes", label: "Additional Notes", type: "textarea" },
    ],
  },
];

export default function TNEmployeePage() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 bg-blue-50 min-h-screen">
      <QuestionnaireForm
        title="TN Employee Questionnaire"
        description="For Canadian or Mexican professionals applying under the USMCA TN visa category. All information is kept strictly confidential."
        sections={sections}
        formType="TN Employee Questionnaire"
      />
    </div>
  );
}
