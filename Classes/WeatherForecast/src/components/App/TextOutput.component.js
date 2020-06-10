import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import DateComponent from "../Date/Date.component";
import Time from '../Date/Time.component';
import { Detail } from '../Text/Details.component';




 function TextOutput(props){

    let i = props.weather;
  // let url=` http://openweathermap.org/img/wn/${i.weather[0].icon}@2x.png`
   
    return   <div> 
    <div className="location-box">
      <div className="location">
        {i.name},{i.sys.country}
      </div>
    
      <div className="date">{<DateComponent date={new Date()}/>}</div>
      
      <div className="date">Sunrise: <Time sec= { (  i.sys.sunrise +i.timezone )}/></div>  
     <div className="date">Sunset:  <Time sec= { (i.sys.sunset+ i.timezone )}/></div>
    </div>
  {/* <div className="weather-box">
    <div className="temp">{Math.round(i.main.temp)}°C</div>
    <div className="weather"><img src={url} /></div>
    <div className="weather">Humidity: {i.main.humidity}%</div>
    <div className="weather">Pressure: {i.main.pressure}hPa</div>

    <div className="weather">{i.weather[0].description}</div>

    
    <div className="weather">Wind: {degToCompass(i.wind.deg)  } </div>
    <div className="weather">speed: {i.wind.speed } meter/sec</div> 
  </div> */}


  <Detail weather={i} />
  </div>

}
export default  TextOutput