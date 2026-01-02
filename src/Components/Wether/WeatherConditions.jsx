import React, { useContext } from "react";
import tempMax from "../../assets/icons/temp-max.svg"
import tempMin from "../../assets/icons/temp-min.svg"
import humidityImg from "../../assets/icons/humidity.svg"
import cloudImg from "../../assets/icons/cloud.svg"
import windImg from "../../assets/icons/wind.svg"
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
        The climate is <u>{climate}</u>
      </p>
      <ul class="space-y-6 lg:space-y-6">
        <li class="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp max</span>
          <div class="inline-flex space-x-4">
            <p>{Math.round(maxTemperature)}°</p>
            <img src={tempMax} alt="temp-max" />
          </div>
        </li>
        <li class="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp min</span>
          <div class="inline-flex space-x-4">
            <p>{Math.round(minTemperature)}°</p>
            <img src={tempMin} alt="temp-min" />
          </div>
        </li>
        <li class="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Humadity</span>
          <div class="inline-flex space-x-4">
            <p>{humidity}%</p>
            <img src={humidityImg} alt="humidity" />
          </div>
        </li>
        <li class="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Cloudy</span>
          <div class="inline-flex space-x-4">
            <p>{cloudPercentage}%</p>
            <img src={cloudImg} alt="cloudy" />
          </div>
        </li>
        <li class="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Wind</span>
          <div class="inline-flex space-x-4">
            <p>{wind}km/h</p>
            <img src={windImg} alt="wind" />
          </div>
        </li>
      </ul>
    </div>
  );
}
