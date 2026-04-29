import express from "express";
import cors from "./middlewares/cors";
import router from "./middlewares/router";
import handleError from "./middlewares/handleServerError";
import { PORT } from "./helpers/environments";

const app = express();

app.use((req, _, next) => {
  console.log("1", req.url);
  next();
});
app.use(cors);
app.use((req, _, next) => {
  console.log("2");
  next();
});
app.use(express.json());
app.use(router);
app.use(handleError);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
