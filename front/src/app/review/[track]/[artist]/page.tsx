"use client";

import React from "react";
import {AddReview} from "@/app/components/review/review-add"

const Page = ({params} : any) => {
  return (
    <AddReview name={decodeURI(params.track)} artist={decodeURI(params.artist)} />
  );
};

export default Page;
