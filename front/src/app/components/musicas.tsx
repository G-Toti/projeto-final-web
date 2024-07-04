import React from "react";

export const Música = () => {
  return (
    <section className="bg-orange-700 text-gray-100 pt-20 text-md">
      <div className="flex flex-col p-20 gap-2">
        <div className="flex justify-start">
          <a
            className="hover:bg-black px-2 py-1 bg-orange-500 rounded font-bold transition hover:scale-110"
            href="#meuperfil"
          >
            Voltar
          </a>
        </div>
        <div className="flex justify-center">
          <div className="w-1/4 p-4">
            <img
              src="https://ik.imagekit.io/crtc/img/HGBC.png?updatedAt=1719427420532"
              alt="FOTO DA MÚSICA"
            />
          </div>
          <div className="w-1/4 flex flex-col justify-center gap-2 p-4">
            <p className="font-bold">Nome da Música</p>
            <p>Nome do Artista</p>
            <p>Ano de Publicação</p>
            <p>Média Avaliações</p>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col gap-2 p-20 pt-10 pb-10">
        <div className="bg-black p-4 rounded">
          <p className="font-bold">Nome Usuário</p>
          <p>Estrelinhas</p>
          <p>Comentário</p>
        </div>
        <div className="bg-gray-900 p-4 rounded">
          <p className="font-bold">Nome Usuário</p>
          <p>Estrelinhas</p>
          <p>Comentário</p>
        </div>
      </div>
    </section>
  );
};
