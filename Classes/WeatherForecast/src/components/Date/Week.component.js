import find from "lodash/find";
import filter from "lodash/filter";
import React, { PureComponent, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Choise from "./Choise.component";
import { Button } from "@material-ui/core";
import Buttons from "./Buttons.component";

export default function Week(props) {
  const [togle, isTogle] = React.useState(true);
  let group = [
    { day: "Sunday", count: 0, detail: [], show: false },
    { day: "Monday", count: 1, detail: [], show: false },
    { day: "Tuesday", count: 2, detail: [], show: false },
    { day: "Wednesday", count: 3, detail: [], show: false },
    { day: "Thursday", count: 4, detail: [], show: false },
    { day: "Friday", count: 5, detail: [], show: false },
    { day: "Saturday", count: 6, detail: [], show: false },
  ];

  let arrayofWeather = props.list;
  arrayofWeather.map((item, i) => {
    let dateObj = new Date(item.dt * 1000);
    let day = dateObj.getDay();

    group[day].detail.push(item);
  });

  //console.log("group",group)

  function toggleTodo() {
    isTogle(!togle);
  }

  return (
    <div className="buttonGroup">
      <Buttons timezone={props.timezone} onToggle={toggleTodo} group={group} />
    </div>
  );
}
