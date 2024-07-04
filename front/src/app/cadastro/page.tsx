"use client";

import React from "react";
import { Cadastro } from "../components/cadastro";
import { Footer } from "../components/footer";

const Page = () => {
  return (
    <main className="bg-gray-100 font-montserrat">
      <div>
        <Cadastro />
      </div>
      <Footer />
    </main>
  );
};

export default Page;
