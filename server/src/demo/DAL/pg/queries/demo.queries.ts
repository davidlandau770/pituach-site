import { SCHEMA } from "../../../../helpers/environments";
import { DEMO_TABLE } from "../tables/demo.table";

export const SELECT_ALL_DEMO_QUERY = `
SELECT * FROM ${SCHEMA}.${DEMO_TABLE}
`;
