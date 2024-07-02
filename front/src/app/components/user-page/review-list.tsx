import React from "react";
import {Review} from "./review"

export const ReviewList = () => {
  return (
    <section className="m-auto bg-neutral-950 w-5/6 grid grid-cols-2">
      <Review/>
      <Review/>
      <Review/>
    </section>
  );
};
