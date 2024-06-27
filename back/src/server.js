import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";

import helloRouter from "./routes/hello.routes.js";
import userRouter from "./routes/user.routes.js";
import ratingRouter from "./routes/avaliacoes.routes.js";
import authBaseUser from "./middlewares/auth.middlewares.js";

config();

const port = process.env.SERVER_PORT ?? 3001;
const app = express();

app.use(cors());
app.use(json());

app.use("/hello", helloRouter);
app.use("/user", userRouter); // Utiliza as rotas do user router
app.use("/rating", authBaseUser, ratingRouter);

app.listen(port, () => {
  console.log(
    `Servidor rodando em http://${
      process.env.SERVER_HOST ?? "localhost"
    }:${port}`
  );
});
