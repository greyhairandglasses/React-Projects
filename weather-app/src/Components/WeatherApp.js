import React from 'react'
import WeatherTable from './WeatherTable'
import WeatherTile from './WeatherTile'

export default function WeatherApp({ daily, current, isLoading, location }) {
  return (
    <div className="weather-container flex">
      <div className="current flex">
        <h2 className="location-heading">{location.name}</h2>
        <WeatherTile dailyWeather={daily} isLoading={isLoading} day={0} />
        <WeatherTable current={current} isLoading={isLoading} />
      </div>
      <div className="five-day-forecast flex">
        <h3 className="forecast-header">5 Day Forecast</h3>
        <WeatherTile dailyWeather={daily} isLoading={isLoading} day={1} />
        <WeatherTile dailyWeather={daily} isLoading={isLoading} day={2} />
        <WeatherTile dailyWeather={daily} isLoading={isLoading} day={3} />
        <WeatherTile dailyWeather={daily} isLoading={isLoading} day={4} />
        <WeatherTile dailyWeather={daily} isLoading={isLoading} day={5} />
      </div>
    </div>
  )
}
