import React, {
  PureComponent,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import PropTypes from "prop-types";
import DateComponent from "../Date/Date.component";
import Time from "../Date/Time.component";
import { WeatherDetail, Scroll } from "../../context";

import Moment from "react-moment";
import "moment-timezone";
import { Detail } from "./Details.component";
import Week from "../Date/Week.component";
const scrollToRef = (ref) =>
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: "smooth",
  });

// General scroll to element function
function Post(props, ref) {

  const [current, setWeather] = React.useState();
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    scroll: () => {
      scrollToRef(myRef);
    }
  }));


  let i = props.post.city;
  function setCurrentWeather(obj) {
    setWeather(obj);
  }
  return (
    <div>
      <div className="location-box">
        <div className="location">
          {i.name},{i.country}
        </div>
        <div className="date"> {<DateComponent date={new Date()} />}</div>

        <div className="date sun">
          Sunrise: <Time sec={i.sunrise + i.timezone} />
        </div>
        <div className="date sun">
          Sunset: <Time sec={i.sunset + i.timezone} />
        </div>
      </div>
      <div ref={myRef}  className="descriptionWrapper">
        <Detail
          weather={
            typeof current !== "undefined" ? current : props.post.list[0]
          }
        />
        <Scroll.Provider value={{ executeScroll }}>
          {" "}
          <WeatherDetail.Provider value={{ setCurrentWeather }}>
            <Week timezone={i.timezone} list={props.post.list} />
          </WeatherDetail.Provider>
        </Scroll.Provider>
      </div>
    </div>
  );
}
Post = forwardRef(Post);
export default Post;
