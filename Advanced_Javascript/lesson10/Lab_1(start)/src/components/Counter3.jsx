import React, { useState } from "react";

const Counter3 = () => {
  let [countOb, setCountOb] = useState(0);

  const reset = () => {setCountOb(0)};

  const increment = () => {setCountOb(++countOb)};

  const decrement = () => {setCountOb(--countOb)};

  return (
    <>
      <h1>
        {/* {countOb.message}: {countOb.count} */}
        {countOb } 
      </h1>
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

export default Counter3;
