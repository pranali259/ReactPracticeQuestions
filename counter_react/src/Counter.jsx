import React, { useState } from "react";
import './index.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count+1);
  }

  const handleDecrement = () => {
    setCount(count-1);
  }

  const handleReset = () => {
    setCount(0);
  }
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
