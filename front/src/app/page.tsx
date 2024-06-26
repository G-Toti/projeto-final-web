"use client";

import { Header } from "./components/header";
import { Home } from "./components/home";
import { Footer } from "./components/footer";

const page = () => {
  return (
    <main className="bg-gray-100 font-montserrat">
      <Header />
      <div>
        <Home />
      </div>
      <Footer />
    </main>
  );
};

export default page;
