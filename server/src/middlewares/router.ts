import express from "express";
import demoRouts from "../demo/routes/demo.routes";
import contactRoutes from "../contact/routes/contact.routes";

const router = express.Router();
router.use("/demo", demoRouts);
router.use("/api/contact", contactRoutes);

export default router;
