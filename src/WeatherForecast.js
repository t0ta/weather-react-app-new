import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay">Tuesday</div>
          <div className="WeatherForecastDate">Mar, 7</div>
          <div className="WeatherForecastIcon">
            <img src={props.icon} alt={props.description} />
          </div>
          <span className="WeatherForecasTempMax">10°</span>
          <span className="WeatherForecasTempMin">2°</span>
        </div>
        <div className="col">
          <div className="WeatherForecastDay">Tuesday</div>
          <div className="WeatherForecastDate">Mar, 7</div>
          <div className="WeatherForecastIcon">
            <img src={props.icon} alt={props.description} />
          </div>
          <span className="WeatherForecasTempMax">10°</span>
          <span className="WeatherForecasTempMin">2°</span>
        </div>
        <div className="col">
          <div className="WeatherForecastDay">Tuesday</div>
          <div className="WeatherForecastDate">Mar, 7</div>
          <div className="WeatherForecastIcon">
            <img src={props.icon} alt={props.description} />
          </div>
          <span className="WeatherForecasTempMax">10°</span>
          <span className="WeatherForecasTempMin">2°</span>
        </div>
        <div className="col">
          <div className="WeatherForecastDay">Tuesday</div>
          <div className="WeatherForecastDate">Mar, 7</div>
          <div className="WeatherForecastIcon">
            <img src={props.icon} alt={props.description} />
          </div>
          <span className="WeatherForecasTempMax">10°</span>
          <span className="WeatherForecasTempMin">2°</span>
        </div>
        <div className="col">
          <div className="WeatherForecastDay">Tuesday</div>
          <div className="WeatherForecastDate">Mar, 7</div>
          <div className="WeatherForecastIcon">
            <img src={props.icon} alt={props.description} />
          </div>
          <span className="WeatherForecasTempMax">10°</span>
          <span className="WeatherForecasTempMin">2°</span>
        </div>
      </div>
    </div>
  );
}
