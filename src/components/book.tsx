"use client";

import Image from "next/image";
import { KnifeIcon } from "@phosphor-icons/react";

export function Book(props: {
  title: string;
  description: string;
  mainPhoto: any;
  knifes: number;
}) {
  const { title, description, mainPhoto, knifes } = props;
  return (
    <div className="flex justify-evenly w-full">
      <div className="flex flex-col gap-2">
        <h1 className="flex w-full text-purple-950 text-4xl font-gothic">
          {title}
        </h1>
        <Image
          className="rounded-lg h-60 w-60 object-cover"
          src={mainPhoto}
          alt="O Jardim Secreto"
        />
      </div>
      <div className="flex flex-col w-100 justify-center gap-8 text-justify">
        <p> {description}</p>
        <div className="flex gap-2">
          <KnifeIcon
            className={`${
              knifes >= 1
                ? "text-purple-950 drop-shadow-sm drop-shadow-purple-800 "
                : "text-black"
            }`}
            weight="duotone"
          />
          <KnifeIcon
            className={`${
              knifes >= 2
                ? "text-purple-950 drop-shadow-sm drop-shadow-purple-800 "
                : "text-black"
            }`}
            weight="duotone"
          />
          <KnifeIcon
            className={`${
              knifes >= 3
                ? "text-purple-950 drop-shadow-sm drop-shadow-purple-800 "
                : "text-black"
            }`}
            weight="duotone"
          />
          <KnifeIcon
            className={`${
              knifes >= 4
                ? "text-purple-950 drop-shadow-sm drop-shadow-purple-800 "
                : "text-black"
            }`}
            weight="duotone"
          />
          <KnifeIcon
            className={`${
              knifes >= 5
                ? "text-purple-950 drop-shadow-sm drop-shadow-purple-800"
                : "text-black"
            }`}
            weight="duotone"
          />
        </div>
      </div>
    </div>
  );
}
