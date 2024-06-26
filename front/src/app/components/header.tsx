import React from "react";

export const Header = () => {
  return (
    <header className="bg-black h-24 p-4 text-gray-100 font-bold drop-shadow-lg text-sm sm:text-base lg:text-xl fixed w-full z-10">
      <div className="lg:ml-44 lg:mr-44 ">
        <div className="flex justify-between">
          <div>
            <img
              className="max-h-16"
              src="./img/HGBC.png"
              alt="Logotipo HGBC"
            />
          </div>
          <div className="max-h-16 flex flex-wrap items-center">
            <nav>
              <ul>
                <li className="space-x-2">
                  <a className="hover:text-gray-400" href="#busca">
                    Lupa
                  </a>
                  <a className="hover:text-gray-400" href="#login">
                    Login
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
