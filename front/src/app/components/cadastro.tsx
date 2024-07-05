import React from "react";
import { server } from "../../../utils/axiosConfig";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";

const schema = yup
  .object({
    nome: yup.string().required("Usuário obrigatório"),
    email: yup.string().email("Email inválido").required("Email obrigatório"),
    senha: yup
      .string()
      .min(2, "Senha com no mínimo 2 caracteres")
      .required("Senha com no mínimo 2 caracteres"),
    confSenha: yup
      .string()
      .required("Repita a senha")
      .oneOf([yup.ref("senha")], "As senhas devem coincidir!"),
  })
  .required();

export const Cadastro = () => {
  const [msg, setMsg] = useState(" ");

  const form = useForm({
    resolver: yupResolver(schema),
  });
  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  const submit = async (data: any) => {
    console.log(data);
    try {
      const response = await server.post("/user/create", data);
      console.log(response);
      if (response.status === 201) {
        setMsg("OK");
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("user_id", response.data.user.id);
      }
    } catch (error) {
      setMsg(error.response.data.mensagem.join(","));
    }
  };

  if (msg === "OK") {
    redirect(`/user/${sessionStorage.getItem("user_id")}`);
  }

  return (
    <section className="bg-black text-gray-100 p-20 text-md">
      <div className="flex flex-row justify-center">
        <div className="flex justify-center flex-col p-20 w-2/4">
          <h1 className="text-2xl font-bold pb-2">Cadastrar</h1>
          <form
            onSubmit={handleSubmit(submit)}
            noValidate
            className="flex flex-col justify-between gap-2 rounded"
          >
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              placeholder="Digite seu nome"
              className="rounded p-2 text-black"
              {...register("nome")}
            />
            <p className="erro">{errors.email?.message}</p>
            <label htmlFor="email">E-mail:</label>
            <input
              type="text"
              id="email"
              placeholder="Digite seu e-mail"
              className="rounded p-2 text-black"
              {...register("email")}
            />
            <p className="erro">{errors.senha?.message}</p>
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              placeholder="Digite sua senha"
              className="rounded p-2 text-black"
              {...register("senha")}
            />
            <p className="erro">{errors.confSenha?.message}</p>
            <label htmlFor="confirmasenha">Confirmar senha:</label>
            <input
              type="password"
              id="senha"
              placeholder="Confirme sua senha"
              className="rounded p-2 text-black"
              {...register("confSenha")}
            />
            <p className="erro">{errors.confSenha?.message}</p>
            <div className="flex flex-wrap pt-2 justify-end">
              <button className="bg-orange-500 font-bold rounded py-1 w-1/2 hover:bg-orange-700 transition hover:scale-110">
                Cadastrar
              </button>
            </div>
          </form>
          <div className="flex flex-row pt-2 gap-2">
            <p>Já tem conta?</p>
            <Link legacyBehavior href="/login">
              <a
                href="#cadastro"
                className=" text-orange-700 font-bold underline"
              >
                Entrar
              </a>
            </Link>
          </div>
          <Link legacyBehavior href="/">
            <a href="#home" className="font-bold pt-2 underline">
              Voltar
            </a>
          </Link>
        </div>
        <div className="p-20 w-2/4">
          <img
            src=".\img\HGBC_Music.png"
            alt="Logotipo com as letras da HGBC Music"
            className=""
          />
        </div>
      </div>
    </section>
  );
};
