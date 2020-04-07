import React from "react";

const Timer = ({ value, step, onIncrement, onDecrement }) => (
  <div>
    <div>Timer</div>
    <button type="button" onClick={() => onDecrement(step)}>
      Decrement
    </button>
    <div>Timer:{value}</div>
    <button type="button" onClick={() => onIncrement(step)}>
      Increment
    </button>
  </div>
);

export default Timer;
