import "./App.css";
import axios from "axios";
import React, { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setWeatherData(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=825e8f385a08c06f3d6978f7dc4f8344`
      );

      setWeatherData(response.data);
    } catch (erro) {
      if (city == "") {
        setError("Please enter the city!");
      } else {
        setError("City not found");
      }
    }
  };

  return (
    <>
      <div className="weather-search-container">
        <h1 className="heading-main">Weather App</h1>
        <form id="weatherForm" onSubmit={handleSubmit}>
          <input
            type="text"
            id="cityInput"
            value={city}
            onChange={handleChange}
            placeholder="Enter city name"
          />
          <button type="submit">Search</button>
        </form>
        <div id="error" className="error"></div>
        <div id="weatherResult" className="weather-result"></div>
        <div className="messages">
          {error && <p className="error">{error}</p>}
          {weatherData && (
            <div className="weather-result">
              <h2>{weatherData.name}</h2>
              <p>
                Temperature: {(weatherData.main.temp - 273.15).toFixed(1)} °C
              </p>
              <p>Weather: {weatherData.weather[0].description}</p>
              <p>Country: {weatherData.sys.country}</p>
            </div>
          )}
        </div>
      </div>
      <div className="jaison">
        <a target="_blank" href="https://www.linkedin.com/in/barbara-luciano-araujo/">Developed By - Bárbara Luciano Araújo</a>
      </div>
      <div className="github">
        <a target="_blank" href="https://github.com/babi2707/weather-app">Github code</a>
      </div>
    </>
  );
}

export default App;
