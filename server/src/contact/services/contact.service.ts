import { SITE_URL } from "../../helpers/environments";
import { CustomError } from "../../utils/handleError";
import { sendContactEmailDAL } from "../dal/contact.dal";

export const sendContactEmailService = async (
  name: string,
  email: string,
  message: string,
  clientId: string,
): Promise<void> => {
  // 1. ולידציות
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new CustomError("כתובת אימייל לא תקינה", 400, "VALIDATION");
  }

  const safeName = name.trim();
  const safeMessage = message.trim();

  if (safeMessage.length < 5) {
    throw new CustomError("ההודעה קצרה מדי", 400, "VALIDATION");
  }

  // 2. הכנת התוכן (לוגיקה עסקית)
  const siteName = "פיתוח 770";
  const clientEmailSubject = `תודה על פנייתך ל${siteName}`;
  const clientEmailHtml = `
    <div dir="rtl" style="font-family: sans-serif; line-height: 1.6; text-align: right;">
      <h2 style="color: #333;">היי ${safeName},</h2>
      <p>תודה שפנית אלינו. קיבלנו את הודעתך ונחזור אליך בהקדם.</p>
      <div style="background: #f9f9f9; padding: 10px; border-right: 4px solid #ddd; margin: 15px 0;">
        <p style="margin: 0; font-style: italic;">"${safeMessage}"</p>
      </div>
      <p>בברכה,<br /><strong>${siteName}</strong></p>
      <a href="https://${SITE_URL}">${SITE_URL}</a>
    </div>
  `;

  // 3. קריאה לשכבת הנתונים
  await sendContactEmailDAL({
    clientId,
    name: safeName,
    email: email.toLowerCase().trim(),
    message: safeMessage,
    clientEmailSubject,
    clientEmailHtml,
  });
};
