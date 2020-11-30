import React, { useState, useEffect } from "react";

export const Timer = ({ name }) => {
  const [seconds, setSeconds] = useState("60");
  const [isCountDownRunning, setIsCountDownRunning] = useState(false);
  const [shouldAlert, setShouldAlert] = useState(false);

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
      <h2>{name}</h2>
      <input
        disabled={isCountDownRunning}
        type="number"
        value={seconds}
        onChange={(event) => {
          setSeconds(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setIsCountDownRunning(true);
          setShouldAlert(true);
        }}
      >
        Start Countdown
      </button>
    </div>
  );
};
