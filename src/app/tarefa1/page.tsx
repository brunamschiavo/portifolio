"use client";

import { useState } from "react";

export default function Tarefa1() {
  const [nome, setNome] = useState("desconhecido");
  const [text, setText] = useState("");

  return (
    <main className="flex justify-center items-center flex-col">
      <div className="p-2">
        <h2>Olá, {nome}</h2>
      </div>
      <p>Digite seu nome:</p>
      <input
        className="border-2 border-white rounded-lg p-2 w-32"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
        type="text"
        placeholder="nome"
      />
      <div className="p-2">
        <button
          className="px-4 py-2 bg-white flex-col rounded-xl"
          onClick={() => {
            setNome(text);
            setText("");
          }}
        >
          Salvar
        </button>
      </div>
    </main>
  );
}

// Tarefa2
// Criar uma página Tarafa2
// Dois inputs e a pessoa vai digitar um valor em cada um
// A direta dos inputs vai ter o resultado
// Embaixo dos inputs vai ter um botão de: soma
// Quando clicar em soma, vai somar o valor dos dois inputs e colocar no resultado

// Tarefa extra
// Arrumar tudo com tailwind - como na página 1
