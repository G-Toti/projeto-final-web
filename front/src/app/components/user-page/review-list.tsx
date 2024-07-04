"use client"

import React from "react";
import {Review} from "./review"
import { api, server, callAPIMethod } from "../../../../utils/axiosConfig";
import { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from 'next/navigation'



export const ReviewList = ({user} : {user:any}) => {
  const [reviews, setReviews] = useState([{loading:true, error:0}]);
  const router = useRouter();
  useEffect(() => {
    const getData = async () =>
    {
      var resp_back;
      try {
        resp_back = await server.get(`/review/user/${user}`,{
          headers:
          {
            "authorization": `Bearer ${sessionStorage.getItem("token")}`
          }
        });
        
      } catch (err) {
        setReviews([{loading: false,error: err.message}]);
        return
      }
      console.log("NICKI MINAJ");
      console.log(resp_back);
      const tracks = [];
      for(const element of resp_back.data.data)
      {
        const resp_api = await callAPIMethod("track.getInfo", `artist=${element.artista}&track=${element.musica}`);
        const data = resp_api.data.track;
        if(data.album === undefined)
        {
          const resp_artista = await callAPIMethod("artist.getInfo", `artist=${element.artista}`);
          console.log(resp_artista);
          data.album = {
            title: "Standalone Track",
            image: resp_artista.data.artist.image[2]["#text"]
          }
        }
        else{
          data.album.image = data.album.image[2]["#text"]
        }
        tracks.push({
          name:data.name, 
          artist:data.artist.name, 
          album:data.album.title, 
          release:data.wiki.published.split(" ")[2].slice(0, -1), 
          image:data.album.image, 
          stars: Number(element.nota), 
          review: element.corpo
        });
      }
      setReviews(tracks);

    }
    if(reviews[0].loading == true)
    {
      getData();
    }
  }, []);

  if(reviews[0].error != 0 && !(reviews[0].error === undefined))
  {
    return (
      <section className="m-auto bg-neutral-950 w-5/6 text-white text-center pb-20 pt-20">
        <p>{reviews[0].error}</p>
      </section>
    );
  }
  else if(reviews[0].loading == true)
  {
    return (
      <section className="m-auto bg-neutral-950 w-5/6 text-white text-center pb-20 pt-20">
        <p>Carregando!!</p>
      </section>
    );
  }
    return (
      <section className="m-auto bg-neutral-950 w-5/6 grid grid-cols-2">
      {reviews.map((elem, i) => <Review
          name = {elem.name}
          artist = {elem.artist}
          album = {elem.album}
          release = {elem.release}
          image = {elem.image}
          stars = {elem.stars}
          review = {elem.review}
      />)}
      </section>
    );
};
