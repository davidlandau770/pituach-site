import express from "express";
import { getAllDemoController } from "../controllers/demo.controllers";

const router = express.Router();

router.get("/", getAllDemoController);

export default router;
