import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-black text-gray-100 p-4 text-md drop-shadow-lg fixed w-full z-10">
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
              <Link legacyBehavior href="/login">
                <a className="hover:text-gray-400">Fazer login</a>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
