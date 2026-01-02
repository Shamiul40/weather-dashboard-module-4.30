import React, { useContext } from "react";
import tempMax from "../../assets/icons/temp-max.svg"
import tempMin from "../../assets/icons/temp-min.svg"
import humidity from "../../assets/icons/humidity.svg"
import cloud from "../../assets/icons/cloud.svg"
import wind from "../../assets/icons/wind.svg"
import { WeatherContext } from "../../Context";

export default function WeatherConditions() {

  const {weatherData} = useContext(WeatherContext);

  const {
  
    
    
    maxTemperature,
    minTemperature,
    humidity,
    cloudPercentage,
    wind,
    climate,
    
  } = weatherData

  return (
    <div>
      <p class="text-sm lg:text-lg font-bold uppercase mb-8">
        thunderstorm with light drizzle
      </p>
      <ul class="space-y-6 lg:space-y-6">
        <li class="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp max</span>
          <div class="inline-flex space-x-4">
            <p>19°</p>
            <img src={tempMax} alt="temp-max" />
          </div>
        </li>
        <li class="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp min</span>
          <div class="inline-flex space-x-4">
            <p>19°</p>
            <img src={tempMin} alt="temp-min" />
          </div>
        </li>
        <li class="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Humadity</span>
          <div class="inline-flex space-x-4">
            <p>58%</p>
            <img src={humidity} alt="humidity" />
          </div>
        </li>
        <li class="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Cloudy</span>
          <div class="inline-flex space-x-4">
            <p>86%</p>
            <img src={cloud} alt="cloudy" />
          </div>
        </li>
        <li class="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Wind</span>
          <div class="inline-flex space-x-4">
            <p>5km/h</p>
            <img src={wind} alt="wind" />
          </div>
        </li>
      </ul>
    </div>
  );
}
