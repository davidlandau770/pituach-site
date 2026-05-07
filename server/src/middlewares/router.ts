import express from "express";
import contactRoutes from "../contact/routes/contact.routes";

const router = express.Router();

router.use("/api/contact", contactRoutes);

router.get("/api/ping", (_req, res) => {
  res.json([{ q: "אני חי?", a: "כן!!!" }]);
});

export default router;
