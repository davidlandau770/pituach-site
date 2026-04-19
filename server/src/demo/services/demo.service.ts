import { getAllDemoFromDAL } from "../DAL/demo.dal";

export const getAllDemoService = async () => {
  try {
    const demos = await getAllDemoFromDAL();
    return demos;
  } catch (error) {
    return Promise.reject(error);
  }
};
