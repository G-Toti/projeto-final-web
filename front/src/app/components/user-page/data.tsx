"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { server } from "../../../../utils/axiosConfig";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export const Dados = ({ user }: any) => {
  const [msg, setMsg] = useState("");
  const [imagem, setImagem] = useState<string | null>(null);
  const [userData, setUserData] = useState({ nome: "", email: "", senha: "" });
  const [editMode, setEditMode] = useState(false); // Estado para controlar edição
  const [imageFile, setImageFile] = useState<FormData>();
  const router = useRouter();

  const [userId, setUserId] = useState<string | null>();

  const form = useForm({
    defaultValues: userData,
  });
  const { register, handleSubmit, setValue, formState } = form;
  const { errors } = formState;

  useEffect(() => {
    if (msg.includes("não o pertence") || msg.includes("inválido")) {
      alert(msg);
      sessionStorage.removeItem("token");
      router.push("/login");
    }
  }, [msg]);

  useEffect(() => {
    setUserId(sessionStorage.getItem("user_id"));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const response = await server.get("/user/" + user, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data.data);
        setImagem(
          `${response.data.data.foto && "http://localhost:3001/"}${
            response.data.data.foto
          }`
        );
        setValue("nome", response.data.nome);
        setValue("email", response.data.email);
        setValue("senha", response.data.senha);

        console.log(response);
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    };
    fetchData();
  }, [setValue]);

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagem(imageUrl);
    }

    handleFileSubmit(e);
  };

  const handleBackToEdit = () => {
    setEditMode(false);
  };

  const submit = async (data: any) => {
    console.log(data.nome);
    const reqData = {
      ...data,
      ...(imageFile && { foto: imageFile.get("foto") }),
    };

    try {
      const token = sessionStorage.getItem("token");
      const response = await server.putForm(`/user/${user}`, reqData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setMsg("Dados atualizados com sucesso!");
        setEditMode(false);
      }
      console.log(response);
    } catch (error) {
      setMsg(
        "Erro ao atualizar dados: " + error.response.data?.mensagem?.join(",")
      );
    }
  };

  const handleFileSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("foto", file);

      setImageFile(formData);
    }
  };

  return (
    <section className="bg-orange-800 text-gray-100 p-20 text-md">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center mt-20 m-auto">
          {imagem ? (
            <Image
              width={100}
              height={100}
              src={imagem}
              alt="Imagem do usuário"
              className=" w-60 h-60 rounded-full object-cover "
            />
          ) : (
            <Image
              width={100}
              height={100}
              src="/img/default-avatar.png"
              alt="Avatar padrão"
              className=" w-60 h-60 rounded-full object-cover"
            />
          )}
          {editMode && (
            <input
              type="file"
              name="imagem"
              accept="image/*"
              onChange={handleImageUpload}
              className="p-4 "
            />
          )}
        </div>
        {!editMode && (
          <div>
            <p className="text-center font-bold text-2xl justify-center items-center mt-6">
              {userData.nome}{" "}
            </p>
            <p className="mb-4 text-center">{userData.email} </p>
            {userId === user && (
              <button
                className="flex justify-center bg-orange-500 px-4 py-1 rounded text-gray-100 hover:bg-orange-700 font-bold text-md transition hover:scale-110"
                onClick={() => setEditMode(true)} // Entrar no modo de edição ao clicar
              >
                Atualizar Dados
              </button>
            )}
          </div>
        )}
        {editMode && (
          <form
            onSubmit={handleSubmit(submit)}
            className="flex flex-col gap-4 mt-4 w-1/3"
          >
            <div className="flex flex-col justify-between gap-2 rounded">
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                placeholder="Digite seu novo nome"
                className="rounded p-2 text-black"
                {...register("nome")}
              />
              <p className="text-red-500">{errors.nome?.message}</p>

              <label htmlFor="email">E-mail:</label>
              <input
                type="text"
                id="email"
                placeholder="Digite seu novo e-mail"
                className="rounded p-2 text-black"
                {...register("email")}
              />
              <p className="text-red-500">{errors.email?.message}</p>

              <label htmlFor="senha">Senha:</label>
              <input
                type="password"
                id="senha"
                placeholder="Digite sua nova senha"
                className="rounded p-2 text-black"
                {...register("senha")}
              />
              <p className="text-red-500">{errors.senha?.message}</p>

              <label htmlFor="">Confirmar Senha:</label>
              <input
                type="password"
                id="senha"
                placeholder="Repita sua nova senha"
                className="rounded p-2 text-black"
                {...register("senha")}
              ></input>
            </div>
            <div className="flex gap-4 justify-end">
              <button
                type="submit"
                className="bg-green-600 px-4 py-1 rounded transition hover:scale-110 hover:bg-green-700 font-bold text-md"
              >
                Salvar Dados
              </button>

              <button
                className=" bg-orange-500 px-4 py-1 rounded text-gray-100 transition hover:scale-110 hover:bg-orange-700 font-bold text-md"
                onClick={handleBackToEdit}
              >
                Voltar
              </button>
            </div>
          </form>
        )}

        {msg && <p className="mt-4">{msg}</p>}
      </div>
    </section>
  );
};
