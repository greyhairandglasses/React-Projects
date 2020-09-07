import React from 'react'
import { timeConversion } from '../Utility/utils'

export default function WeatherTable({ current, isLoading }) {
  return (
    isLoading ?
      <div className="current-table">
        <h6 className="loading">Loading...</h6>
      </div>
      :
      <div className="current-table">
        <table>
          <tbody>
              
            <tr>
              <td>Sunrise</td>
              <td>{timeConversion(current.sunrise)}</td>
            </tr>
              
            <tr>
              <td>Sunset</td>
              <td>{timeConversion(current.sunset)}</td>
            </tr>
              
            <tr>
              <td>Feels Like</td>
              <td>{Math.round(current.feels_like) + '°C'}</td>
            </tr>
    
            <tr>
              <td>Desc.</td>
              <td>{current.weather[0].description}</td>
            </tr>
              
            <tr>
              <td>UV Index</td>
              <td>{Math.round(current.uvi)}</td>
            </tr>
              
            <tr>
              <td>Windspeed</td>
              <td>{current.wind_speed}m/s</td>
            </tr>
              
            <tr>
              <td>Humidity</td>
              <td>{current.humidity + '%'}</td>
            </tr>
              
          </tbody>
        </table>
      </div>
  )
}
