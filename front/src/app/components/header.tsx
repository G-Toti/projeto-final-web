import React from "react";

export const Header = () => {
  return (
    <header className="bg-black text-gray-100 p-4 sm:text-sm lg:text-xl drop-shadow-lg fixed w-full z-10">
      <div className="lg:ml-44 lg:mr-44 ">
        <div className="flex justify-between">
          <div>
            <img
              className="max-h-12"
              src=".\img\HGBC.png"
              alt="Logotipo HGBC"
            />
          </div>
          <div className="max-h-12 flex flex-wrap items-center">
            <nav>
              <a className="hover:text-gray-400" href="#login">
                Fazer login
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
