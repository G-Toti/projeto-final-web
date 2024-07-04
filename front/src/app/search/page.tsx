//"use client";
import React from "react";
import { Search } from "@/app/components/search/search";

const Page = ({
    params,
    searchParams,
  }: {
    params: { slug: string }
    searchParams: { [key: string]: string}
  }) => {
  const query = searchParams.q || " ";
  return (
    <main className="bg-gray-100 font-montserrat">
      <Search query={query} />
    </main>
  );
};

export default Page;
