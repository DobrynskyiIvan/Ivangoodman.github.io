import React, { useState } from "react";

const Counter2 = () => {
  const [count, setCount] = useState(0);

  const reset = () => setCount(0);
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <>
      <h1>Counter 2: {count}</h1>
      <button onClick={decrement} className="btn btn-primary mr-3">
        Decrement
      </button>
      <button onClick={reset} className="btn btn-warning mr-3">
        Reset
      </button>
      <button onClick={increment} className="btn btn-success">
        Increment
      </button>
    </>
  );
};

export default Counter2;
