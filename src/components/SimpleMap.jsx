import React from "react";
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker"

// import './App.scss'

function SimpleMap({name, lat, lng }){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div className="map-container">
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={defaultProps.center}
          center={ { lat, lng } }
          defaultZoom={defaultProps.zoom}
          zoom={ 14 }
        >
        <Marker
          lat={lat}
          lng={lng}
          text={name}
        />
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default SimpleMap