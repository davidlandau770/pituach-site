import express, { Request, Response } from "express";
import demoRouts from "../demo/routes/demo.routes";
import contactRoutes from "../routes/contact.routes";

const router = express.Router();
router.use("/demo", demoRouts);
router.use("/api", contactRoutes);

export default router;
