import React from "react";
import "./App.css";
import Timer from "./components/Timer/TimerContainer";
import StepSelector from "./components/StepSelector/StepSelector";

function App() {
  return (
    <div className="App">
      <Timer />
      <StepSelector />
    </div>
  );
}

export default App;
