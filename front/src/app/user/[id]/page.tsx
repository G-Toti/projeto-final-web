//"use client";
import React from "react";
import { Dados } from "@/app/components/user-page/data";
import { ReviewList } from "@/app/components/user-page/review-list";

const Page = ({ params }: any) => {
  return (
    <>
      <Dados user={params.id} />
      <ReviewList user={params.id} />
    </>
  );
};

export default Page;
