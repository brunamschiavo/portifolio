"use client";

import Image from "next/image";
import disco from "@/assets/retro .jpg";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col">
      <Image
        src={disco}
        alt="disco"
        className="absolute flex justify-center top-50 h-70 w-auto"
      />
    </main>
  );
}
