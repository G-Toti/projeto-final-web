"use client"
import React from "react";
import { api, server, callAPIMethod } from "@/../utils/axiosConfig";
import { useState, useEffect, useLayoutEffect } from "react";
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { Result } from "./result";

interface IResult {
  nome : string;
  artista : string;
  image : string;
}

export const Search = ({query} : {query:string}) => {

  const [results, setResults] = useState<IResult[] | null>();
  const [state, setState] = useState("loading");
  const router = useRouter();
  useEffect(() => {
    const getData = async () =>
    {
      console.log(query);
      const resp_api = await callAPIMethod("track.search", `track=${query}&limit=60`);
      const results = [];
      for(const APIresult of resp_api.data.results.trackmatches.track){
        const result = {
          nome: APIresult.name,
          artista: APIresult.artist,
          image: APIresult.image[3]["#text"]
        }
        results.push(result);
      }
      setResults(results);
      setState("loaded")
    }
    if(state == "loading")
    {
      getData();
    }
  }, []);
  return (
    <section className="m-auto pt-20 bg-neutral-950 w-full">
      {!(state == "loading") ? (
        <div className="grid grid-cols-3 pl-44 pr-44 m-auto">
          {results?.map((result, index) => (
            <Result result={result}/>
          ))}
        </div>
      ) : (
        <p className="text-white text-center w-full">Carregando...</p>
      )}
    </section>
  );
};
