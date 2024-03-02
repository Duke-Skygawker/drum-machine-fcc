import CevH2 from "./assets/Audio Samples/Cev_H2.mp3";
import DscOh from "./assets/Audio Samples/Dsc_Oh.mp3";
import Heater1 from "./assets/Audio Samples/Heater-1.mp3";
import Heater2 from "./assets/Audio Samples/Heater-2.mp3";
import Heater3 from "./assets/Audio Samples/Heater-3.mp3";
import Heater4_1 from "./assets/Audio Samples/Heater-4_1.mp3";
import Heater6 from "./assets/Audio Samples/Heater-6.mp3";
import KickNHat from "./assets/Audio Samples/Kick_n_Hat.mp3";
import RP4kick from "./assets/Audio Samples/RP4_KICK_1.mp3";

const drumPads = [
  {
    name: "Q",
    sample: CevH2,
    sampleName: "Closed Hat 2",
  },
  {
    name: "W",
    sample: DscOh,
    sampleName: "Open Hat",
  },
  {
    name: "E",
    sample: Heater1,
    sampleName: "Heater1",
  },
  {
    name: "A",
    sample: Heater2,
    sampleName: "Heater2",
  },
  {
    name: "S",
    sample: Heater3,
    sampleName: "Heater3",
  },
  {
    name: "D",
    sample: Heater4_1,
    sampleName: "Heater4_1",
  },
  {
    name: "Z",
    sample: Heater6,
    sampleName: "Heater6",
  },
  {
    name: "X",
    sample: KickNHat,
    sampleName: "Kick'N'Hat",
  },
  {
    name: "C",
    sample: RP4kick,
    sampleName: "Kick",
  },
];
export default drumPads;
