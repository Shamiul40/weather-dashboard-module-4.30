import React, { useContext } from "react";
import pinIcon from "../../assets/pin.svg";
import { WeatherContext } from "../../Context";
import { getDateTime } from "../../utils/date";

export default function WeatherHeadline() {
  const { weatherData } = useContext(WeatherContext);
  const { location, climate, temperature, time } = weatherData;
  return (
    <div>
      <div class="max-md:flex items-center justify-between md:-mt-10">
        <img src="./assets/cloud.svg" alt="cloud" />
        <div class="max-md:flex items-center max-md:space-x-4">
          <h1 class="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>
          <div class="flex items-center space-x-4 md:mb-4">
            <img src={pinIcon} />
            <h2 class="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p class="text-sm lg:text-lg">{getDateTime(time, "time", false)} - {getDateTime(time, "date", false)}</p>
    </div>
  );
}
