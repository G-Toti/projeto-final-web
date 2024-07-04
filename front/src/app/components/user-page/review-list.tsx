"use client";

import React from "react";
import { Review } from "./review";
import { api, server, callAPIMethod } from "../../../../utils/axiosConfig";
import { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

interface IReviews {
  id: number;
  titulo: string;
  corpo: string;
  nota: number;
  musica: string;
  artista: string;
  usuario_id: number;
  album: string;
  release: string;
  image: string;
}

export const ReviewList = ({ user }: { user: any }) => {
  const [reviews, setReviews] = useState<IReviews[] | null>();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      var resp_back;
      try {
        resp_back = await server.get(`/review/user/${user}`, {
          headers: {
            authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        });
      } catch (err) {
        console.log(err)
        if(err.message == "Request failed with status code 404") {
          setIsLoading(false);
        }
        return;
      }
      const tracks = [];
      for (const element of resp_back.data.data) {
        const resp_api = await callAPIMethod(
          "track.getInfo",
          `artist=${element.artista}&track=${element.musica}`
        );
        const data = resp_api.data.track;
        if (data.album === undefined) {
          const resp_artista = await callAPIMethod(
            "artist.getInfo",
            `artist=${element.artista}`
          );
          data.album = {
            title: "Standalone Track",
            image: resp_artista.data.artist.image[2]["#text"],
          };
        } else {
          data.album.image = data.album.image[2]["#text"];
        }
        if(data.wiki == undefined)
        {
          data.release = ""
        }
        else{
          data.release = data.wiki.published.split(" ")[2].slice(0, -1)
        }
        const review = {
          id: element.id,
          titulo: element.musica,
          corpo: element.corpo,
          nota: element.nota,
          musica: element.musica,
          artista: element.artista,
          usuario_id: element.usuario_id,
          album: data.album.title,
          release: data.release,
          image: data.album.image,
        };
        tracks.push(review);
      }
      setIsLoading(false);
      setReviews(tracks);
    };
    getData();
  }, []);

  return (
    <section className="m-auto bg-neutral-950 w-full">
      {!isLoading ? (
        <div className="grid grid-cols-2">
          {reviews?.map((element, index) => (
            <Review
              id={element.id}
              name={element.titulo}
              album={element.album}
              artist={element.artista}
              image={element.image}
              release={element.release}
              review={element.corpo}
              stars={element.nota}
              key={index}
            />
          ))}
        </div>
      ) : (
        <p className="text-white text-center w-full">Carregando...</p>
      )}
    </section>
  );
};
