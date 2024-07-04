import React from "react";
import { api, server, callAPIMethod } from "@/../utils/axiosConfig";
import { useState } from "react";
import Image from "next/image";

export const Seção = () => {
  const [loadedNames, setLoadedNames] = useState(false);
  const [loadedImages, setLoadedImages] = useState(false);
  const [names, setNames] = useState(["","","","","",]);
  const [images, setImages] = useState(["","","","","",]);

  if(!loadedImages || !loadedNames)
  {
    
    callAPIMethod("geo.getTopTracks","country=brazil&limit=5").then(async function(resp){
      const tracks = resp.data.tracks.track
      setNames([tracks[0].name,
        tracks[1].name,
        tracks[2].name,
        tracks[3].name,
        tracks[4].name])
      setImages([tracks[0].image[3]["#text"],
          tracks[1].image[3]["#text"],
          tracks[2].image[3]["#text"],
          tracks[3].image[3]["#text"],
          tracks[4].image[3]["#text"]])
      setLoadedImages(true)
      setLoadedNames(true)
    });
  }


  return (
    <section id="top5" className=" bg-black p-10 text-md">
      <div className="flex flex-col gap-4 text-white">
        <h1 className="font-bold text-2xl">
          Top 5: Músicas mais tocadas no momento!
        </h1>
        <div className="flex gap-4 m-auto">
          <div className=" bg-orange-500 rounded p-4 gap-2 flex flex-col">
            <h2 className="font-bold flex justify-center">Top 1</h2>
            <Image
              alt="Foto do Álbum"
              src={images[0]}
              width={200}
              height={200}
              className="w-2/4 inline-block m-auto"
            />
            <p className="flex justify-center">{names[0]}</p>
          </div>
          <div className=" bg-orange-500 flex flex-col rounded p-4 gap-2">
            <h2 className="font-bold flex justify-center">Top 2</h2>
            <Image
              src={images[1]}
              width={200}
              height={200}
              alt="Foto do Álbum"
              className="w-2/4 inline-block m-auto"
            />
            <p className="flex justify-center">{names[1]}</p>
          </div>
          <div className=" bg-orange-500 flex flex-col rounded p-4 gap-2">
            <h2 className="font-bold flex justify-center">Top 3</h2>
            <Image
              src={images[2]}
              width={200}
              height={200}
              alt="Foto do Álbum"
              className="w-2/4 inline-block m-auto"
            />
            <p className="flex justify-center">{names[2]}</p>
          </div>
          <div className=" bg-orange-500 flex flex-col rounded p-4 gap-2">
            <h2 className="font-bold flex justify-center">Top 4</h2>
            <Image
              src={images[3]}
              width={200}
              height={200}
              alt="Foto do Álbum"
              className="w-2/4 inline-block m-auto"
            />
            <p className="flex justify-center">{names[3]}</p>
          </div>
          <div className=" bg-orange-500 flex flex-col rounded p-4 gap-2">
            <h2 className="font-bold flex justify-center">Top 5</h2>
            <Image
              src={images[4]}
              width={200}
              height={200}
              alt="Foto do Álbum"
              className="w-2/4 inline-block m-auto"
            />
            <p className="flex justify-center">{names[4]}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
