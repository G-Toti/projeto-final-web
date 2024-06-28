import { getDataBase, setDataBase } from "../../utils/DataBaseController.js";

export const createAvaliacao = (req, res) => {
  const { titulo, corpo, nota, musica_id, usuario_id } = req.body;

  // lida com erros no formato da requisição
  const erros400 = [];

  if (typeof titulo !== "string") erros400.push("Titulo deve ser uma string");
  if (typeof corpo !== "string") erros400.push("Corpo deve ser uma string");
  if (typeof nota !== "number") erros400.push("Nota deve ser um number");
  if (typeof musica_id !== "string")
    erros400.push("Musica_id deve ser uma string");
  if (typeof usuario_id !== "number")
    erros400.push("Usuario_id deve ser um number");

  if (erros400.length > 0)
    res.status(400).json({
      mensagem: erros400,
    });

  const avaliacoesDB = getDataBase("avaliacoes.json");
  const usersDB = getDataBase("usuarios.json");

  // usuario que está fazendo a avaliação e sua posição na base de dados
  let targetUser;
  let targetPosition = usersDB.length;

  // busca pelo usuário que vai fazer a avaliação no banco de dados
  for (let i = 0; i < usersDB.length; i++) {
    let element = usersDB[i];
    if (element.id === usuario_id) {
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

  // a avaliação não pode ser feita duas vezes, se quiser modificar, tem que usar a rota de edição

  if (
    avaliacoesDB.find(
      (element) =>
        element.musica_id === musica_id && element.usuario_id === usuario_id
    )
  ) {
    return res.status(409).json({
      mensagem: [
        "Essa musica já foi avaliada por esse usuário. Utilize a rota de edição.",
      ],
    });
  }

  //   usersDB = usersDB.filter((user) => user.id === targetUser.id);

  const id = avaliacoesDB[avaliacoesDB.length - 1].id + 1; // gera o id da avaliação

  // gera a avaliação
  const newAvaliacao = {
    id,
    titulo,
    corpo,
    nota,
    musica_id,
    usuario_id,
  };

  targetUser.avaliacoes.push(id); // adiciona a avaliação à lista de avaliações do usuário

  //   usersDB.splice(targetPosition, 0, targetUser);

  usersDB[targetPosition] = targetUser; // atualiza o usuario no banco de dados

  avaliacoesDB.push(newAvaliacao); // adiciona a avaliação no banco de dados

  // atualiza os bancos de dados
  setDataBase("avaliacoes.json", avaliacoesDB);
  setDataBase("usuarios.json", usersDB);

  res.status(201).json({
    mensagem: ["Avaliação criada com sucesso"],
  });
};

export const readAvaliacoesMusic = (req, res) => {
  const { musica_id } = req.params;

  const dataBase = getDataBase("avaliacoes.json");

  const reviews = dataBase.filter((element) => element.musica_id === musica_id);

  if (reviews.length === 0) {
    return res.status(404).json({
      mensagem: ["Nenhuma avaliação encontrada para a música especificada"],
      data: [],
    });
  }

  res.status(200).json({
    mensagem: ["Avaliações encontadas com sucesso."],
    data: reviews,
  });
};

export const readAvaliacoesUser = (req, res) => {
  const { usuario_id } = req.params;

  const reviews = getDataBase("avaliacoes.json");

  const targetReviews = reviews.filter(
    (element) => element.usuario_id === Number(usuario_id)
  );

  if (targetReviews.length === 0) {
    return res.status(404).json({
      mensagem: ["Nenhuma avaliação encontrada."],
      data: [],
    });
  }

  res.status(200).json({
    mensagem: ["Avaliações encontradas com sucesso."],
    data: targetReviews,
  });
};

export const updateAvaliacao = (req, res) => {};

export const deleteAvaliacao = (req, res) => {};
