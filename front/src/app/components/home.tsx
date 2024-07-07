import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const Home = () => {
  const pathName = usePathname();
  const [token, setToken] = useState<string | null | undefined>("");
  const [userId, setUserId] = useState<string | null | undefined>();
  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
    setUserId(sessionStorage.getItem("user_id"));
  }, [pathName]);
  return (
    <section id="home" className="pt-20 text-gray-100 text-md">
      <div className="flex flex-col justify-center items-center ">
        <img
          className="opacity-100"
          src=".\img\equalizador2.jpg"
          alt="Fundo pixelizado em diversas cores formando colunas."
        />
        <div className="flex flex-col gap-5 absolute p-4">
          <div className="flex flex-col gap-5">
            <h1 className="flex justify-start font-bold text-2xl">
              Conheça as músicas do momento!
            </h1>
            <p>
              Ouça suas músicas favoritas, avalie-as, amplie seu repertório
              musical! Faça parte da comunidade HGBC Music!
            </p>
          </div>
          <div className="flex justify-start">
            {!token ? (
              <Link legacyBehavior href="/login">
                <a
                  href="/login"
                  className="flex justify-center bg-orange-500 px-4 py-1 rounded text-gray-100 hover:bg-orange-700 font-bold text-md transition hover:scale-110"
                >
                  Explorar
                </a>
              </Link>
            ) : (
              <Link legacyBehavior href={`/user/${userId}`}>
                <a
                  href={`/user/${userId}`}
                  className="flex justify-center bg-orange-500 px-4 py-1 rounded text-gray-100 hover:bg-orange-700 font-bold text-md transition hover:scale-110"
                >
                  Explorar
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
