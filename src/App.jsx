import { useState } from 'react';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import './App.css'
import CurrWeather from './Components/current-weather/CurrWeather';
import Search from './Components/Search/Search'

function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    const forcastFetch = fetch(`${WEATHER_API_URL}/forcast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);


    Promise.all([currentWeatherFetch, forcastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse })
        setForecast({ city: searchData.label, ...forecastResponse })
      })

      .catch((err) => console.log(err));
  }

  console.log(currentWeather)
  console.log(forecast)

  return (
    <div className='container'>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrWeather data={currentWeather} />}
    </div>
  )
}

export default App
