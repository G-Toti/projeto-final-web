"use client";

import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ListaMusicas } from "../components/lista-musicas";

const Page = () => {
  return (
    <main className="bg-gray-100 font-montserrat">
      <Header />
      <div>
        <ListaMusicas />
      </div>
      <Footer />
    </main>
  );
};

export default Page;
