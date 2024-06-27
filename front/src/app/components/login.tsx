import React from "react";

export const Login = () => {
  return (
    <section className="bg-black text-gray-100 p-20 text-md">
      <div className="flex flex-row justify-center">
        <div className="flex justify-center flex-col p-20 w-2/4">
          <h1 className="text-2xl font-bold pb-2">Fazer Login</h1>
          <form className="flex flex-col justify-between gap-2 rounded">
            <label htmlFor="email">E-mail:</label>
            <input
              type="text"
              id="email"
              placeholder="Digite seu e-mail"
              className="rounded p-2 text-black"
            />
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              placeholder="Digite sua senha"
              className="rounded p-2 text-black"
            />
            <div className="flex flex-wrap pt-2 justify-end">
              <button className="bg-orange-500 font-bold rounded py-1 w-1/2 hover:bg-orange-700 transition hover:scale-110">
                Entrar
              </button>
            </div>
          </form>
          <div className="flex flex-row pt-2 gap-2">
            <p>Ainda não tem conta?</p>
            <a
              href="#cadastro"
              className=" text-orange-700 font-bold underline"
            >
              Cadastre-se
            </a>
          </div>
          <a href="#home" className="font-bold pt-2 underline">
            Voltar
          </a>
        </div>
        <div className="p-20 w-2/4">
          <img
            src=".\img\HGBC_Music.png"
            alt="Logotipo com as letras da HGBC Music"
            className=""
          />
        </div>
      </div>
    </section>
  );
};
