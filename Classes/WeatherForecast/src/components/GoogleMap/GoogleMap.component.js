import React, { useContext } from "react";
import { compose, withProps, withState, withHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import MapStyle from "../GoogleMap/Google.map.style";
import { Cordinates } from "../../context";
import { Button } from "@material-ui/core";
//  const googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDatFfesU3-FBd0sriR1RGEYU4u65nLRSU&libraries=geometry,drawing,places';

// render() {
//   return this.props.modalIsOpen
//     ? <GoogleMap />
//     : null;
// }

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDatFfesU3-FBd0sriR1RGEYU4u65nLRSU&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),

  withScriptjs,
  withGoogleMap
)((props) => {
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={props.position}
      onClick={props.onMapClick}
      defaultOptions={{ styles: MapStyle }}
    >
      {props.isMarkerShown && (
        <Marker
          icon={{
            url:
              "https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/256/MapMarker_Marker_Outside_Chartreuse.png",
            scaledSize: new google.maps.Size(45, 45),
          }}
          position={props.position}
          onClick={props.onMarkerClick}
        />
      )}
      <Marker
        icon="https://www.robotwoods.com/dev/misc/bluecircle.png"
        position={props.currentPosition}
      />
      {!props.isMarkerShown && (
        <InfoWindow
          position={{ lat: props.position.lat, lng: props.position.lng }}
        >
          <div>
            <p>Click to check the weather</p>
          </div>
        </InfoWindow>
      )}
      <div className="currentPositionButton">
        {" "}
        <Button
          variant="contained"
          color="primary"
          onClick={props.handleClick.bind(this)}
        >
          Current Position
        </Button>
      </div>
    </GoogleMap>
  );
});

export default class MapDisplayComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isMarkerShown: false,
      position: {
        lat: 36.721275,
        lng: -4.421399,
      },
      currentPosition: {
        lat: 36.721275,
        lng: -4.421399,
      },
    };
  }

  geolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          currentPosition: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
          position: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        });
      });
    } else {
      alert("Geoloaction is not supported by your browser");
    }
  }
  async handleClick() {
    await this.geolocation();

    this.props.curWeather(this.state.position);
  }
  componentDidMount() {
    this.geolocation();

    this.delayedShowMarker();
  }

  delayedShowMarker() {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  }

  handleMarkerClick(e) {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  }
  onMapClick(e) {
    this.context(e);

    this.setState({
      position: {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      },
    });
  }

  render() {
    return (
      <div className="mapContainer">
        <div className="mapBorder">
          {" "}
          {this.props.children}
          <MyMapComponent
            isMarkerShown={this.state.isMarkerShown}
            onMarkerClick={this.handleMarkerClick.bind(this)}
            onMapClick={this.onMapClick.bind(this)}
            position={this.state.position}
            handleClick={this.handleClick.bind(this)}
            currentPosition={this.state.currentPosition}
          />
        </div>
      </div>
    );
  }
}
MapDisplayComponent.contextType = Cordinates;
