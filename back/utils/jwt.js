import jwt from "jsonwebtoken";

export default function getToken(object) {
  return jwt.sign(object, process.env.AUTH_SECRET, {
    expiresIn: "1800s",
  });
}
