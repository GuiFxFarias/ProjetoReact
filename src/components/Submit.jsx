import { useState } from "react";

function Submit() {
  function cadastra(e) {
    e.preventDefault();
    console.log(name)
    console.log(password)
    console.log("cadastrou");
  }

  const [name, setName] = useState()
  const [password, setPassword] = useState()

  return (
    <div>
      <h1>Meu Cadastro: </h1>
      <form onSubmit={cadastra}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite o Seu Nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite a Sua Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Submit;
