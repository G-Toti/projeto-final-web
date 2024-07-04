import jwt from "jsonwebtoken";
export function authBaseUser(req, res, next) {
  const auth = req.headers["authorization"];

  if (!auth) {
    return res.status(401).json({
      mensagem: [
        "Você precisa estar autenticado para acessar esse recurso. Nenhuma forma de autenticação encontrada.",
      ],
    });
  }

  const token = auth.split(" ")[1];

  if (!token) {
    return res.status(400).json({
      mensagem: ["Forma de authenticação inválida"],
    });
  }

  try {
    req.user = jwt.verify(token, process.env.AUTH_SECRET);
    next();
  } catch (error) {
    return res.status(403).json({
      mensagem: ["Token inválido."],
    });
  }
}
