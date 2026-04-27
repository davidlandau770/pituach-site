import { Request, Response } from "express";

export const handleContactSubmission = async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "כל השדות נדרשים" });
    }

    // Here you could save to database or send email
    // For now, just log it
    console.log("Contact form submission:", { name, email, message });

    res.status(200).json({ message: "ההודעה נשלחה בהצלחה" });
  } catch (error) {
    console.error("Error handling contact submission:", error);
    res.status(500).json({ error: "שגיאה פנימית בשרת" });
  }
};
