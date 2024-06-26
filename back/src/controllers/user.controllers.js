import { getDataBase, setDataBase } from "../../utils/DataBaseController.js";
import bcrypt from "bcrypt";
import getToken from "../../utils/jwt.js";

export const createUser = async (req, res) => {
  const { nome, email, senha } = req.body;

  const errors400 = [];

  if (typeof nome !== "string") errors400.push("Nome deve ser uma string.");
  if (typeof email !== "string") errors400.push("Email deve ser uma string.");
  if (typeof senha !== "string") errors400.push("Senha deve ser uma string.");

  const dataBase = getDataBase("usuarios.json");

  const filteredDataBase = dataBase.filter((user) => user.email === email);

  if (filteredDataBase.length > 0) {
    errors400.push(
      "Esse email não pode ser utilizado, pois já foi cadastrado. Tente um outro email."
    );
  }

  const id = dataBase.length;

  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(senha, salt);

  if (errors400.length > 0) {
    return res.status(400).json({
      mensagem: errors400,
    });
  }

  const newUser = {
    id: id,
    nome: nome,
    email: email,
    senha: encryptedPassword,
    foto: "",
    avaliacoes: [],
  };

  dataBase.push(newUser);

  setDataBase("usuarios.json", dataBase);

  const token = getToken({
    email,
    encryptedPassword,
  });

  res.status(201).json({
    mensagem: ["Usuário criado com sucesso"],
    token: token,
  });
};

export const login = (req, res) => {};
