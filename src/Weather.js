import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-4">
            <input type="search" placeholder="Enter a city ..." />
          </div>
          <div className="col-2">
            <input type="submit" value="Search" />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-8">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="description"
          />
          -2 ℃
        </div>
        <div className="col-4">
          <h1>Kyiv, Ukraine</h1>
          <ul>
            <li>Sunday, 22:00</li>
            <li>Cloudy</li>
          </ul>
        </div>
      </div>
      <ul>
        <li>Humidity: 75%</li>
        <li>Wind: 2 kmh</li>
        <li>Fells like: -5℃</li>
        <li>UV index: 1</li>
      </ul>
    </div>
  );
}
