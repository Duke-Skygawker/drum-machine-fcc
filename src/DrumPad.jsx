import { useState } from "react";
import { useGlobalContext } from "./Context/Context";
const DrumPad = ({ pad }) => {
  const { setDisplay } = useGlobalContext();
  const [timer, setTimer] = useState(null);
  const { name, sample, sampleName } = pad;
  const audioPlay = () => {
    document.getElementById(name).play();
    // const audio = new Audio(sample);
    // audio.play();
    setDisplay(sampleName);
  };
  // let myInterval;
  // let autoPlay = false;
  // const loopToggle = () => {
  //   console.log(autoPlay);
  //   autoPlay = !autoPlay;
  //   console.log(autoPlay);
  //   if (autoPlay === true) {
  //     myInterval = setInterval(audioPlay, 1000);
  //   } else if (autoPlay === false) {
  //     clearInterval(myInterval);
  //   }
  //   return;
  // };
  return (
    <div className="drum-pad-big">
      <div onClick={audioPlay} id={sampleName} className="drum-pad">
        {name}
        <audio className="clip" src={sample} id={name}>
          <source src={sample} type="audio/ogg" />
        </audio>
      </div>
      {/* <input type="checkbox" onClick={loopToggle} /> */}
    </div>
  );
};
export default DrumPad;
