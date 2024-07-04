import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { server } from "@/../utils/axiosConfig";
import { redirect } from "next/navigation";

interface IReview{
  id: 0,
  titulo: "exemplo de titulo",
  corpo: "exemplo de corpo",
  nota: 0,
  musica: "Starships",
  artista: "Nicki Minaj",
  usuario_id: 0
}

export const AddReview = ({name, artist} : {name:string, artist:string}) => {
  const form = useForm();
  const [msg, setMsg] = useState(" ");
  const { register, handleSubmit, formState } = form;
  const [review, setReview] = useState<IReview | null>();
  const [star, setStar] = useState(3);

  const submit = async (data:any) => {
    //const { titulo, corpo, nota, musica_id, usuario_id } = req.body;
    try {
      const dataReq = {
        titulo: "",
        corpo: data.comment,
        nota: star,
        musica: name,
        artista: artist,
        usuario_id: Number(sessionStorage.getItem("user_id"))
      }
      const response = await server.post(
        "/review/create",
        dataReq, {
          headers: {
            authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );

      setMsg("Avaliação enviadada")
    } catch (error) {
      setMsg(error.response.data.mensagem.join(","));
    }
  }
  useEffect(() => {
    const userId = sessionStorage.getItem("user_id");
    if (msg.includes("Avaliação enviadada")) {
      redirect(`/user/${userId}`);
    }
  }, [msg])

  const handleClick = (e:any) => {
    const id = e.target.id;
    const index = id.slice(-1);
    console.log(e);
    setStar(Number(index));
  }
  const getStar = (id:number) => {
    return <Image id={"star_img" + id} src={star >= id ? "/img/star.png" : "/img/star-off.png"} width={40} height={40} alt="estrela"/>
  }
  const starClass = "";

  return (
    <div className="mt-0 pt-10">
      <br></br>
      <div className="m-auto bg-neutral-800 w-3/6 mt-10 rounded-lg p-10 text-orange-100">
        {msg != "" && <p className="mb-10 text-red-600">{msg}</p>}
          <div className="grid grid-cols-2 mb-5">
              <h2 className="text-3xl font-bold ml-10 inline-block w-fit">Adicionar Avaliação</h2>
              <h3 className="text-right font-light mr-10 inline-block w-max">{name}, {artist}</h3>
          </div>
          <form className="w-5/6 m-auto" onSubmit={handleSubmit(submit)}>
            <div className="flex flex-col">
              <div className="m-auto mb-5">
                <button id="star1" className={starClass} onClick={handleClick} type="button">{getStar(1)}</button>
                <button id="star2" className={starClass} onClick={handleClick} type="button">{getStar(2)}</button>
                <button id="star3" className={starClass} onClick={handleClick} type="button">{getStar(3)}</button>
                <button id="star4" className={starClass} onClick={handleClick} type="button">{getStar(4)}</button>
                <button id="star5" className={starClass} onClick={handleClick} type="button">{getStar(5)}</button>
              </div>
              <label htmlFor="comment" className="mb-2 font-bold text-lg ml-2">Comentário</label>
              <textarea id="comment" className="bg-orange-950 text-white rounded-xl p-3 w-5/6 m-auto" {...register("comment")}/>
              <button className="text-center w-20 bg-orange-600 p-2 rounded-lg place-self-end m-5">Enviar</button>
            </div>
          </form>
      </div>
    </div>
  );
};
