import express from "express";
import cors from "cors";
import { config } from "dotenv";

import helloRouter from "./routes/hello.routes.js";

config();

const port = process.env.SERVER_PORT ?? 3001;
const app = express();

app.use(cors());

app.use("/hello", helloRouter);

app.listen(port, () => {
  console.log(
    `Servidor rodando em http://${
      process.env.SERVER_HOST ?? "localhost"
    }:${port}`
  );
});
