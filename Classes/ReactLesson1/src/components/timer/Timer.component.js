import React from "react";
import "./Timer.component.scss";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div  >
        <h2>Timer</h2>
        <h2>Now is:<i> {this.state.date.toLocaleTimeString()}</i>.</h2>
      </div>
    );
  }
}

export default Timer;
