import React from "react";
import "./Kinder.component.scss";
class Kinder extends React.Component {
  renderData() {
    return (
      <button className="first" type="submit">
        First Component
      </button>
    );
  }

  clickFn() {
    console.log("CLICK!");
  }

  render() {
    return (
      <div>
        <ul className="main"> {this.renderData()} </ul>
      </div>
    );
  }
}

export default Kinder;
