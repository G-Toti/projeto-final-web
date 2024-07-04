"use client";

import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ListaMusicas } from "../components/lista-musicas";
import { Dados } from "../components/dados-usuario";

const Page = () => {
  return (
    <main className="bg-gray-100 font-montserrat">
      <Header />
      <div>
        <Dados />
      </div>
      <Footer />
    </main>
  );
};

export default Page;
