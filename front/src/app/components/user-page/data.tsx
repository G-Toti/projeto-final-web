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
    if (msg.includes("não o pertence")) {
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
    try {
      const token = sessionStorage.getItem("token");
      const response = await server.put(
        `/user/${user}`,
        { ...data, ...imageFile },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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

  //const deleteAccount = async () => {
  //  try {
  //    await server.delete("/user/delete");
  //    sessionStorage.removeItem("token");
  //    router.push("/login");
  //  } catch (error) {
  //    console.error("Erro ao excluir conta:", error);
  //  }
  // };

  return (
    <section className="bg-black text-gray-100 p-20 text-md">
      <div className="flex flex-row p-10 w-50">
        <div className="mb-4">
          {imagem ? (
            <Image
              width={200}
              height={40}
              src={imagem}
              alt="Imagem do usuário"
              className=" rounded-full object-cover "
            />
          ) : (
            <Image
              width={200}
              height={40}
              src="/img/default-avatar.png"
              alt="Avatar padrão"
              className=" rounded-full object-cover"
            />
          )}
          {editMode && (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="p-4 "
            />
          )}
        </div>
        {!editMode && (
          <div>
            <p>{userData.nome} </p>
            <p>{userData.email} </p>
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
            className="flex flex-col gap-4 mt-4"
          >
            <div className="flex flex-row">
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                className="rounded p-2 text-black"
                {...register("nome")}
              />
              <p className="text-red-500">{errors.nome?.message}</p>
            </div>
            <div>
              <label htmlFor="email">E-mail:</label>
              <input
                type="text"
                id="email"
                className="rounded p-2 text-black"
                {...register("email")}
              />
              <p className="text-red-500">{errors.email?.message}</p>
            </div>
            <div>
              <label htmlFor="senha">Senha:</label>
              <input
                type="password"
                id="senha"
                className="rounded p-2 text-black"
                {...register("senha")}
              />
              <p className="text-red-500">{errors.senha?.message}</p>
            </div>

            <div>
              <label htmlFor="">Confirmar Senha:</label>
              <input
                type="password"
                id="senha"
                className="rounded p-2 text-black"
                {...register("senha")}
              ></input>
            </div>

            <div className="flex gap-4">
              <button type="submit" className="bg-green-500 p-2 rounded">
                Salvar Dados
              </button>
              <button
                type="button"
                className="bg-red-500 p-2 rounded"
                //onClick={deleteAccount}
              >
                Excluir Conta
              </button>
              <button
                className=" bg-orange-500 px-4 py-1 rounded text-gray-100"
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
