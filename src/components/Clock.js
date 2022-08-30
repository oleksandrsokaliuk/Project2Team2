import React from "react";
import "./clock.css";

function Clock() {
  let [style, setStyle] = React.useState({
    backgroundImage: "linear-gradient(black, transparent)",
  });
  const getPadTime = (time) => time.toString().padStart(2, "0");
  let [time, changeTime] = React.useState(120);
  const minutes = getPadTime(Math.floor(time / 60));
  const seconds = getPadTime(time - minutes * 60);
  let [isCounting, setIsCounting] = React.useState(true);
  React.useEffect(() => {
    const createInterval = setInterval(() => {
      isCounting && changeTime((time) => (time > 0 ? time - 1 : 0));
    }, 1000);
    return () => {
      clearInterval(createInterval);
    };
  }, [isCounting]);

  const handleStop = () => {
    setIsCounting(false);
    setStyle({
      backgroundImage: "none",
    });
  };

  return (
    <div className="main__container">
      <div className="cont">
        <div className="spinner" style={style}></div>
        <div className="numbers">
          <span className="timer__item">{minutes} </span>
          <span className="timer__item">: </span>
          <span className="timer__item">{seconds}</span>
        </div>
      </div>
      <div className="button">
        <button className="timer__button" onClick={handleStop}>
          The word is guessed
        </button>
      </div>
    </div>
  );
}

export default Clock;
