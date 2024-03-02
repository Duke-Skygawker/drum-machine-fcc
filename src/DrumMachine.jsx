import { useGlobalContext } from "./Context/Context";
import drumPads from "./data";
import DrumPad from "./DrumPad";
const DrumMachine = () => {
  const { showContext, display, setDisplay } = useGlobalContext();
  const keyDown = (e) => {
    const keyPressed = e.key;
    const pad = document.getElementById(keyPressed.toUpperCase());
    setDisplay(pad.parentElement.id);
    pad.play();
  };

  return (
    <div onKeyDown={keyDown} className="main-div" tabIndex="0">
      <div id="drum-machine" className="drum-machine">
        <div className="pad-container">
          {drumPads.map((pad, index) => {
            return <DrumPad key={index} pad={pad} />;
          })}
        </div>
        <div id="display-container" className="display-container">
          <div className="display" id="display">
            <h4>{display}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DrumMachine;
