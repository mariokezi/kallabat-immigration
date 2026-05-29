"use server";

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

  const subject = `${formType} — New Submission`;
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const toEmail = process.env.FORM_RECIPIENT_EMAIL || "info@kallabatlaw.com";
  const fromEmail = process.env.FORM_FROM_EMAIL || "noreply@kallabatlaw.com";

  if (RESEND_API_KEY) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Kallabat Law Website <${fromEmail}>`,
        to: toEmail,
        subject,
        text: fullBody,
        reply_to: fields.email || fields.contact_email || undefined,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend email failed:", errorText);
      throw new Error("Failed to send email");
    }
  } else {
    // Dev mode — log to console
    console.log("========== FORM SUBMISSION (dev mode — no RESEND_API_KEY) ==========");
    console.log(fullBody);
    console.log("====================================================================");
  }

  return { success: true };
}
