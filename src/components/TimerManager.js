import React, { useState, useContext } from "react";
import { Timer } from "./Timer";
import { GlobalContext } from "../context/GlobalState";

export const TimerManager = () => {
  // const [timerNames, setTimerNames] = useState(["Study"]);
  const [name, setName] = useState("");
  const { timerNames, addTimerName } = useContext(GlobalContext);

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addTimerName(name);
          console.log(timerNames);

          // const copyOfTimerNames = [...timerNames];
          // copyOfTimerNames.push(name);
          // setTimerNames(copyOfTimerNames);
          setName("");
        }}
      >
        <div className="timer-container">
          <h2 className="main-header">Add a Timer</h2>
          <div>
            <input
              className="input-field"
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />

            <button className="btn">Add</button>
          </div>
        </div>
      </form>

      {timerNames.map((timerName) => (
        <Timer name={timerName} key={timerName} />
      ))}
    </div>
  );
};
