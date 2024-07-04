"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

export const Header = () => {
  const [token, setToken] = useState<string | null>("");

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, []);

  return (
    <header className="bg-black text-gray-100 p-4 sm:text-sm lg:text-xl drop-shadow-lg fixed w-full z-10">
      <div className="lg:ml-44 lg:mr-44 ">
        <div className="flex justify-between">
          <div>
            <img className="max-h-12" src="/img/HGBC.png" alt="Logotipo HGBC" />
          </div>
          <div className="max-h-12 flex flex-wrap items-center">
            <nav>
              {!token ? (
                <Link legacyBehavior href="/login">
                  <a className="hover:text-gray-400">Fazer login</a>
                </Link>
              ) : (
                <Link legacyBehavior href="/login">
                  <a className="hover:text-gray-400">Sair</a>
                </Link>
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
