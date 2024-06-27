import { Router } from "express";
import {
  createAvaliacao,
  deleteAvaliacao,
  readAvaliacoesMusic,
  readAvaliacoesUser,
  updateAvaliacao,
} from "../controllers/avaliacoes.controllers.js";

const router = Router();

router.post("/create", createAvaliacao);
router.get("/music/:musica_id", readAvaliacoesMusic);
router.get("/user/:usuario_id", readAvaliacoesUser);
router.put("/:id", updateAvaliacao);
router.delete("/:id", deleteAvaliacao);

export default router;
