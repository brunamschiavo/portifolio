"use client";

import imagemPrincipal from "@/assets/Image1_004.png";
import imagemDois from "@/assets/Image1_009.png";
import imagemTres from "@/assets/Image1.png";
import imagemQuatro from "@/assets/Image1_003.png";
import { Project } from "@/components/project";

export default function Tarefa3() {
  return (
    <main className="flex justify-center items-center flex-col p-8 gap-12 container mx-auto max-w-3xl">
      <Project
        title="La Via Integrazione"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laborum nesciunt exercitationem quos quia neque optio animi rem expedita nobis excepturi odio odit, quidem beatae, veniam vitae sapiente ipsum non?"
        mainPhoto={imagemPrincipal}
        sidePhotos={[imagemTres, imagemQuatro, imagemDois]}
      />

      <Project
        title="Integrazione"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laborum nesciunt exercitationem quos quia neque optio animi rem expedita nobis excepturi odio odit, quidem beatae, veniam vitae sapiente ipsum non?"
        mainPhoto={imagemQuatro}
        sidePhotos={[imagemDois, imagemPrincipal, imagemTres]}
      />

      <Project
        title="La Via"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laborum nesciunt exercitationem quos quia neque optio animi rem expedita nobis excepturi odio odit, quidem beatae, veniam vitae sapiente ipsum non?"
        mainPhoto={imagemDois}
        sidePhotos={[imagemTres, imagemPrincipal, imagemQuatro]}
      />
    </main>
  );
}

//[{
//title: "Título",
// description: "Descrição",
// mainPhoto: "/assets/foto1.jpg"
// sidePhotos: ["/assets/foto2.jpg", "/assets/foto3.jpg", "/assets/foto4.jpg"],
// liked: true
//}]

// Criar um blog com os projetos de arquitetura, com: Título, descrição, uma foto grande e 3 pequenas do lado.
// Em baixo, as pessoas podem curtir o projeto.
// Minimo 3 projetos.
