import { useState } from "react";

function Teste() {
  const [name, setName] = useState();

  function clicar(e) {
    e.preventDefault();



  }

  return (
    <>
      <form onSubmit={clicar}>
        <label htmlFor="name1">Nome: </label>
        <input
          type="text"
          name="name1"
          id="name1"
          placeholder="Seu Nome"
          onChange={(e) => setName(e.target.value)}
        />
        <button>Envie</button>
        <h2>Meu nome é {name}</h2>
      </form>
    </>
  );
}

export default Teste;
