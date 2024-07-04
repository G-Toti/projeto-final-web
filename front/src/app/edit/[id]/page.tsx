"use client";

import React from "react";
import {EditReview} from "@/app/components/review/review-edit"

const Page = ({params} : any) => {
  return (
    <EditReview id={decodeURI(params.id)} />
  );
};

export default Page;
