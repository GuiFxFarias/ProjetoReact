import "./App.css";
import Evento from "./components/Evento";
import Submit from "./components/Submit";
import Teste from "./components/Teste";


function App() {
  return (
    <div className="App">
      <h1>Testando Evento</h1>
      <Evento numero="1"/>
      <Evento numero="2"/>
      <Submit />

      <>
        <h1>Teste</h1>
        <Teste/>
      </>
    </div>
  );
}

export default App;
