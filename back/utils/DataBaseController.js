import { cwd } from "process";
import path from "path";
import fs from "fs";

// Função para pegar dados de uma base de dados em arquivo
// Recebe como parâmetro um nome de um arquivo .json, como 'hello.json' por exemplo (sem '/')
// Retorna um objeto JS com as informações no arquivo
export const getDataBase = (file) => {
  const curDir = cwd();
  const dataBaseDir = path.join(curDir, "database", file);

  const data = JSON.parse(fs.readFileSync(dataBaseDir, { encoding: "utf-8" }));

  return data;
};

// Função para sobrescrever uma base de dados de arquivo
// Recebe como parâmetro um nome de um arquivo .json, como 'hello.json' por exemplo (sem '/')
// E um objeto JS que irá ser escrito no arquivo.
// Sobrescreve toda a informação no arquivo com o objeto passado.
export const setDataBase = (file, data) => {
  const curDir = cwd();
  const dataBaseDir = path.join(curDir, "database", file);

  const dataBase = JSON.stringify(data, null, 2);

  fs.writeFileSync(dataBaseDir, dataBase);
};
