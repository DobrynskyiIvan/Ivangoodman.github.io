import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import MapDisplayComponent from "../GoogleMap/GoogleMap.component";
import {Cordinates} from "../../context";
import "../App/App.component.css";
import TextOutput from "../Text/TextOutput.component";
import FetchComponent from "../Fatch/Fetch.component";
import Post from "../Text/Post.component";
import LoaderComponent from "../Loader/Loader.component";

const api = {
  key: "a20076d10bad57cf71e1c2f13a832e72",
  url: "https://api.openweathermap.org/data/2.5/",
};

// <FetchComponent url="http://example.com/posts" render={post => <Post post={post} />} />

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      weather: {},
      isOpen: false,
      link: "",
      loading: true,
    };
  }
  asyncCallbyCordinates(lat, lng) {
    let url = `${api.url}forecast?lat=${lat}&lon=${lng}&units=metric&APPID=${api.key}`;
    this.loadJson(url).catch(alert); // Error: 404 (4)
  }
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
        console.log("result:", result);
        this.setState({ weather: result });
        this.setState({ loading: false });
      });
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
      console.log("json", json);
      this.setState({ weather: json });
      console.log(this.state.weather);
      this.setState({ loading: false });
      return json;
    }

    throw new Error(response.status);
  }

  ///=========================== set  Weather   By   Cord
  setWeatherByCord(x) {
    this.asyncCallbyCordinates(x.latLng.lat(), x.latLng.lng());
  }
  curWeather(x) {
    console.log(x);
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
              }}
              variant="contained"
              color="primary"
            >
              Open Map
            </Button>
          </div>
          <div className="loader">
            {this.state.loading && <LoaderComponent />}
          </div>

          {/* //Try to create component that will show answer depent from result 
          {this.state.link ? ( <FetchComponent url={this.state.link} render={post => <Post post={post}/>} />
          
          ) : (  
            ""
          )} */}

          {/* Display code error when wrong search */}
          {this.state.weather.cod == "404" ? (
            <h2 className="error">{this.state.weather.message}....</h2>
          ) : (
            ""
          )}
          {/* Output for search container */}
          {typeof this.state.weather.main != "undefined" ? (
            <TextOutput weather={this.state.weather} />
          ) : (
            ""
          )}
          {/* Output for map container */}
          {typeof this.state.weather.city != "undefined" ? (
            <Post post={this.state.weather} />
          ) : (
            ""
          )}
          {/* Map container */}
          {this.state.isOpen ? (
            <Cordinates.Provider value={this.setWeatherByCord.bind(this)}>
              <MapDisplayComponent curWeather={this.curWeather.bind(this)}>
                <div className="mapButton">
                  <Button
                    variant="contained"
                    color="secondary"
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
