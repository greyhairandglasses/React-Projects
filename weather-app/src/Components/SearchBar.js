import React from 'react'
import { locationData } from '../Utility/locationData'


export default function SearchBar({ updateLocation, getLocation }) {

  return (
    <div className="search-bar">
      <label htmlFor="locations">Choose a city: </label>
      <select
        name="locations"
        className="search-box"
        id="locations"
        autoFocus
      >
        {locationData.map(location => {
          const {lon, lat} = location.coord;
          return <option
            key={location.id}
            value={[lat, lon]}
            onClick={(event) => updateLocation(
              { coords: event.target.value, name: location.name }
            )}>
            {location.name}
          </option>
        })}
      </select>
      <button className="btn gps-btn" onClick={() => getLocation()}><span>Use my location</span></button>
    </div>
  )
}
