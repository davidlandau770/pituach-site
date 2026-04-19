import express, { Request, Response } from "express";
import demoRouts from "../demo/routes/demo.routes";

const router = express.Router();
router.use("/demo", demoRouts);
router.use("/", (_: Request, res: Response) => {
  res.status(404).send("לא נמצא נקודת הקצה");
});

export default router;
