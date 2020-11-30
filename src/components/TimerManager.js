import React, { useState } from "react";
import { Timer } from "./Timer";

export const TimerManager = () => {
  const [timerNames, setTimerNames] = useState(["Workout", "Chicken", "Study"]);

  const [name, setName] = useState("");

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const copyOfTimerNames = [...timerNames];
          copyOfTimerNames.push(name);
          setTimerNames(copyOfTimerNames);
          setName("");
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <button>Add New Timer</button>
      </form>

      {timerNames.map((timerName) => (
        <Timer name={timerName} />
      ))}
    </div>
  );
};
