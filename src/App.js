import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />
        <footer className="footer">
          This App was coded by t0ta, open-sourced on{" "}
          <a href="https://github.com/t0ta/weather-react-app-new">GitHub</a> and
          hosted on{" "}
          <a href="https://lively-rabanadas-1531e6.netlify.app/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}
