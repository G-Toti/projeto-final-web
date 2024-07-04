"use client"
import React from "react";
import { useState, useEffect } from "react";
import { IResult } from "./search";
import Image from 'next/image';

export const Result = ({result} : {result:IResult}) => {

    return (
        <div className="flex flex-row bg-orange-900 w-[30rem] m-auto mt-3 rounded-lg text-orange-400 p-1">
            <Image
            className="rounded inline-block m-2 w-10 h-10"
            src={result.image}
            width={40}
            height={40}
            alt={result.nome}
            />
            <div className="inline-block text-orange-200">
                <div className=" font-bold ">
                    {result.nome}
                </div>
                <div className="font-light">
                    {result.artista}
                </div>
            </div>
        </div>
    )
}