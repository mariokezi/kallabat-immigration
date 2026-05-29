"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "date" | "select" | "textarea" | "number";
  placeholder?: string;
  required?: boolean;
  options?: string[];
  half?: boolean;
}

export interface FormSection {
  title: string;
  fields: FormField[];
}

interface QuestionnaireFormProps {
  title: string;
  description: string;
  sections: FormSection[];
  formType: string;
}

export function QuestionnaireForm({
  title,
  description,
  sections,
  formType,
}: QuestionnaireFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Format all fields into a readable email body
      const lines = sections.flatMap((section) =>
        [
          `\n--- ${section.title} ---`,
          ...section.fields.map(
            (field) => `${field.label}: ${formData[field.name] || "N/A"}`
          ),
        ]
      );

      const emailBody = `Form Type: ${formType}\n${lines.join("\n")}`;

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_kallabat",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_questionnaire",
        {
          form_type: formType,
          message: emailBody,
          from_name: formData.full_name || formData.company_name || "Website Submission",
          from_email: formData.email || "noreply@kallabatlaw.com",
          phone: formData.phone || "",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );

      setStatus("sent");
    } catch {
      // Fallback: open mailto if EmailJS isn't configured
      const subject = encodeURIComponent(`${formType} — Website Submission`);
      const body = encodeURIComponent(
        sections
          .flatMap((s) => [
            `\n--- ${s.title} ---`,
            ...s.fields.map((f) => `${f.label}: ${formData[f.name] || "N/A"}`),
          ])
          .join("\n")
      );
      window.location.href = `mailto:info@kallabatlaw.com?subject=${subject}&body=${body}`;
      setStatus("sent");
    }
  };

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20 px-6"
      >
        <CheckCircle className="w-16 h-16 text-success mx-auto mb-6" />
        <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
          Questionnaire Submitted
        </h2>
        <p className="text-body max-w-md mx-auto mb-8">
          Thank you. Your {formType} has been securely sent to our team.
          We will review your information and contact you shortly.
        </p>
        <p className="text-sm text-body/50">
          Questions? Call us at <a href="tel:2488653331" className="text-blue font-medium">(248) 865-3331</a>
        </p>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-14">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy tracking-tight mb-3">
          {title}
        </h1>
        <p className="text-body max-w-2xl mx-auto text-sm sm:text-base">{description}</p>
        <div className="flex items-center justify-center gap-2 mt-4 text-xs text-body/50">
          <Lock className="w-3.5 h-3.5" />
          <span>Secure &middot; Encrypted &middot; No data stored on our servers</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
        {sections.map((section, si) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: si * 0.08 }}
            className="bg-white rounded-2xl border border-border/60 p-5 sm:p-8"
          >
            <h2 className="text-lg sm:text-xl font-bold text-navy mb-5 sm:mb-6 pb-3 border-b border-border/40">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {section.fields.map((field) => (
                <div
                  key={field.name}
                  className={field.half === false || field.type === "textarea" ? "sm:col-span-2" : ""}
                >
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-navy mb-1.5"
                  >
                    {field.label}
                    {field.required && <span className="text-red-500 ml-0.5">*</span>}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      rows={4}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={formData[field.name] || ""}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      className="w-full rounded-xl border border-border/60 px-4 py-3 text-sm text-navy placeholder:text-body/30 focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue/40 transition-all resize-none"
                    />
                  ) : field.type === "select" ? (
                    <select
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      value={formData[field.name] || ""}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      className="w-full rounded-xl border border-border/60 px-4 py-3 text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue/40 transition-all"
                    >
                      <option value="">{field.placeholder || "Select..."}</option>
                      {field.options?.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={formData[field.name] || ""}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      className="w-full rounded-xl border border-border/60 px-4 py-3 text-sm text-navy placeholder:text-body/30 focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue/40 transition-all"
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Submit */}
        <div className="flex flex-col items-center gap-4 pt-4">
          {status === "error" && (
            <div className="flex items-center gap-2 text-red-500 text-sm">
              <AlertCircle className="w-4 h-4" />
              Something went wrong. Please try again.
            </div>
          )}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto min-w-[280px]"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Submitting..." : "Submit Questionnaire"}
            <Send className="w-4 h-4" />
          </Button>
          <p className="text-xs text-body/40 text-center">
            Your information is sent directly to our attorneys via encrypted email.
          </p>
        </div>
      </form>
    </div>
  );
}
