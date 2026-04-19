import { pg } from "./connectToPostgres";

const queryToPostgres = async <T>(
  query: string,
  params: any[] = [],
): Promise<T[]> => {
  try {
    const { rows: data } = await pg.query(query, params);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default queryToPostgres;
