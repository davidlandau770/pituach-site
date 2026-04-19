import express from "express";
import cors from "./middlewares/cors";
import router from "./middlewares/router";
import handleError from "./middlewares/handleServerError";
import { createTables, insertTables } from "./helpers/postgres/createTables";
import { PORT } from "./helpers/environments";

const app = express();

app.use(cors);
app.use(express.json());
app.use(router);
app.use(express.static("./public"));

createTables()
  .then(() => insertTables())
  .then(() =>
    app.listen(PORT, () => {
      console.log("INITIAL SERVER", `server run on port ${PORT}`, "blueBright");
      console.log(
        "CONNECT TO PG",
        `Connected successfully to postgres DB`,
        "magentaBright",
      );
    }),
  )
  .catch((error) => {
    console.log(
      "DB CONNECTION ERROR",
      `could not connect to the postgres DB:${error.message} `,
      "redBright",
    );
  });

app.use(handleError);
