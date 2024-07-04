import { Router } from "express";
import {
  createAvaliacao,
  deleteAvaliacao,
  readAvaliacoesMusic,
  readAvaliacoesUser,
  updateAvaliacao,
  readAvaliacoesId,
} from "../controllers/avaliacoes.controllers.js";

const router = Router();

router.post("/create", createAvaliacao);
router.get("/music/:musica_id", readAvaliacoesMusic);
router.get("/user/:usuario_id", readAvaliacoesUser);
router.get("/id/:id", readAvaliacoesId);
router.put("/:id", updateAvaliacao);
router.delete("/:id", deleteAvaliacao);

export default router;
