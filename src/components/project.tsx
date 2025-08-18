"use client";

import Image from "next/image";

import imagemPrincipal from "@/assets/Image1_004.png";
import imagemDois from "@/assets/Image1_009.png";
import imagemTres from "@/assets/Image1.png";
import imagemQuatro from "@/assets/Image1_003.png";
import { HeartIcon } from "@phosphor-icons/react";
import { useState } from "react";

export function Project(props: {
  title: string;
  description: string;
  mainPhoto: any;
  sidePhotos: any[];
}) {
  const { title, description, mainPhoto, sidePhotos } = props;
  const [like, setLike] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <h1 className="flex w-full text-purple-950 text-4xl font-gothic">
        {title}
      </h1>
      <p className="text-justify">{description}</p>
      <div className="flex gap-2">
        <div>
          <Image
            className="rounded-lg h-100 object-cover"
            src={mainPhoto}
            alt="imagemPrincipal"
          />
        </div>
        <div className="flex flex-col min-w-32 w-32 gap-2">
          <Image
            className="rounded-lg size-32 object-cover"
            src={sidePhotos[0]}
            alt="imagemTres"
          />
          <Image
            className="rounded-lg size-32 object-cover"
            src={sidePhotos[1]}
            alt="imagemQuatro"
          />
          <Image
            className="rounded-lg size-32 object-cover"
            src={sidePhotos[2]}
            alt="imagemDois"
          />
        </div>{" "}
      </div>
      <button
        className={`px-4 rounded-xl w-32 transition-all hover:brightness-90 cursor-pointer flex items-center gap-2 justify-center 
            ${like ? "bg-purple-400" : "bg-white"}`}
        onClick={() => {
          setLike(!like);
        }}
      >
        Curtir{" "}
        <HeartIcon
          className={`${like ? "text-gray-300" : "text-gray-300"}`}
          weight="duotone"
        />
      </button>
    </div>
  );
}

// Criar uma pagina igual project
// nome pode ser: minha estante
// capa do livro, nome, critica, nota
// de 3 livros
