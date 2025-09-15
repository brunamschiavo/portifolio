"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Tarefa5() {
  const [user, setUser] = useState();
  const [repos, setRepos] = useState([]);
  async function getRepos() {
    await fetch("https://api.github.com/users/brunamschiavo/repos")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setRepos(res);
        console.log("repos", res);
      });
  }
  async function getUser() {
    await fetch("https://api.github.com/users/brunamschiavo")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setUser(res);
        console.log("user", res);
      });
  }
  useEffect(() => {
    getUser();
    getRepos();
  }, []);
  // UseEffect vai executar uma função toda vez que um elemento do array mudar. Quando o array estiver vazio, ele vai executar assim que a página carregar.
  return (
    <main>
      <img src={user?.avatar_url} alt="" />
      {repos.map((repo) => {
        return (
          <Link href={repo.svn_url} key={repo.name}>
            <h1>{repo.name}</h1>
            <p>{repo.description}</p>
          </Link>
        );
      })}
    </main>
  );
}
