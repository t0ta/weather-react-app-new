import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      country: response.data.country,
      date: "Sunday, 22:00",
      description: response.data.condition.description,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png",
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      feelsLike: response.data.temperature.feels_like,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="search-form">
          <div className="row">
            <div className="col-4">
              <input type="search" placeholder="Enter a city ..." />
            </div>
            <div className="col-2">
              <input type="submit" value="Search" />
            </div>
          </div>
        </form>
        <div className="row  mt-3">
          <div className="col-6 d-flex">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">℃</span>
          </div>
          <div className="col-6">
            <h1>
              {weatherData.city}, {weatherData.country}
            </h1>
            <ul>
              <li>{weatherData.date}</li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
        </div>
        <ul>
          <li>Humidity: {weatherData.humidity}%</li>
          <li>Wind: {weatherData.wind} kph</li>
          <li>Fells like: {Math.round(weatherData.feelsLike)}℃</li>
        </ul>
      </div>
    );
  } else {
    const apiKey = "b52533e222dtcdc8f400o20f5a23db2f";
    let unit = "metric";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${unit}`;
    axios.get(apiURL).then(handleResponse);

    return "Loading weather";
  }
}
