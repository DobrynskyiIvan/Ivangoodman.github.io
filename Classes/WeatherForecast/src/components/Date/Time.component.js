import React, { Component } from "react";
function Time(props) {
    let  dateObj = new Date(props.sec * 1000);
  let hours = dateObj.getUTCHours();
  let minutes = dateObj.getUTCMinutes();
  let seconds = dateObj.getSeconds();
  let timeString = hours.toString().padStart(2, '0') + ':' + 
  minutes.toString().padStart(2, '0') 
  
  return <span className="time">{timeString } </span> }
  
export  default  Time
 