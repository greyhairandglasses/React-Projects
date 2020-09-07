import React from 'react'
import {dayConversion} from '../Utility/utils'

export default function WeatherTile({ dailyWeather, isLoading, day }) {
  return (
    isLoading ?
      <div className="weather-tile-display">
        <h6 className="loading">Loading...</h6>
      </div>
      :
      <div className="weather-tile-container" key={day} onClick={() => console.log(dailyWeather[day])}>
        <h6 className="weather-tile-day ellipsis">{dayConversion(dailyWeather[day].dt)}</h6>
        <img className="weather-tile-img" src={`http://openweathermap.org/img/wn/${dailyWeather[day].weather[0].icon}@2x.png`} alt="Weather description" />
        <p className="weather-tile-desc">{dailyWeather[day].weather[0].description}</p>
        <p className="weather-tile-temp">{Math.round(dailyWeather[day].feels_like.day) + '°C'}</p>
    </div>
  )
}
