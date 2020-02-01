import React, { useState, useEffect } from 'react';

export default function Form({ onSubmit }) {

  const [nome, setNome] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    (async () => {

    })()
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      nome,
      title
    });

    setNome('');
    setTitle('');

  }

  async function updateTitle(e) {
    setNome(e.target.value)
    setTitle(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Pesquisar </label>
        <input type="text" id="nome" onKeyUp={updateTitle} />
        <button
          type="submit"
          id="pesquisar"
        >
          Pesquisar
           </button>
      </form>
    </>
  );
}