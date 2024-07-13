import React from 'react'
import './Forcast.css'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'

const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

const Forcast = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const forcastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInWeek))
  console.log(forcastDays);
  return (
    <>
      <label htmlFor="" className='title'>Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img src={`Images/${item.weather[0].icon}.png`} alt="weather" />
                  <label htmlFor="" className='day'>{forcastDays[idx]}</label>
                  <label htmlFor="" className="description">
                    {item.weather[0].description}
                  </label>

                  <label htmlFor="" className="min-max">
                    {Math.round(item.main.temp_min)}ºC / {" "}
                    {Math.round(item.main.temp_max)}ºC
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label htmlFor="">Pressure</label>
                  <label htmlFor="">{item.main.pressure} hPa</label>
                </div>

                <div className="daily-details-grid-item">
                  <label htmlFor="">Humidity</label>
                  <label htmlFor="">{item.main.humidity}%</label>
                </div>

                <div className="daily-details-grid-item">
                  <label htmlFor="">Clouds</label>
                  <label htmlFor="">{item.clouds.all}%</label>
                </div>

                <div className="daily-details-grid-item">
                  <label htmlFor="">Wind Speed: </label>
                  <label htmlFor="">{item.wind.speed} m/s</label>
                </div>

                <div className="daily-details-grid-item">
                  <label htmlFor="">Sea level:</label>
                  <label htmlFor="">{item.main.sea_level}m</label>
                </div>

                <div className="daily-details-grid-item">
                  <label htmlFor="">Feels like: </label>
                  <label htmlFor="">{Math.round(item.main.feels_like)}ºC</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}

      </Accordion>
    </>
  )
}

export default Forcast