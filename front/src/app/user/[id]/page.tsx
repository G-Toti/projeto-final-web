"use client";
import React from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { UserData } from "../../components/user-page/data";
import { ReviewList } from "../../components/user-page/review-list";
import { useRouter } from 'next/router'

const Page = () => {
  return (
    <main className="bg-gray-100 font-montserrat">
      <div>
        <Header />
      </div>
      <UserData />
      <ReviewList />
      <Footer />
    </main>
  );
};

export default Page;
