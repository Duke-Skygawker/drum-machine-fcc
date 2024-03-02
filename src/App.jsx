import "./App.css";
import { useGlobalContext } from "./Context/Context";
import DrumMachine from "./DrumMachine";

function App() {
  const { showContext } = useGlobalContext();
  return (
    <>
      <h1>Drum Machine</h1>
      <DrumMachine />
    </>
  );
}

export default App;
