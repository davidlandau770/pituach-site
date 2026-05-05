import { GOOGLE_SHEET_URL } from "../../helpers/environments";
import { CustomError } from "../../utils/handleError";

interface GoogleSheetPayload {
  clientId: string;
  name: string;
  email: string;
  message: string;
  clientEmailSubject: string;
  clientEmailHtml: string;
}

export const sendContactEmailDAL = async (
  payload: GoogleSheetPayload,
): Promise<void> => {
  try {
    const res = await fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
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
  } catch (error) {
    // אם זו כבר שגיאה שלנו (CustomError), פשוט זרוק אותה הלאה
    if (error instanceof CustomError) throw error;

    // אם זו שגיאת רשת (למשל fetch failed), הפוך אותה ל-CustomError
    throw new CustomError("נכשלה ההתקשרות עם שרת גוגל", 503, "NETWORK_ERROR");
  }
};
