import React from "react";
import "./App.component.css";
import Header from "../Header/Header.component";
import TodoContainer from "../TodoContainer/TodoContainer.component";
import { Link, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="appContainer">
        <Header /> 
        <h2 className="title">To do work place</h2> 
        <div>
          <Link to="/">Home</Link>
          <Link to="/deleted">Deleted</Link>
        </div>
        <Switch>
          <Route exact path="/">
            <TodoContainer status={true} />
          </Route>
          <Route  path="/deleted">
            <TodoContainer status={false} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
