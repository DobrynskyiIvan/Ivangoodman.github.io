import React, { PureComponent,useState } from "react";
import PropTypes from "prop-types";
import DateComponent from "../Date/Date.component";
import Time from "../Date/Time.component";
import {WeatherDetail} from '../../context'

import Moment from "react-moment";
import "moment-timezone";
import { Detail } from "./Details.component";
import Week from "../Date/Week.component";

function Post(props) {
  const [current, setWeather] = React.useState();
  let i = props.post.city;
    function setCurrentWeather(obj){
      console.log("This is the object in parent function")
      setWeather(obj)
  }
  return (
    <div>
      <div className="location-box">
        <div className="location">
          {i.name},{i.country}
        </div>
        <div className="date"> {<DateComponent date={new Date()} />}</div>

        <div className="date">
          Sunrise: <Time sec={i.sunrise + i.timezone} />
        </div>
        <div className="date">
          Sunset: <Time sec={i.sunset + i.timezone} />
        </div>
      </div>
     
      
      <Detail weather={typeof current!=="undefined"?current:(props.post.list[0])} />
      <WeatherDetail.Provider value={{setCurrentWeather}}>
        <Week timezone={i.timezone} list={props.post.list} />
        </WeatherDetail.Provider>
    </div>
  );
}
export default Post;
