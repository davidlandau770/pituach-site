import express from "express";
import path from "path";
import cors from "./middlewares/cors";
import router from "./middlewares/router";
import handleError from "./middlewares/handleServerError";
import { PORT } from "./helpers/environments";

const app = express();

app.use(cors);
app.use(express.json());
app.use(router);
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});
app.use(handleError);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
