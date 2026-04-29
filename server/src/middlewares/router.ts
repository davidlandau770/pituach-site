import express from "express";
import contactRoutes from "../contact/routes/contact.routes";

const router = express.Router();

router.use((req, _, next) => {
  console.log(req.method);
  console.log("router");
  next();
});
router.use("/api/contact", contactRoutes);

export default router;
