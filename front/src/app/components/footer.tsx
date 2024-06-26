import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-100 p-4 text-sm sm:text-base lg:text-lg">
      <div className="flex lg:justify-center lg:flex-row lg:space-x-6 lg:ml-44 lg:mr-44">
        <nav>
          <ul>
            <li className="lg:flex lg:flex-col lg:space-x-0">
              <a
                className="hover:text-gray-400"
                href="https://github.com/G-Toti/projeto-final-web.git"
              >
                Desenvolvido por HGBC Music
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
