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
import Cordinates from "../../context";
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
      defaultCenter={{ lat: props.position.lat, lng: props.position.lng }}
      onClick={props.onMapClick}
      defaultOptions={{ styles: MapStyle }}
    >
      {props.isMarkerShown && (
        <Marker
          position={{ lat: props.position.lat, lng: props.position.lng }}
          onClick={props.onMarkerClick}
        />
      )}
      {!props.isMarkerShown && (
        <InfoWindow
          position={{ lat: props.position.lat, lng: props.position.lng }}
        >
          <div>
            <p>Click to check the weather</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
});

export default class MyFancyComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isMarkerShown: false,
      position: {
        lat: 36.721275,
        lng:-4.421399
      },
    };
  }
  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker() {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 2000);
  }

  handleMarkerClick(e) {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  }
  onMapClick(e) {
    // console.log("event map:",e.latLng.lat() )
    // console.log("event map:",e.latLng.lng() )
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
      <div className="mapContainer"><div className="mapBorder">   {this.props.children}
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick.bind(this)}
        onMapClick={this.onMapClick.bind(this)}
        position={this.state.position}
      /></div>
     
      </div>
    );
  }
}
MyFancyComponent.contextType = Cordinates;
