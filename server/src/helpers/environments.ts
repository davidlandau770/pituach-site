import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || "9000";
export const CORS_WHITE_LIST = process.env.CORS_WHITE_LIST;

// postgres
export const POSTGRES_CONNECTION = process.env.POSTGRES_CONNECTION;
export const SCHEMA = process.env.SCHEMA;
