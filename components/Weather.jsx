import React from 'react';
import Image from 'next/image';

const Weather = ({ data }) => {
    console.log(data)
  return (
      <div className='relative inpt m-auto mt-5'>
          <div className='flex justify-between items-center font-bold text-white p-4 shadow-lg bg-black/40 rounded-md result'>
              <div>
                  {/* <Image
                      alt="/"
                      src={`http://openweathermap.org/img/wn/${data.Weather[0].icon}@2x.png`}
                      width='100'
                      height='100'
                  /> */}
                  <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="/"/>
                  <p className='text-3xl text-center'>{ data.weather[0].main}</p>
              </div>
              <p className='text-6xl'>{ data.main.temp.toFixed(0)}&#176; F</p>
          </div>
          {/* bottom */}
          <div className='bg-black/50 text-white mt-8 px-4 py-3 text-center rounded-md'>
              <p className='text-3xl py-3'>Weather in {data.name}</p>
              <div className='flex justify-between items-center result'>
                  <div>
                      <p className='text-xl font-bold'>{data.main.feels_like.toFixed(0)}&#176; F</p>
                      <p className='pt-2'>Feels like</p>
                  </div>
                   <div>
                      <p className='text-xl font-bold'>{data.main.humidity} %</p>
                      <p className='pt-2'>Humidity</p>
                  </div>
                   <div>
                      <p className='text-xl font-bold'>{data.wind.speed.toFixed(0)} MPH</p>
                      <p className='pt-2'>Wind</p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Weather