"use client"
import React from "react";
import { server } from "../../../utils/axiosConfig";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const schema = yup.object({
    email: yup.string().email('Email inválido').required('Email obrigatório'),
    senha: yup.string().min(2,'Senha com no mínimo 2 caracteres').required(),
}).required();

export const Login = () => {
  //Msg para armazenar resposta literal do servidor
  const [msg, setMsg] = useState(' ');

  const form = useForm({
        resolver: yupResolver(schema)
  });
  const { register, handleSubmit, formState } = form;

  //const {errors} = formState;

  const submit = async (data: any) => {
      
      try {
          const response = await server.post('/user/login', data);
          sessionStorage.setItem('token', response.data);
          console.log(response.data);
          setMsg('Usuário Autenticado');
      } catch (error) {
          setMsg(error.response.data);
      } 
      
  }

  if(msg.includes('Usuário Autenticado')){
    
  }
  console.log(msg);
  return (
    <section className="bg-black text-gray-100 p-20 text-md">
      <div className="flex flex-row justify-center">
        <div className="flex justify-center flex-col p-20 w-2/4">
          <h1 className="text-2xl font-bold pb-2">Fazer Login</h1>
          <form onSubmit={handleSubmit(submit,submit)} noValidate className="flex flex-col justify-between gap-2 rounded">
            <label htmlFor="email">E-mail:</label>
            <input
              type="text"
              id="email"
              placeholder="Digite seu e-mail"
              className="rounded p-2 text-black"
              {...register('email')}
            />
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              placeholder="Digite sua senha"
              className="rounded p-2 text-black"
              {...register('senha')}
            />
            <div className="flex flex-wrap pt-2 justify-end">
              <button type="submit" id="login-button" className="bg-orange-500 font-bold rounded py-1 w-1/2 hover:bg-orange-700 transition hover:scale-110">
                Entrar
              </button>
            </div>
          </form>
          <div className="flex flex-row pt-2 gap-2">
            <p>Ainda não tem conta?</p>
            <a
              href="#cadastro"
              className=" text-orange-700 font-bold underline"
            >
              Cadastre-se
            </a>
          </div>
          <a href="#home" className="font-bold pt-2 underline">
            Voltar
          </a>
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
