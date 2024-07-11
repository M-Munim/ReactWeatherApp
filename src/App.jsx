import './App.css'
import CurrWeather from './Components/current-weather/CurrWeather';
import Search from './Components/Search/Search'

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }
  return (
    <div className='container'>
      <Search onSearchChange={handleOnSearchChange} />
      <CurrWeather />
    </div>
  )
}

export default App
