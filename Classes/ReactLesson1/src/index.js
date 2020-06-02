import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.component";
import "./styles/sass/style.scss";
import Kinder from "./components/kinder/Kinder.component";
import Timer from "./components/Timer/Timer.component";
import UserID from "./components/UserID/UserID.component";
import Course from "./components/Course/Course.component";
import LoginControl from "./components/Login/Login.component";
import Toggle from "./components/Toggle/Toggle.component";

ReactDOM.render(<Course />, document.querySelector("#course"));
ReactDOM.render(<App />, document.querySelector("#app"));
ReactDOM.render(<Kinder />, document.querySelector("#main"));
ReactDOM.render(<Timer />, document.getElementById("root"));
const comment = {
  date: new Date(),
  text: "Some part from React",
  author: {
    name: "Hello Find",
    avatarUrl: "https://placekitten.com/g/64/64",
  },
};

ReactDOM.render(
  <UserID date={comment.date} text={comment.text} author={comment.author} />,
  document.getElementById("userID")
);

/* eslint-disable react/prop-types */
ReactDOM.render(<Toggle />, document.getElementById("click"));

ReactDOM.render(<LoginControl />, document.getElementById("second"));
