"use client";
import { Header } from "./components/header";
import { Home } from "./components/home";
import { Footer } from "./components/footer";
import { Seção } from "./components/top5";

const page = () => {
  return (
    <main className="bg-gray-100 font-montserrat">
      <Header />
      <div>
        <Home />
        <Seção />
      </div>
      <Footer />
    </main>
  );
};

export default page;
