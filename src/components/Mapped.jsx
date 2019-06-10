import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import { amsterdam, amsterdamRestuarants } from '../utils/data';

function Map() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  return (
    <GoogleMap defaultCenter={amsterdam} defaultZoom={15}>
      {amsterdamRestuarants.map(place => (
        <Marker key={place.id} position={{ lat: place.lat, lng: place.lng }} onClick={() => setSelectedPlace(place)} />
      ))}
      {selectedPlace && (
        <InfoWindow
          position={{ lat: selectedPlace.lat, lng: selectedPlace.lng }}
          onCloseClick={() => setSelectedPlace(null)}
        >
          <div>details</div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

// This wraps the map with withScriptjs(which loads the script in the dom (loads all google libraries))
const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Mapped() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <WrappedMap
        googleMapURL={`${process.env.REACT_APP_GOOGLE_MAPS_URL}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
