import React, { PureComponent } from "react";

import DateComponent from "../Date/Date.component";
import Time from "../Date/Time.component";
import { Detail } from "./Details.component";

function TextOutput(props) {
  let i = props.weather;
  return (
    <div>
      <div className="location-box">
        <div className="location">
          {i.name},{i.sys.country}
        </div>

        <div className="date">{<DateComponent date={new Date()} />}</div>

        <div className="date">
          Sunrise: <Time sec={i.sys.sunrise + i.timezone} />
        </div>
        <div className="date">
          Sunset: <Time sec={i.sys.sunset + i.timezone} />
        </div>
      </div>

      <Detail weather={i} />
    </div>
  );
}
export default TextOutput;
