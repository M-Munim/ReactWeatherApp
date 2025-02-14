import React from 'react'
import './current-weather.css'

const CurrWeather = ({ data }) => {
  return (
    <div className='weather'>
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-desc">{data.weather[0].description}</p>
        </div>
        <img src={`/Images/${data.weather[0].icon}.png`} className='weather-icon' alt="weather" />
      </div>

      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)} ºC</p>

        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">{Math.round(data.main.feels_like)} ºC</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity} %</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">pressure</span>
            <span className="parameter-value">{data.main.pressure} hpa</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CurrWeather