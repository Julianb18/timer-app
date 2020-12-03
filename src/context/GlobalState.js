import React, { createContext, useReducer, useEffect } from "react";
import { AppReducer } from "./AppReducer";

// Global state used to be able to access state and functions in any component

// initial state
const initialState = {
  timerNames: localStorage.getItem("timerNames")
    ? JSON.parse(localStorage.getItem("timerNames"))
    : [
        { tName: "Study", id: 1 },
        { tName: "Workout", id: 2 },
      ],
};

// create context
export const GlobalContext = createContext(initialState);

// Provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // update local host
  useEffect(() => {
    localStorage.setItem("timerNames", JSON.stringify(state.timerNames));
  }, [state]);

  //actions

  const addTimerName = (tName) => {
    dispatch({ type: "ADD_TIMER_NAME", payload: tName });
  };

  const removeTimerName = (id) => {
    dispatch({ type: "REMOVE_TIMER_NAME", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        timerNames: state.timerNames,
        addTimerName,
        removeTimerName,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
