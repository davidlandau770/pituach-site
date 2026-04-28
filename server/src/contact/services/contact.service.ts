import { GOOGLE_SHEET_URL } from "../../helpers/environments";
import { CustomError } from "../../utils/handleError";

export const sendContactEmailService = async (
  name: string,
  email: string,
  message: string,
): Promise<void> => {
  if (!name || !email || !message) {
    throw new CustomError("נא למלא את כל השדות", 400, "VALIDATION");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new CustomError("כתובת אימייל לא תקינה", 400, "VALIDATION");
  }

  if (message.length < 5) {
    throw new CustomError("ההודעה קצרה מדי", 400, "VALIDATION");
  }

  const googleRes = await fetch(GOOGLE_SHEET_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
    redirect: "follow",
  });

  const resultText = await googleRes.text();
  console.log("Google Response:", resultText);

  if (!resultText.includes("success")) {
    throw new CustomError("חלה שגיאה בסנכרון הנתונים", 500, "GOOGLE_ERROR");
  }
  // await Promise.all([
  //   fetch(GOOGLE_SHEET_URL, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ name, email, message }),
  //     redirect: "follow",
  //   }).then(async (res) => {
  //     if (!res.ok) console.error("Google Sheets Sync Failed");
  //   }),
  // fetch("https://api.emailjs.com/api/v1.0/email/send", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     service_id: EMAILJS_SERVICE_ID,
  //     template_id: EMAILJS_TEMPLATE_ID,
  //     user_id: EMAILJS_PUBLIC_KEY,
  //     accessToken: EMAILJS_PRIVATE_KEY,
  //     template_params: { from_name: name, from_email: email, message },
  //   }),
  // }).then(async (res) => {
  //   if (!res.ok) throw new Error(await res.text());
  // }),
  // ]).catch((error) => {
  //   throw new CustomError(error.message, 500, "CONTACT_SERVICE");
  // });
};
