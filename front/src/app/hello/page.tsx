"use client";
import React, { useEffect, useState } from "react";
import api from "../../../utils/axiosConfig";

const Page = () => {
  const [X, setX] = useState<string>("");
  useEffect(() => {
    const teste = async () => {
      const res = await api.get("people/1");
      setX(res.data.name);
    };

    teste();
  }, []);
  return (
    X && (
      <div>
        <h1>Hello, {X}</h1>
      </div>
    )
  );
};

export default Page;
