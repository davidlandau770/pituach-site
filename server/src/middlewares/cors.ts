import cors, { CorsOptionsDelegate } from "cors";
import { CORS_WHITE_LIST } from "../helpers/environments";

const corsOptions: CorsOptionsDelegate = (req, cb) => {
  if (!CORS_WHITE_LIST) {
    console.log("no env with CORS_WHITE_LIST", 500, "CORS ERROR");

    return cb(null, {
      origin: false,
      credentials: false,
    });
  }

  const API = req.headers.origin;
  const URLS: string[] = JSON.parse(CORS_WHITE_LIST);

  const isExists = !!URLS.find((api) => api === API);

  if (!isExists) {
    console.log(`the api:${API} is an unauthorized API`, 403, "CORS ERROR");

    return cb(null, {
      origin: false,
      credentials: false,
    });
  }

  return cb(null, {
    origin: true,
    credentials: true,
  });
};

export default cors(corsOptions);
