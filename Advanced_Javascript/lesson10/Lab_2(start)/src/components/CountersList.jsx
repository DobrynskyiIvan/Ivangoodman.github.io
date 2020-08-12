import React from "react";
import Counter from "./Counter";
import Counter1 from "./Counter1";
import CounterCls from "./CounterCls";

const CountersList = () => {
  return (
    <div className="row">
      <div className="col-md-6 mb-5">
        <Counter />
      </div>
      <div className="col-md-6  mb-5">
        <CounterCls />
      </div>
      <div className="col-md-6  mb-5">
        <Counter1 />
      </div>
    </div>
  );
};

export default CountersList;
