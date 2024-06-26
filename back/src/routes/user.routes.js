import { Router } from "express";
import { createUser, login } from "../controllers/user.controllers.js";

const router = Router();

router.post("/create", createUser); // Cria rota de criar usuario
router.post("/login", login); // Cria rota de login

export default router;
