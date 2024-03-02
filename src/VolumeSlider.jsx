const VolumeSlider = () => {
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const finalVolume = muted ? 0 : volume ** 2;

  // var audio = new Audio("audio.mp3");
  // audio.volume = 1;
  // audio.loop = true;
  // document.onclick = function () {
  //   audio.play();
  // };

  return (
    <div>
      <section>
        <input
          type="range"
          min={0}
          max={1}
          step={0.02}
          value={volume}
          onChange={(e) => {
            setVolume(e.target.valueAsNumber);
          }}
        />
        <button onClick={() => setMuted((m) => !m)}>
          {muted ? "muted" : "unmuted"}
        </button>
      </section>
      <section>
        <p>final volume: {finalVolume.toFixed(3)}</p>
      </section>
    </div>
  );
};
export default VolumeSlider;
