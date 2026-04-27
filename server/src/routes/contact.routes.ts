import express, { Request, Response } from "express";
import { handleContactSubmission } from "../controllers/contact.controller";

const router = express.Router();

router.post("/contact", handleContactSubmission);

export default router;
