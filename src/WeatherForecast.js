import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "7746bdeabca928cfedcad71e52fd9d66";
  let lat = 40.7;
  let lon = 74;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  console.log(apiUrl);

  // axios.get(apiUrl).then(handleResponse);

  return (
    <div className="weather-forecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Sat</div>
          <img
            src={props.forecast.icon}
            className="forecast-next-day"
            alt="forecast-imgs"
          ></img>
          <div className="forecast-temperatures">
            <span className="forecast-max-temperature">20º</span>
            <span className="forecast-min-temperature">10º</span>
          </div>
        </div>
        <div className="col">
          <div className="forecast-day">Sat</div>
          <img
            src={props.forecast.icon}
            className="forecast-next-day"
            alt="forecast-imgs"
          ></img>
          <div className="forecast-temperatures">
            <span className="forecast-max-temperature">20º</span>
            <span className="forecast-min-temperature">10º</span>
          </div>
        </div>
        <div className="col">
          <div className="forecast-day">Sat</div>
          <img
            src={props.forecast.icon}
            className="forecast-next-day"
            alt="forecast-imgs"
          ></img>
          <div className="forecast-temperatures">
            <span className="forecast-max-temperature">20º</span>
            <span className="forecast-min-temperature">10º</span>
          </div>
        </div>
        <div className="col">
          <div className="forecast-day">Sat</div>
          <img
            src={props.forecast.icon}
            className="forecast-next-day"
            alt="forecast-imgs"
          ></img>
          <div className="forecast-temperatures">
            <span className="forecast-max-temperature">20º</span>
            <span className="forecast-min-temperature">10º</span>
          </div>
        </div>
        <div className="col">
          <div className="forecast-day">Sat</div>
          <img
            src={props.forecast.icon}
            className="forecast-next-day"
            alt="forecast-imgs"
          ></img>
          <div className="forecast-temperatures">
            <span className="forecast-max-temperature">20º</span>
            <span className="forecast-min-temperature">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
