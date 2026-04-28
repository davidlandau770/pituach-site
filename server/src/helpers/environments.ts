import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || "9000";
export const CORS_WHITE_LIST = process.env.CORS_WHITE_LIST;

// postgres
export const POSTGRES_CONNECTION = process.env.POSTGRES_CONNECTION;
export const SCHEMA = process.env.SCHEMA;

// emailjs
export const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID || "";
export const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID || "";
export const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY || "";
export const EMAILJS_PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY || "";

export const GOOGLE_SHEET_URL = process.env.GOOGLE_SHEET_URL || "";
