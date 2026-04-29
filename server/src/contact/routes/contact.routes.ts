import express from "express";
import { sendContactController } from "../controllers/contact.controller";

const router = express.Router();

router.use((req, _, next) => {
  console.log("4");
  next();
});
router.post("/", sendContactController);

export default router;
