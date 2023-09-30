import { useState } from "react";
import axios from "axios";

import "./App.css";
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

type WeatherData = {
  location: {
    name: string;
    region: string;
    country: string;
  };
};

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  // this will be in the useWeather hook:
  const fetchWeather = async (city: string) => {
    const { data } = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
    );
    setWeatherData(data);
  };

  return (
    <>
      <button type="button" onClick={() => fetchWeather("Vancouver")}>
        Weather
      </button>

      {weatherData && (
        <div>
          <h2>{weatherData.location.name}</h2>
          <h2>{weatherData.location.region}</h2>
          <h2>{weatherData.location.country}</h2>
        </div>
      )}
    </>
  );
}

export default App;
