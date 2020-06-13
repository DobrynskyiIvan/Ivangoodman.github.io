import React, { PureComponent } from "react";

function degToCompass(num) {
  var val = Math.floor(num / 22.5 + 0.5);
  var arr = [
    "North",
    "North-Northeast",
    "Northeast",
    "East-Northeast",
    "East",
    "East-Southeast",
    "Southeast",
    "South-Southeast	",
    "South",
    "South-Southwest",
    "Southwest",
    "West-Southwest",
    "West",
    "West-Northwes",
    "Northwest",
    "North-Northwest",
  ];

  return <span className="wind">{arr[val % 16]} </span>;
}
export function Detail(props) {
  let i = props.weather;
  let url = ` http://openweathermap.org/img/wn/${i.weather[0].icon}@2x.png`;
  return (
    <div className="weather-box">
      <div className="temp">{Math.round(i.main.temp)} °C</div>

      <div className="weather">
        <img src={url} />
      </div>
      <div className="weather">{i.weather[0].description}</div>
      <div className="weather">Humidity: {i.main.humidity} %</div>
      <div className="weather">Pressure: {i.main.pressure} hPa</div>
      <div className="weather">
        Wind direction: {degToCompass(i.wind.deg)} speed:
        <span className="speed"> {i.wind.speed} meter/sec </span>{" "}
      </div>
    </div>
  );
}
