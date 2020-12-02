import React, { useState, useEffect, useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export const Timer = ({ name }) => {
  const [seconds, setSeconds] = useState("0");
  const [isCountDownRunning, setIsCountDownRunning] = useState(false);
  const [shouldAlert, setShouldAlert] = useState(false);

  const { timerNames, removeTimerName } = useContext(GlobalContext);

  console.log(timerNames.id);
  // console.log("over Here", timerNames);
  useEffect(() => {
    const secondsLeft = parseInt(seconds);
    if (isCountDownRunning && secondsLeft > 0) {
      setTimeout(() => {
        setSeconds(secondsLeft - 1);
      }, 1000);
    } else {
      if (shouldAlert) {
        alert(`The ${name} timer is done!`);
        setShouldAlert(false);
      }
      setIsCountDownRunning(false);
    }
  }, [isCountDownRunning, seconds]);

  return (
    <div className="timer-container">
      <div
        className="remove-timer"
        onClick={() => {
          removeTimerName(timerNames.id);
          // console.log(name.id);
        }}
      >
        X
      </div>
      <h2 className="timer-header">{name}</h2>
      <input
        className={isCountDownRunning ? "input-disabled" : "counter-field"}
        disabled={isCountDownRunning}
        type="number"
        value={seconds}
        onChange={(event) => {
          setSeconds(event.target.value);
        }}
      />
      <div
        className="btn-start"
        onClick={() => {
          setIsCountDownRunning(true);
          setShouldAlert(true);
        }}
      >
        <p>Start</p>
      </div>
    </div>
  );
};
