import React, { Component } from 'react'
import PropTypes from 'prop-types'


const api={
    key:'a20076d10bad57cf71e1c2f13a832e72',
    url:'https://api.openweathermap.org/data/2.5/'}

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          query: "",
          weather:{}
        };
      }
    search(evt){
        if(evt.key=='Enter'){
            fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res=>res.json())
            .then(result=>this.setState({weather:result}));
        }

    }
    dateBuilder(d){
       const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const days=  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      let day=days[d.getDay()];
      let date=d.getDate();
      let month=months[d.getMonth()];
      let year=d.getFullYear();
 
      return `${day} ${date} ${month} ${year}  `
    }


    render(){
          return(
            <div className="app "> 
            <main>
                <div className="search-box"><input type="text"
                 className="search-bar" 
                 placeholder='Search..'
                 />
                </div>
                <div className="location-box">
                    <div className="location">New York City,Us</div>
                    <div className="date">{this.dateBuilder(new Date())}</div> 
                </div>
                <div className="weather-box">
                    <div className="temp">15 c</div>
                    <div className="weather">Sunny</div>
                </div>
            </main></div>
        )
    }
}