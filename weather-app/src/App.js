import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar'
import WeatherApp from './Components/WeatherApp'



function App() {

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
      default:
        console.log(`Switch failed`)
    }
  };

  async function GetLocation() {
    // If user allows then this data will be gathered
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(latitude, longitude);
      updateLocation({
        coords: `${latitude},${longitude}`,
        name: 'User Location'
      })
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

  async function getData(coords) {
    const [lat, lon] = coords;
    const endpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${parseFloat(lat)}&lon=${parseFloat(lon)}&exclude=minutely,hourly&units=metric&appid=9feab22816732accf10687c5d41227d7`
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      updateCurrent(data.current)
      updateDaily(data.daily)
      setIsLoading(false);
    } catch (error) {
      console.log(`Whoops! ${error}`)
    }
  }

  // London
  // Lat: 51.509865
  // Lon: -0.118092

  const [current, updateCurrent] = useState([]);
  const [daily, updateDaily] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [location, updateLocation] = useState({coords: '51.50,-0.11', name: 'London'});



  // useEffect(() => {
  //   getData()
  // }, [])

  useEffect(() => {
    getData(location.coords.split(','))
  }, [location])

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar updateLocation={updateLocation} getLocation={GetLocation}/>
      </header>
      <main>
        <WeatherApp current={current} daily={daily} isLoading={isLoading} location={location} />
      </main>
    </div>
  );
}

export default App;
