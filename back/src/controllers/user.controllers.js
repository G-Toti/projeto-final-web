import { getDataBase, setDataBase } from "../../utils/DataBaseController.js";
import bcrypt from "bcrypt";
import getToken from "../../utils/jwt.js";

export const createUser = async (req, res) => {
  const { nome, email, senha } = req.body; // Pega as informações do corpo da requisição

  const errors400 = []; // lista de erros 400 (BadRequest)

  if (typeof nome !== "string") errors400.push("Nome deve ser uma string.");
  if (typeof email !== "string") errors400.push("Email deve ser uma string.");
  if (typeof senha !== "string") errors400.push("Senha deve ser uma string.");

  // verifica se houveram erros na forma de enviar a requisição
  if (errors400.length > 0) {
    return res.status(400).json({
      mensagem: errors400,
    });
  }

  const dataBase = getDataBase("usuarios.json"); // busca tudo no arquivo de usuarios

  // busca por um usuario com o mesmo email
  for (let user of dataBase) {
    if (user.email === email) {
      return res.status(409).json({
        mensagem: ["Email já existe na base de dados. Tente outro email."],
      });
    }
  }

  // gera o id
  const id = dataBase[dataBase.length - 1].id + 1;

  // encripta a senha
  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(senha, salt);

  // gera o novo usuario
  const newUser = {
    id: id,
    nome: nome,
    email: email,
    senha: encryptedPassword,
    foto: "",
    avaliacoes: [],
  };

  dataBase.push(newUser); // adiciona ele a lista de usuarios

  setDataBase("usuarios.json", dataBase); // sobrescreve o banco de dados

  // gera o token
  const token = getToken({
    id,
    email,
  });

  // devolve o token
  res.status(201).json({
    mensagem: ["Usuário criado com sucesso"],
    token: token,
  });
};

export const login = async (req, res) => {
  const { email, senha } = req.body;

  const errors400 = []; // lista de erros 400 (BadRequest)

  if (typeof email !== "string") errors400.push("Email deve ser uma string.");
  if (typeof senha !== "string") errors400.push("Senha deve ser uma string.");

  // verifica se houveram erros na forma de enviar a requisição
  if (errors400.length > 0) {
    return res.status(400).json({
      mensagem: errors400,
    });
  }

  const dataBase = getDataBase("usuarios.json");

  // busca por um usuário com um email compativel
  let user;

  for (let curUser of dataBase) {
    if (curUser.email === email) {
      user = curUser; // se for compativel, da um valor para o user e para o loop
      break;
    }
  }

  // se não encontrou um usuario com email compativel ou se a senha está incorreta, retorna um erro
  if (user === undefined) {
    return res.status(409).json({
      mensagem: ["Email não existe na base de dados"],
    });
  }

  if (!(await bcrypt.compare(senha, user.senha))) {
    return res.status(422).json({
      mensagem: ["Email ou senha incorretos"],
    });
  }

  const token = getToken({
    id: user.id,
    email,
  });

  // devolve o token
  return res.status(200).json({
    mensagem: ["Usuário logado com sucesso"],
    token: token,
  });
};

export const updateUser = async (req, res) => {
  const { nome, email, senha } = req.body;
  const { id } = req.params;

  const errors400 = []; // lista de erros 400 (BadRequest)

  if (nome && typeof nome !== "string")
    errors400.push("Nome deve ser uma string.");
  if (email && typeof email !== "string")
    errors400.push("Email deve ser uma string.");
  if (senha && typeof senha !== "string")
    errors400.push("Senha deve ser uma string.");

  // verifica se houveram erros na forma de enviar a requisição
  if (errors400.length > 0) {
    return res.status(400).json({
      mensagem: errors400,
    });
  }

  const usersDB = getDataBase("usuarios.json");

  // busca por um usuario com o mesmo email
  for (let user of usersDB) {
    if (user.email === email) {
      return res.status(409).json({
        mensagem: ["Email já existe na base de dados. Tente outro email."],
      });
    }
  }

  // usuario que está fazendo a atualização e sua posição na base de dados
  let targetUser;
  let targetPosition = usersDB.length;

  // busca pelo usuário que vai fazer a atualização no banco de dados
  for (let i = 0; i < usersDB.length; i++) {
    let element = usersDB[i];
    if (element.id === Number(id)) {
      targetUser = element;
      targetPosition = i;
      break;
    }
  }

  // O usuário não está no banco de dados
  if (!targetUser) {
    res.status(404).json({
      mensagem: ["Usuário não identificado."],
    });
  }

  // O usuário está tentando acessar uma informação que pertence a outro usuário
  if (targetUser.id !== req.user.id) {
    return res.status(403).json({
      mensagem: [
        "O usuário está tentando acessar uma informação que não o pertence",
      ],
    });
  }

  const updatedUser = {
    ...targetUser,
    ...(nome && { nome: nome }),
    ...(email && { email: email }),
    ...(senha && { senha: await bcrypt.hash(senha, await bcrypt.genSalt(10)) }),
    ...(req.file.path && { foto: req.file.path }),
  };

  usersDB[targetPosition] = updatedUser;

  setDataBase("usuarios.json", usersDB);

  res.status(200).json({
    mensagem: ["Usuario atualizado com sucesso"],
  });
};
