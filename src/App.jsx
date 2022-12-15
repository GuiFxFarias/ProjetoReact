import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="Guilarme" />
      <Pessoa name="Guilhermo" age="19" height="89kg" />
    </div>
  );
}

export default App;
