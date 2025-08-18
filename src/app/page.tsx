"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {}, [count]);
  return (
    <main className="flex justify-center items-center flex-col">
      <h1 className="text-2xl">Contador</h1>
      <div className="flex items-center gap-2">
        <button
          className="bg-yellow-50 p-2 rounded-md"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {" "}
          +1{" "}
        </button>
        <button
          className="bg-yellow-200 p-2 rounded-md"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          {" "}
          -1{" "}
        </button>
        <button
          className="bg-yellow-300 p-2 rounded-md"
          onClick={() => {
            setCount(count / 2);
          }}
        >
          {" "}
          /2{" "}
        </button>
        <button
          className="bg-yellow-400 p-2 rounded-md"
          onClick={() => {
            setCount(count * 2);
          }}
        >
          {" "}
          *2{" "}
        </button>
      </div>
      <h2>{count}</h2>
    </main>
  );
}
