import { Router } from "express";
import {
  createUser,
  login,
  updateUser,
} from "../controllers/user.controllers.js";
import multer from "multer";
import path from "path";

import { authBaseUser } from "../middlewares/auth.middlewares.js";

const router = Router();

// cria um objeto para definir onde e com que nome o arquivo das fotos será armazenado localmente
const storage = multer.diskStorage({
  destination: function (_, __, cb) {
    // função para definir o local do arquivo
    cb(null, "./public");
  },
  filename: function (res, file, cb) {
    // função para definir o nome do arquivo
    const fileName = `user_${res.user.id}_${Date.now()}${path.extname(
      file.originalname
    )}`;
    cb(null, fileName);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, _, cb) {
    const { id } = req.params;

    if (req.user.id !== Number(id)) return cb(null, false);

    return cb(null, true);
  },
}); // cria um objeto que gerencia o upload. No middleware, vai armazenar, gerar o caminho e passar as informações do arquivo pro req

router.post("/create", createUser); // Cria rota de criar usuario
router.post("/login", login); // Cria rota de login
router.put("/:id", authBaseUser, upload.single("foto"), updateUser);

export default router;
