import { Pool } from "pg";
import { POSTGRES_CONNECTION } from "../environments";

export const pg = new Pool({
  connectionString: POSTGRES_CONNECTION,
  ssl: false,
  idle_in_transaction_session_timeout: 10_000,
  idleTimeoutMillis: 0,
  connectionTimeoutMillis: 0,
});
