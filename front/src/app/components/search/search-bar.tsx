"use client"
import React from "react";
import Image from 'next/image';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export const SearchBar = ({}) => {
    const form = useForm();
    const { register, handleSubmit, formState } = form;
    const router = useRouter()
    const submit = async (data: any) => {
        console.log(data);
        router.push(`/search?q=${data.query}`);
      };
    return (
        <form className="m-auto w-96 rounded-full bg-orange-950 inline-block text-sm"
        onSubmit={handleSubmit(submit)}
        noValidate
        >
            <input className="bg-orange-900 text-orange-100 w-full rounded-full p-1 pl-3 pr-3" {...register("query")}></input>
        </form>
    );
};
