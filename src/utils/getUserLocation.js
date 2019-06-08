const getCurrentPosition = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

export const getUserLocation = async () => {
  try {
    const userPosition = await getCurrentPosition();
    console.log('USER ALLOWED LOCATION', userPosition);
    return userPosition;
  } catch (error) {
    console.error('USER REJECTED POSITION', error);
    return error;
  }
};

getUserLocation();
