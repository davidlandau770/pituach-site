import express from "express";
import contactRoutes from "../contact/routes/contact.routes";

const router = express.Router();

router.use("/api/contact", contactRoutes);

export default router;
