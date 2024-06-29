import React from "react";
import { Header } from "../components/header";
import { Login } from "../components/login";
import { Footer } from "../components/footer";

const Page = () => {
  return (
    
    <main className="bg-gray-100 font-montserrat">
      <div>
        <Login />
      </div>
      <Footer />
    </main>
  );
};

export default Page;