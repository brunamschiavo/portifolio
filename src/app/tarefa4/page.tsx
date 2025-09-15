"use client";

import { Book } from "@/components/book";
import imagem1 from "@/assets/o-jardim-secreto-1.png";
import image2 from "@/assets/8-psicose-limited-edition-1.png";
import image3 from "@/assets/coracao_satanico_loja_1.png";

export default function Tarefa4() {
  return (
    <main className="flex justify-center items-center flex-col p-8 gap-8 container mx-auto max-w-3xl">
      <Book
        title="O Jardim Secreto"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laborum nesciunt exercitationem quos quia neque optio animi rem expedita nobis excepturi odio odit, quidem beatae, veniam vitae sapiente ipsum non?"
        mainPhoto={imagem1}
        knifes={5}
      />

      <Book
        title="Psicose"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laborum nesciunt exercitationem quos quia neque optio animi rem expedita nobis excepturi odio odit, quidem beatae, veniam vitae sapiente ipsum non?"
        mainPhoto={image2}
        knifes={3}
      />

      <Book
        title="Coração Satânico"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laborum nesciunt exercitationem quos quia neque optio animi rem expedita nobis excepturi odio odit, quidem beatae, veniam vitae sapiente ipsum non?"
        mainPhoto={image3}
        knifes={2}
      />
    </main>
  );
}
