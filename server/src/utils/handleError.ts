import { Response } from "express";

export class CustomError {
  status: number;
  message: string;
  tag: string;
  name: string;
  constructor(message: string, status: number, tag: string, name?: string) {
    this.message = message;
    this.status = status;
    this.tag = tag;
    this.name = name ?? message;
  }
}

export const handleError = (
  res: Response,
  error: CustomError | Error | any,
  status: number = 400,
  tag: string = "HTTP",
) => {
  if (error instanceof CustomError) {
    console.log(error.tag, error.message, "redBright");
    res.status(error.status).send({ message: error.message });
  } else {
    console.log(tag, error.message, "redBright");
    res.status(status).send({ message: error.message });
  }
};
