//"use client";
import React from "react";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { Search } from "@/app/components/search/search";

const Page = ({
    params,
    searchParams,
  }: {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }) => {
  return (
    <main className="bg-gray-100 font-montserrat">
      <div>
        <Header />
      </div>
      <Search query={searchParams.q} />
      <Footer />
    </main>
  );
};

export default Page;
