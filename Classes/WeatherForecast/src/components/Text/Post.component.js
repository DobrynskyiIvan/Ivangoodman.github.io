import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import DateComponent from "../Date/Date.component";
import Time from "../Date/Time.component";

import Moment from "react-moment";
import "moment-timezone";
import { Detail } from "./Details.component";

function Post(props) {
  let i = props.post.city;
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
      <Detail weather={props.post.list[0]} />
    </div>
  );
}
export default Post;
