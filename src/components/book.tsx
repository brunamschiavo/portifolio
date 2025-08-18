"use client";

export function Book(props: {
  title: string;
  description: string;
  mainPhoto: any;
}) {
  const { title, description, mainPhoto } = props;
  return (
    <main>
      <div>
        <h1>O Jardim Secreto</h1>
      </div>
    </main>
  );
}
