import React, { useState, useEffect } from 'react';
import { getUserLocation } from '../utils/getUserLocation';

const GetLocation = () => {
  const [userLocation, setUserLocation] = useState(null);
  useEffect(() => {
    const fetchUserLocation = async () => {
      const { coords } = await getUserLocation();
      setUserLocation(coords);
      console.log('theyr', coords);
    };
    fetchUserLocation();
  }, []);

  console.log(userLocation !== null && userLocation.hasOwnProperty('latitude'));
  return <h1>Loading ...</h1>;
};

export default GetLocation;
