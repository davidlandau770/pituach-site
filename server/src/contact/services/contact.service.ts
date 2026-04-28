import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
  EMAILJS_PRIVATE_KEY,
} from "../../helpers/environments";
import { CustomError } from "../../utils/handleError";

export const sendContactEmailService = async (
  name: string,
  email: string,
  message: string,
): Promise<void> => {
  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      accessToken: EMAILJS_PRIVATE_KEY,
      template_params: { from_name: name, from_email: email, message },
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new CustomError(text, 500, "EMAILJS");
  }
};
