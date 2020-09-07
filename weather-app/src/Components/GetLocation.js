function currentError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.log("User denied the request for Geolocation.")
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Location information is unavailable.")
      break;
    case error.TIMEOUT:
      console.log("The request to get user location timed out.")
      break;
    case error.UNKNOWN_ERROR:
      console.log("An unknown error occurred.")
      break;
  }
}; 

async function GetLocation() {
  // If user allows then this data will be gathered
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);
    return {
      lat: latitude,
      lon: longitude,
    }
  }
  // If user disallows GPS info, then error displayed
  // TODO - Render error message on the actual page, not just the console
  // Handle success or fail of getting user permission
  if (!navigator.geolocation) {
    currentError();
  } else {
    console.log('Locating…');
    navigator.geolocation.getCurrentPosition(success, currentError);
  }
}

export default GetLocation