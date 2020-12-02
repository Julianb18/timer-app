import React from "react";
import "./App.css";
import { TimerManager } from "./components/TimerManager";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <TimerManager />
      </div>
    </GlobalProvider>
  );
}

export default App;
