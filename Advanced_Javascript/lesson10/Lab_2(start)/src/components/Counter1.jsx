import React, { useState, useEffect } from "react";

const Counter1 = () => {
  const [count, setCount] = useState(0);

  return <h3>Count: {count}</h3>;
};

export default Counter1;
