import { AxiosError } from "axios";

export const getErrorMessage = <T>(error: T): string => {
  if (
    error instanceof AxiosError ||
    (error instanceof Error && error.message === "Network Error")
  )
    return "Server connection error!";
  if (
    error instanceof AxiosError &&
    error.response &&
    error.response.data.message
  )
    return error.response.data.message;
  if (error instanceof Error) return error.message;
  return "Oops... Something went wrong";
};
