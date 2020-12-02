import React, { createContext, useReducer, useEffect } from "react";
import { AppReducer } from "./AppReducer";

// Global state used to be able to access state and functions in any component

// initial state
const initialState = {
  timerNames: localStorage.getItem("timerNames")
    ? JSON.parse(localStorage.getItem("timerNames"))
    : [{ name: "Study", id: 1 }],
};

// create context
export const GlobalContext = createContext(initialState);

// Provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("timerNames", JSON.stringify(state.timerNames));
  }, [state]);

  //actions

  const addTimerName = (timerName) => {
    dispatch({ type: "ADD_TIMER_NAME", payload: timerName });
  };

  const removeTimerName = (timerName) => {
    dispatch({ type: "REMOVE_TIMER_NAME", payload: timerName });
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
