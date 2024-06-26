import React from "react";

export const Home = () => {
  return (
    <section id="home" className="pt-24">
      <div className="flex flex-col justify-center items-center">
        <img
          className="opacity-50"
          src="./img/fundo_home.jpg"
          alt="ESCOLHER LEGENDA"
        />
        <div className="flex flex-col gap-5 absolute">
          <h1 className="flex justify-center font-bold text-2xl">BEM-VINDO!</h1>
          <div className="flex justify-center">
            <a
              href="#login"
              className="flex justify-center bg-orange-500 px-4 py-2 rounded-full text-gray-100 hover:bg-orange-700 font-bold text-md transition hover:scale-110"
            >
              ENTRAR
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
