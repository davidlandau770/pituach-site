import { GOOGLE_SHEET_URL, SITE_URL } from "../../helpers/environments";
import { CustomError } from "../../utils/handleError";

export const sendContactEmailService = async (
  name: string,
  email: string,
  message: string,
  clientId: string,
): Promise<void> => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new CustomError("כתובת אימייל לא תקינה", 400, "VALIDATION");
  }

  const safeName = name.trim();
  const safeMessage = message.trim();

  if (safeMessage.length < 5) {
    throw new CustomError("ההודעה קצרה מדי", 400, "VALIDATION");
  }

  const siteName = "פיתוח 770";

  const clientEmailSubject = `תודה על פנייתך לפיתוח 770`;
  const clientEmailHtml = `
    <div dir="rtl" style="font-family: sans-serif; line-height: 1.6; text-align: right;">
      <h2 style="color: #333;">היי ${safeName || "שלום"},</h2>
      <p>תודה שפנית אלינו. קיבלנו את הודעתך ונחזור אליך בהקדם.</p>
      <div style="background: #f9f9f9; padding: 10px; border-right: 4px solid #ddd; margin: 15px 0;">
        <p style="margin: 0; font-style: italic;">"${safeMessage}"</p>
      </div>
      <p>בברכה,<br /><strong>${siteName}</strong></p>
      <a href="https://${SITE_URL}">${SITE_URL}</a>
    </div>
  `;

  const res = await fetch(GOOGLE_SHEET_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      clientId,
      name: safeName,
      email: email.toLowerCase().trim(),
      message: safeMessage,
      clientEmailSubject,
      clientEmailHtml,
    }),
  });

  if (!res.ok) {
    throw new CustomError(
      "שגיאה בתקשורת עם שרת הנתונים",
      res.status,
      "GOOGLE_ERROR",
    );
  }

  const json = await res.json();

  if (json.result !== "success") {
    throw new CustomError(
      json.message || "חלה שגיאה בסנכרון הנתונים",
      500,
      "GOOGLE_ERROR",
    );
  }
};
