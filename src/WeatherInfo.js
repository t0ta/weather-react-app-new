import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row  mt-3">
        <div className="col-6 d-flex">
          <img src={props.data.iconUrl} alt={props.data.description} />
          <WeatherTemperature celcius={props.data.temperature} />
        </div>
        <div className="col-6">
          <h1>
            {props.data.city}, {props.data.country}
          </h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
      </div>
      <ul>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {props.data.wind} kph</li>
        <li>Fells like: {Math.round(props.data.feelsLike)}℃</li>
      </ul>
    </div>
  );
}
