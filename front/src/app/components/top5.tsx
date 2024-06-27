import React from "react";

export const Seção = () => {
  return (
    <section id="top5" className=" bg-black p-10 sm:text-sm lg:text-xl">
      <div className="flex flex-col gap-4 text-white">
        <h1 className="font-bold text-2xl">
          Top 5: Músicas mais tocadas no momento!
        </h1>
        <div className="flex gap-4">
          <div className=" bg-orange-500 rounded p-4 gap-2 flex flex-col">
            <h2 className="font-bold flex justify-center">Top 1</h2>
            <img src=".\img\HGBC.png" alt="Foto do Álbum" className="w-2/4" />
            <p>Nome da música</p>
          </div>
          <div className=" bg-orange-500 flex flex-col rounded p-4 gap-2">
            <h2>Top 2</h2>
            <img src=".\img\HGBC.png" alt="Foto do Álbum" className="w-2/4" />
            <p>Nome da música</p>
          </div>
          <div className=" bg-orange-500 flex flex-col rounded p-4 gap-2">
            <h2>Top 3</h2>
            <img src=".\img\HGBC.png" alt="Foto do Álbum" className="w-2/4" />
            <p>Nome da música</p>
          </div>
          <div className=" bg-orange-500 flex flex-col rounded p-4 gap-2">
            <h2>Top 4</h2>
            <img src=".\img\HGBC.png" alt="Foto do Álbum" className="w-2/4" />
            <p>Nome da música</p>
          </div>
          <div className=" bg-orange-500 flex flex-col rounded p-4 gap-2">
            <h2>Top 5</h2>
            <img src=".\img\HGBC.png" alt="Foto do Álbum" className="w-2/4" />
            <p>Nome da música</p>
          </div>
        </div>
      </div>
    </section>
  );
};
