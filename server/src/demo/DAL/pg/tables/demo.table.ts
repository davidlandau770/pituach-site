import { SCHEMA } from "../../../../helpers/environments";
import { DEMO_MOKE } from "../../../data/demo";

export const DEMO_TABLE = "demo_table";

export const CREATE_DEMO_TABLE = `
CREATE TABLE IF NOT EXISTS ${SCHEMA}.${DEMO_TABLE} (
    id INT,
    demo_name VARCHAR
);
`;

const seedValues = DEMO_MOKE.map(({ id, username, password }) => {
  return `(
      '${id}',
      '${username}',
      '${password}',
    )`;
}).join(", ");

export const SEED_DEMO_TABLE = `
    INSERT INTO ${SCHEMA}.${DEMO_TABLE}
        (id, username, password)
    VALUES ${seedValues}
    ON CONFLICT (id) DO NOTHING;
`;
