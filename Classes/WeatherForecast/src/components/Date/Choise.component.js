import React, { Component } from "react";
function Choise(props) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dateObj = new Date(props.sec * 1000);
  let day = days[dateObj.getDay()];

  let hours = dateObj.getUTCHours();
  let minutes = dateObj.getUTCMinutes();

  let timeString =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0");
  console.log("Day:", day);

  return day;
}

export default Choise;

// <FetchComponent url="http://example.com/posts" render={post => <Post post={post} />} />
