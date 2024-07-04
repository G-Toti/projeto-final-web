//"use client";
import React from "react";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { Dados } from "@/app/components/user-page/data";
import { ReviewList } from "@/app/components/user-page/review-list";

const Page = ({params} : {params:any}) => {
  return (
    <main className="bg-gray-100 font-montserrat">
      <div>
        <Header />
      </div>
      <Dados  />
      <ReviewList user={params.id} />
      <Footer />
    </main>
  );
};

export default Page;
