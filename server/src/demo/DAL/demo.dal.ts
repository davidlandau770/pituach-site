import queryToPostgres from "../../helpers/postgres/queryToPostgres";
import { SELECT_ALL_DEMO_QUERY } from "./pg/queries/demo.queries";

export const getAllDemoFromDAL = async () => {
  try {
    const demos = queryToPostgres(SELECT_ALL_DEMO_QUERY);
    return demos;
  } catch (error) {
    return Promise.reject(error);
  }
};
