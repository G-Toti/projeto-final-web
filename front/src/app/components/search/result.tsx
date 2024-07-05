"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export const Result = ({ result }: { result: any }) => {
  const [classText, setClassText] = useState(
    "inline-block text-ellipsis truncate text-orange-200"
  );

  return (
    <Link href={encodeURIComponent(`/review/${result.nome}/${result.artista}`)}>
      <div className="truncate flex flex-row bg-orange-900 w-[25rem] m-auto mt-3 rounded-lg text-orange-400 p-1">
        <Image
          className="rounded inline-block m-2 w-10 h-10"
          src={result.image}
          width={40}
          height={40}
          alt={result.nome}
          onError={(e) => {
            e.currentTarget.style.display = "none";
            setClassText(
              "inline-block text-ellipsis truncate text-orange-200 ml-14"
            );
          }}
        />
        <div className={classText}>
          <div className=" font-bold w-1/2">{result.nome}</div>
          <div className="font-light">{result.artista}</div>
        </div>
      </div>
    </Link>
  );
};
