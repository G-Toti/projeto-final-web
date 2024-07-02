"use client";

import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Música } from "./components/musicas";

const page = () => {
  return (
    <main className="bg-gray-100 font-montserrat">
      <Header />
      <div>
        <Música />
      </div>
      <Footer />
    </main>
  );
};

export default page;
