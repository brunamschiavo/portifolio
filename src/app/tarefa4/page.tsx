"use cliente";

import { Book } from "@/components/book";
import imagem1 from "@/assets/o-jardim-secreto-1.png";
import Image from "next/image";

export default function Tarefa4() {
  return (
    <main className="flex flex-col">
      <div>
        <h1> O Jardim Secreto</h1>
        <Image src={imagem1} alt="O Jardim Secreto" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          molestiae modi laboriosam numquam? Fugit omnis magni sapiente nemo
          velit deserunt officiis aliquam cum ab porro eveniet, sit quos veniam
          accusantium?
        </p>
      </div>
    </main>
  );
}
