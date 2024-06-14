import { cwd } from "process";
import path from "path";
import fs from "fs";

// Função para pegar dados de uma base de dados em arquivo

export const getDataBase = (file) => {
  const curDir = cwd();
  const dataBaseDir = path.join(curDir, "database", file);

  const data = JSON.parse(fs.readFileSync(dataBaseDir, { encoding: "utf-8" }));

  return data;
};

// função para sobrescrever uma base de dados

export const setDataBase = (file, data) => {
  const curDir = cwd();
  const dataBaseDir = path.join(curDir, "database", file);

  const dataBase = JSON.stringify(data, null, 2);

  fs.writeFileSync(dataBaseDir, dataBase);
};
