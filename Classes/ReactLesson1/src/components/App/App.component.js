import React from "react";
import "./App.component.css";
import Header from "../Header/Header.component";
import TodoContainer from "../TodoContainer/TodoContainer.component";

class App extends React.Component {
  render() {
    return (
      <div className="appContainer">
        <Header />

        <h2 className="title">To do work place</h2>
        <TodoContainer />
      </div>
    );
  }
}

export default App;
