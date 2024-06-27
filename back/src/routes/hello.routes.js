import { Router } from "express";
import { SayHello } from "../controllers/hello.controllers.js";
import authBaseUser from "../middlewares/auth.middlewares.js";

const router = Router();

router.get("/", authBaseUser, SayHello);

export default router;
