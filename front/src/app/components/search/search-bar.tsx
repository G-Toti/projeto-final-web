//"use client"
import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const SearchBar = ({}) => {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const router = useRouter();
  const submit = async (data: any) => {
    console.log(data);
    //router.push(`/search?q=${data.query}`);
    location.assign(`/search?q=${data.query}`);
    //location.reload();
  };
  return (
    <form
      className="m-auto w-96 rounded bg-orange-900 inline-block text-sm"
      onSubmit={handleSubmit(submit)}
    >
      <input
        className="bg-orange-500 text-orange-100 w-full rounded p-1 pl-3 pr-3"
        {...register("query")}
      ></input>
    </form>
  );
};
