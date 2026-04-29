import { GOOGLE_SHEET_URL } from "../../helpers/environments";
import { CustomError } from "../../utils/handleError";

export const sendContactEmailService = async (
  name: string,
  email: string,
  message: string,
): Promise<void> => {
  console.log({ message });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new CustomError("כתובת אימייל לא תקינה", 400, "VALIDATION");
  }

  if (message.length < 5) {
    throw new CustomError("ההודעה קצרה מדי", 400, "VALIDATION");
  }

  const res = await fetch(GOOGLE_SHEET_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
    redirect: "follow",
  });
  console.log({ name });

  const text = await res.text();
  if (!text.includes("success")) {
    throw new CustomError("חלה שגיאה בסנכרון הנתונים", 500, "GOOGLE_ERROR");
  }
};
