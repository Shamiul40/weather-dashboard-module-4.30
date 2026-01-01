import { useState } from "react";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });

  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const [error, setError] = useState(null);

  const fetchWeatherData = async (longitude, latitude) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid={API key}`
      );
      if(!response.ok) {
        const message = `"data does not found ${response.status}`
        throw new Error(message)
      }

    } catch {
    } finally {
    }
  };
};
