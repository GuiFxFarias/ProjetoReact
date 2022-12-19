import { useState } from "react";

function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function clicar(e) {
    e.preventDefault();
    setUserEmail(email);
    console.log(email)

  }

  function limparEmail(e) {
    e.preventDefault();
    setUserEmail('');

  }

  return (
    <div>
      <h2>Cadastre o seu e-mail:</h2>
      <form>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      <button type="submit" onClick={clicar}>
        Enviar e-mail
      </button>
      {userEmail && (
        <div>
            <p>O e-mail do usuario é {userEmail}</p>
            <button onClick={limparEmail}>Limpar E-mail</button>
        </div>
      )}
    </div>
  );
}

export default Condicional;
