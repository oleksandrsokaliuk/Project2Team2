import React from "react";
import "../index.css";

function Clock() {
  let [time, changeTime] = React.useState(120);
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
  };

  return (
    <div>
      <h1>{time} </h1>
      <button onClick={handleStop}>The word is guessed</button>
    </div>
  );
}

export default Clock;
