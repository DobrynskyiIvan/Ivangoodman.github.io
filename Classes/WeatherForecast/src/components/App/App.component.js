import React, { Component, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Fab } from "@material-ui/core";
import blueGrey from "@material-ui/core/colors/blueGrey";

import AddIcon from "@material-ui/icons/Add";
import MapDisplayComponent from "../GoogleMap/GoogleMap.component";
import { Cordinates } from "../../context";
import "../App/App.component.css";
import TextOutput from "../Text/TextOutput.component";
import ChoseOption from "../Text/ChoseOption.component";
import Post from "../Text/Post.component";
import LoaderComponent from "../Loader/Loader.component";

import Slide from "../Carousel/Slide.component";

const api = {
  key: "a20076d10bad57cf71e1c2f13a832e72",
  url: "https://api.openweathermap.org/data/2.5/",
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      weather: {},
      isOpen: false,
      link: "",
      loading:  true ,
      startMessage: true,
      open: (localStorage.getItem("storageCount") === null) ? false : true,
    };
    this.myRef = React.createRef();
    this.child = React.createRef();
    this.addSlide = React.createRef();
    this.sliderRef = React.createRef()
  }
  asyncCallbyCordinates(lat, lng) {
    let url = `${api.url}forecast?lat=${lat}&lon=${lng}&units=metric&APPID=${api.key}`;
    this.loadJson(url).catch(alert); // Error: 404 (4)
  }
  onClick = () => {
    this.child.current.scroll();
  };

  scrollToMyRef = () =>
    window.scrollTo({
      top: document.body.scrollHeight,

      behavior: "smooth",
    }); // run this method to execute scrolling.

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.asyncCallbyCordinates(
          position.coords.latitude,
          position.coords.longitude
        );
      });
    } else {
      alert("Geoloaction is not supported by your browser");
    }
  }

  // ======== search city weather  by input
  search(evt) {
    if (evt.key == "Enter") {
      let Link = `${api.url}weather?q=${this.state.query}&units=metric&APPID=${api.key}`;
      this.setState({ link: Link });
      this.fetchFun(Link);
      this.state.query = "";
    }
  }

  //=========================fetch call by input
  fetchFun(link) {
    fetch(link)
      .then((res) => res.json())
      .then((result) => {
        // console.log("result:", result);
        this.setState({ weather: result });
        this.setState({ loading: false });
        this.setState({ startMessage: false });
      });
  }

  storage() {
    let name=(typeof this.state.weather.city != "undefined" )?(this.state.weather.city.name):this.state.weather.name;
    if (localStorage.getItem("storageCount") === null) {
      let sliderCity = [];

      sliderCity.push(name);
      let count = JSON.stringify(sliderCity);
      localStorage.setItem("storageCount", count);
      this.setState({
        open: true,
      });

      return;
    }
    let sliderCity = JSON.parse(localStorage.getItem("storageCount"));
    if (!sliderCity.includes(name)) {
      // this.setState({
      //   open: false,
      // });
      sliderCity.push(name);
      let count = JSON.stringify(sliderCity);
      localStorage.setItem("storageCount", count);

      this.setState({
        open: true,
      });
      this.addSlide.current.rerender();
    }
  }

  onInputChange(e) {
    return this.setState({ query: e.target.value });
  }

  //======================== async function for click on map
  async loadJson(url) {
    // (1)
    let response = await fetch(url); // (2)

    if (response.status == 200) {
      let json = await response.json(); // (3)
      // console.log("json", json);
      this.setState({ weather: json });
      console.log(this.state.weather);
      this.setState({ loading: false });
      this.setState({ startMessage: false });
      return json;
    }

    throw new Error(response.status);
  }

  ///=========================== set  Weather   By   Cord
  setWeatherByCord(x) {
    this.asyncCallbyCordinates(x.latLng.lat(), x.latLng.lng());
  }
  curWeather(x) {
    this.asyncCallbyCordinates(x.lat, x.lng);
  }
  render() {
    let i = this.state.weather;

    return (
      <div
        className={
          typeof this.state.weather.main != "undefined"
            ? i.main.temp > 16
              ? "app warm"
              : "app"
            : "app"
        }
      >
        <main>
          {/* Search box for weather */}
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Search.."
              onChange={this.onInputChange.bind(this)}
              value={this.state.query}
              onKeyPress={this.search.bind(this)}
            />
          </div>
          {/* Open Map button */}
          <div className="mapButton">
            <Button
              type="submit"
              onClick={() => {
                this.setState({ isOpen: true });
                this.setState({ loading: false });
                this.scrollToMyRef();
              }}
              variant="contained"
              color="primary"
            >
              Open Map
            </Button>
          </div>
          {/* Loader component options */}
          <div className="loader">
            {this.state.startMessage && <ChoseOption />}
            {this.state.loading && <LoaderComponent />}
          </div>

          {/* Display code error when wrong search */}
          {this.state.weather.cod == "404" ? (
            <h2 className="error">{this.state.weather.message}....</h2>
          ) : (
            ""
          )}
          {/* Output for search container */}
          {typeof this.state.weather.main != "undefined" ? (
         <TextOutput weather={this.state.weather} > {
          // Button that adds city to list
          <Fab
            color="primary"
            aria-label="add"
            onClick={() => {
              this.storage();
              }}
          >
            <AddIcon />
          </Fab>
        }  </TextOutput>
           
          ) : (
            ""
          )}
          {/* Output for map container */}
          {typeof this.state.weather.city != "undefined" ? (
            <Post ref={this.child} post={this.state.weather}>
              {
                // Button that adds city to list
                <Fab
                  color="primary"
                  aria-label="add"
                  onClick={() => {
                    this.storage();
                    
                   // window.scrollTo(0, this.sliderRef.current.offsetTop)
                   window.scrollTo({
                    top: this.sliderRef.current.offsetTop,
                    behavior: "smooth",
                  });

                    }} 
                >
                  <AddIcon />
                </Fab>
              }
            </Post>
          ) : (
            ""
          )}
          {/* {Carousel}  delbutton={this.delButton.bind(this)}*/}
          {this.state.open && <div ref={this.sliderRef}><Slide  ref={this.addSlide} /></div> }

          {this.state.isOpen ? (
            <Cordinates.Provider value={this.setWeatherByCord.bind(this)}>
              <MapDisplayComponent curWeather={this.curWeather.bind(this)}>
                <div ref={this.myRef} className="mapButton">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      this.onClick();
                    }}
                  >
                    Go to Forecast
                  </Button>{" "}
                  <Button
                    variant="contained"
                    style={{ color: blueGrey[500] }}
                    type="submit"
                    onClick={() => {
                      this.setState({ isOpen: false });
                    }}
                  >
                    Close Map
                  </Button>
                </div>
              </MapDisplayComponent>
            </Cordinates.Provider>
          ) : null}
        </main>
      </div>
    );
  }
}
