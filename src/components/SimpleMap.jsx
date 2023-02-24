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

  console.log(lat)

  return (
    // Important! Always set the container height explicitly
    <div className="map-container">
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBnDH8dMtzmrwW8NsXKiLF8SEjDjQeMuv0" }}
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