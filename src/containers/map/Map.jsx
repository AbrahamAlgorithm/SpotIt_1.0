import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Get the user's location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyCHfrE3w-fx8VnRYGu3tGYYoxDdr3pXvBQ">
      <GoogleMap
        mapContainerStyle={{ height: '400px', width: '100%' }}
        zoom={12}
        center={userLocation}
      >
        {userLocation && <Marker position={userLocation} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;