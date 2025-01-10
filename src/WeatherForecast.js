import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="weather-forecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Sat</div>
          <img src={props.forecast.icon} className="forecast-next-day"></img>
          <div className="forecast-temperatures">
            <span className="forecast-max-temperature">20º</span>
            <span className="forecast-min-temperature">10º</span>
          </div>
        </div>
        <div className="col">
          <div className="forecast-day">Sat</div>
          <img src={props.forecast.icon} className="forecast-next-day"></img>
          <div className="forecast-temperatures">
            <span className="forecast-max-temperature">20º</span>
            <span className="forecast-min-temperature">10º</span>
          </div>
        </div>
        <div className="col">
          <div className="forecast-day">Sat</div>
          <img src={props.forecast.icon} className="forecast-next-day"></img>
          <div className="forecast-temperatures">
            <span className="forecast-max-temperature">20º</span>
            <span className="forecast-min-temperature">10º</span>
          </div>
        </div>
        <div className="col">
          <div className="forecast-day">Sat</div>
          <img src={props.forecast.icon} className="forecast-next-day"></img>
          <div className="forecast-temperatures">
            <span className="forecast-max-temperature">20º</span>
            <span className="forecast-min-temperature">10º</span>
          </div>
        </div>
        <div className="col">
          <div className="forecast-day">Sat</div>
          <img src={props.forecast.icon} className="forecast-next-day"></img>
          <div className="forecast-temperatures">
            <span className="forecast-max-temperature">20º</span>
            <span className="forecast-min-temperature">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
