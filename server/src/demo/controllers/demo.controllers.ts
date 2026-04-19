import { Request, Response } from "express";
import { handleError, CustomError } from "../../utils/handleError";
import { getAllDemoService } from "../services/demo.service";

export const getAllDemoController = async (_: Request, res: Response) => {
  try {
    const demo = await getAllDemoService();
    res.send(demo);
  } catch (error) {
    handleError(res, error);
  }
};

// export const testErrorController = async (_: Request, res: Response) => {
//   try {
//     throw new CustomError("השגיאה שלי", 403, "NO PERMISSION");
//   } catch (error) {
//     handleError(res, error);
//   }
// };
