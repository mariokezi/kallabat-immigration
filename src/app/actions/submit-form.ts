"use server";

import nodemailer from "nodemailer";

export async function submitQuestionnaire(data: {
  formType: string;
  fields: Record<string, string>;
  sections: { title: string; fieldNames: { name: string; label: string }[] }[];
}) {
  const { formType, fields, sections } = data;

  // Build readable email body
  const body = sections
    .map(
      (section) =>
        `\n${"=".repeat(40)}\n${section.title}\n${"=".repeat(40)}\n` +
        section.fieldNames
          .map((f) => `${f.label}: ${fields[f.name] || "—"}`)
          .join("\n")
    )
    .join("\n");

  const fullBody = `QUESTIONNAIRE SUBMISSION\nForm: ${formType}\nDate: ${new Date().toLocaleString("en-US", { timeZone: "America/Detroit" })}\n${body}`;

  // Use SMTP if configured, otherwise log and succeed (for dev)
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const toEmail = process.env.FORM_RECIPIENT_EMAIL || "info@kallabatlaw.com";

  if (smtpHost && smtpUser && smtpPass) {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: `"Kallabat Law Website" <${smtpUser}>`,
      to: toEmail,
      subject: `${formType} — New Submission`,
      text: fullBody,
      replyTo: fields.email || fields.contact_email || undefined,
    });
  } else {
    // Dev mode: log to server console
    console.log("========== FORM SUBMISSION ==========");
    console.log(fullBody);
    console.log("=====================================");
  }

  return { success: true };
}
