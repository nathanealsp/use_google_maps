const getPlacesByArea = async url => {
  const res = await fetch(url);
  const data = await res.json();
  console.log('data', data);
};

getPlacesByArea(process.env.REACT_APP_PLACES);
