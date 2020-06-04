import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.component";
import "./styles/sass/style.scss";
 
import Timer from "./components/Timer/Timer.component";
import UserID from "./components/UserID/UserID.component";
import Course from "./components/Course/Course.component";
import LoginControl from "./components/Login/Login.component";
 
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

ReactDOM.render(<Course />, document.querySelector("#course"));
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#app")
);
 
ReactDOM.render(<Timer />, document.getElementById("root"));


const comment = {
  date: new Date(),
  text: "Some text",
  author: {
    name: "Convert end use DATA from Fetch",
    avatarUrl: "https://placekitten.com/g/64/64",
  },
};

ReactDOM.render(
  <UserID date={comment.date} text={comment.text} author={comment.author} />,
  document.getElementById("userID")
);

/* eslint-disable react/prop-types */
 

ReactDOM.render(<LoginControl />, document.getElementById("second"));
