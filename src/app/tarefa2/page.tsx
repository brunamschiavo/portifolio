"use client";

import { useState } from "react";

export default function Tarefa2() {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const [count, setCount] = useState(0);

  return (
    <main className="flex justify-center items-center gap-8 container max-w-3xl mx-auto p-2">
      <div className="flex flex-col items-center gap-2">
        <div className="flex justify-between w-full">
          <div className="flex flex-col items-center w-40">
            <h1>Digite um valor: </h1>
            <input
              className="border-2 border-white rounded-lg p-2 w-32"
              value={valor1}
              onChange={(event) => {
                setValor1(Number(event.target.value));
              }}
            />
          </div>
          <div className="flex flex-col items-center w-40">
            <h2>Digite segundo valor:</h2>
            <input
              className="border-2 border-white rounded-lg p-2 w-32"
              value={valor2}
              onChange={(event) => {
                setValor2(Number(event.target.value));
              }}
            />
          </div>
          <p className="text-center w-40">
            Resultado:
            <br />
            {resultado}
          </p>
        </div>
        <div className="flex justify-center gap-8 w-full">
          <button
            className="px-4 py-2 bg-white flex-col rounded-xl"
            onClick={() => {
              setResultado(valor1 + valor2);
            }}
          >
            +
          </button>
          <button
            className="px-4 py-2 bg-white flex-col rounded-xl"
            onClick={() => {
              setResultado(valor1 - valor2);
            }}
          >
            -
          </button>
          <button
            className="px-4 py-2 bg-white flex-col rounded-xl"
            onClick={() => {
              setResultado(valor1 * valor2);
            }}
          >
            x
          </button>
          <button
            className="px-4 py-2 bg-white flex-col rounded-xl"
            onClick={() => {
              setResultado(valor1 / valor2);
            }}
          >
            ÷
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl">Contador</h1>
        <div className="flex items-center gap-2">
          <button
            className="bg-yellow-50 p-2 rounded-md"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +1
          </button>
          <button
            className="bg-yellow-200 p-2 rounded-md"
            onClick={() => {
              setCount(count - 1);
            }}
          >
            -1
          </button>
          <button
            className="bg-yellow-300 p-2 rounded-md"
            onClick={() => {
              setCount(count / 2);
            }}
          >
            /2
          </button>
          <button
            className="bg-yellow-400 p-2 rounded-md"
            onClick={() => {
              setCount(count * 2);
            }}
          >
            *2
          </button>
        </div>
        <h2>{count}</h2>
      </div>
    </main>
  );
}
