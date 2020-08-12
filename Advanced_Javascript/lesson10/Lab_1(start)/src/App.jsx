import React from "react";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import Counter3 from "./components/Counter3";
import CounterCls1 from "./components/CounterCls1";

const App = (props) => (
  <div className="container pt-3">
    <div className="row">
      <div className="col-md-6">
        <Counter1 />
      </div>
      <div className="col-md-6">
        <CounterCls1 />
      </div>
    </div>

    <hr />
    <Counter2 />
    <hr />
    <Counter3 />
  </div>
);

export default App;
