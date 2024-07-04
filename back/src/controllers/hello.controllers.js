import { getDataBase, setDataBase } from "../../utils/DataBaseController.js";

export const SayHello = (req, res) => {
  //res.send("Hello, World!");

  console.log(req.user);

  const data = getDataBase("hello.json");

  res.send(data.message);

  const newData = {
    message: "Eu fui sobrescrito",
  };

  setDataBase("hello.json", newData);
};
