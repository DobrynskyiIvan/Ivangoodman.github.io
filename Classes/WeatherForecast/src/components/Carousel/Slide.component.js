import React, { Component, useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import blueGrey from "@material-ui/core/colors/blueGrey";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slick.component.scss";
import TextOutput from "../Text/TextOutput.component";
import filter from "lodash/filter";
import remove from "lodash/remove";

const api = {
  key: "a20076d10bad57cf71e1c2f13a832e72",
  url: "https://api.openweathermap.org/data/2.5/",
};

export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      open: true,
    };
     
  }
  rerender() {
    this.fetchCall();
  }
  deleteItem(name) {
    if (localStorage.getItem("storageCount") === null) {
      return;
    }
    let sliderCity = JSON.parse(localStorage.getItem("storageCount"));

    if (sliderCity.includes(name)) {
      const index = sliderCity.indexOf(name);
      console.log(index);
      if (index > -1) {
        sliderCity.splice(index, 1);
      } 
      let count = JSON.stringify(sliderCity);
      localStorage.setItem("storageCount", count);
      let Data = this.state.data.concat();
      remove(Data, function (n) {
        return n.name == name;
      });

      console.log("Data", Data);
      this.setState({ data: Data });
    }
  }
  fetchCall() {
    let sliderCity = JSON.parse(localStorage.getItem("storageCount"));

    sliderCity.map((item) => {
      fetch(`${api.url}weather?q=${item}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          console.log("result:", result);
          this.setState({ data: [...this.state.data, result] });
        });
    });
  }
  componentWillMount() {
    this.fetchCall();
  }
  renderWeatherListCity() {
    return this.state.data.map((item, i) => {
      return (
        <div key={i}>
          <IconButton
            onClick={() => {
              this.deleteItem(item.name);
            }}
            aria-label="delete"
          >
            <DeleteIcon style={{ color: blueGrey[300] }} fontSize="large" />
          </IconButton>
          <TextOutput weather={item} />
        </div>
      );
    });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      dotsClass: "slick-dots slick-thumb",
      slidesToScroll: 1,
      autoplay: true, 
      centerPadding: "0px" ,
      centerMode: true,
      fade: true,
      swipeToSlide: true,
      responsive: [
      
        {
          breakpoint: 480,
          settings: {
            arrows:false
             
          }
        }
      ]
    };

    return (
      <div className="carousel">
        <Slider {...settings}>{this.renderWeatherListCity()}</Slider>
      </div>
    );
  }
}
