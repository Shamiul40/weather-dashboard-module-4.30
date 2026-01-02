import React, { useContext } from "react";
import pinIcon from "../../assets/pin.svg";
import { WeatherContext } from "../../Context";
import { getDateTime } from "../../utils/date";

import cloudIcon from "../../assets/cloud.svg";
import rainIcon from "../../assets/rainy.svg";
import sunIcon from "../../assets/sun.svg";
import thunderIcon from "../../assets/thunder.svg";
import hazeIcon from "../../assets/haze.svg";

export default function WeatherHeadline() {
  const { weatherData } = useContext(WeatherContext);
  const { location, climate, temperature, time } = weatherData;

  const getClimateIcon = (climate) => {
    switch (climate) {
      case "cloud":
        return cloudIcon;
      case "rain":
        return rainIcon;
      case "thunder":
        return thunderIcon;
      case "haze":
        return hazeIcon;
      default:
        return sunIcon;
    }
  };

  return (
    <div>
      <div class="max-md:flex items-center justify-between md:-mt-10">
        <img src={getClimateIcon(climate)} alt="climate" />
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
      <p class="text-sm lg:text-lg">
        {getDateTime(time, "time", false)} - {getDateTime(time, "date", false)}
      </p>
    </div>
  );
}
