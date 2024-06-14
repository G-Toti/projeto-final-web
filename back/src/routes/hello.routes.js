import { Router } from "express";
import { SayHello } from "../controllers/hello.controllers.js";

const router = Router();

router.get("/", SayHello);

export default router;
