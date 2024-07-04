import React from "react";
import {Review} from "./review"
import { api, server, callAPIMethod } from "../../../../utils/axiosConfig";
import { useState, useEffect } from "react";



export const ReviewList = () => {
  const [reviews, setReviews] = useState([{loading:true}]);
  useEffect(() => {
    const getData = async () =>
    {
      const resp_back = await server.get("/review/user/4",{
        headers:
        {
          "authorization": `Bearer ${sessionStorage.getItem("token")}`
        }
      });
      const tracks = [];
      for(const element of resp_back.data.data)
      {
        const resp_api = await callAPIMethod("track.getInfo", `artist=${element.artista}&track=${element.musica}`);
        const data = resp_api.data.track;
        tracks.push({
          name:data.name, 
          artist:data.artist.name, 
          album:data.album.title, 
          release:data.wiki.published.split(" ")[2].slice(0, -1), 
          image:data.album.image[1]["#text"], 
          stars: Number(element.nota), 
          review: element.corpo
        });
      }
      setReviews(tracks);

    }
    getData()
  }, []);

  if(reviews[0].loading == true)
  {
    return (
      <section className="m-auto bg-neutral-950 w-5/6 text-white text-center">
        <p>Carregando!!</p>
      </section>
    );
  }
  else{
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
  }
};
