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
      <div>
        <h1>Timer</h1>
        <h2>Зараз {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Timer;
