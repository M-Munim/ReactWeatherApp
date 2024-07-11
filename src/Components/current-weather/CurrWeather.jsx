import React from 'react'
import './current-weather.css'

const CurrWeather = () => {
  return (
    <div className='weather'>
      <div className="top">
        <div>
          <p className="city">Peshawar</p>
          <p className="weather-desc">Sunny</p>
        </div>
        <img src="/Images/01d.png" className='weather-icon' alt="weather" />
      </div>

      <div className="bottom">
        <p className="temperature">38ºC</p>

        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">44ºC</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">2 m/s</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">15%</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">pressure</span>
            <span className="parameter-value">15hpa</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CurrWeather