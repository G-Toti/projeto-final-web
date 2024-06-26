import React from "react";

export const Home = () => {
  return (
    <section id="home" className="pt-20">
      <div className="flex flex-col justify-center items-center  text-gray-100">
        <img
          className="opacity-100"
          src=".\img\equalizador2.jpg"
          alt="ESCOLHER LEGENDA"
        />
        <div className="flex flex-col gap-5 absolute">
          <div>
            <h1 className="flex justify-start font-bold text-2xl">
              Conheça as músicas do momento!
            </h1>
            <p className="font-bold">
              Ouça suas músicas favoritas, avalie-as e amplie seu repertório
              musical! Faça parte da comunidade HGBC Music!
            </p>
          </div>
          <div className="flex justify-start">
            <a
              href="#login"
              className="flex justify-center bg-orange-500 px-4 py-1 rounded-full text-gray-100 hover:bg-orange-700 font-bold text-md transition hover:scale-110"
            >
              Explorar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
