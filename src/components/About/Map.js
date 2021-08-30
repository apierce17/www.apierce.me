import React from "react";
import GoogleMapReact from 'google-map-react';

import "./About.css"

require ('dotenv').config()

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 35.483406,
      lng: -86.460272
    },
    zoom: 9
  };

  return (
    // Important! Always set the container height explicitly
    <div id="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ 
            key: process.env.REACT_APP_GOOGLE_MAP,
            mapIds: ["2796bd590462a55"],
        }}
        options={{
            mapId: "2796bd590462a55",
       }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
      </GoogleMapReact>
    </div>
  );
}
