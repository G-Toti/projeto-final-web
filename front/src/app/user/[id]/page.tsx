//"use client";
import React from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Dados } from "../../components/user-page/data";
import { ReviewList } from "../../components/user-page/review-list";

const Page = ({ params }: any) => {
  return (
    <>
      <Dados user={params.id} />
      <ReviewList user={params.id} />
    </>
  );
};

export default Page;
