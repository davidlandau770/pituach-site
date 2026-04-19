import { SCHEMA } from "../environments";
import queryToPostgres from "./queryToPostgres";
import {
  CREATE_DEMO_TABLE,
  SEED_DEMO_TABLE,
} from "../../demo/DAL/pg/tables/demo.table";

const CREATE_DEMO_SCHEMA = `CREATE SCHEMA IF NOT EXISTS ${SCHEMA};`;

export const createTables = async () => {
  try {
    // schemas
    await queryToPostgres(CREATE_DEMO_SCHEMA);
    // tables
    await queryToPostgres(CREATE_DEMO_TABLE);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const insertTables = async () => {
  try {
    await queryToPostgres(SEED_DEMO_TABLE);
  } catch (error) {
    return Promise.reject(error);
  }
};
