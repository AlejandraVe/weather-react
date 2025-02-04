import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <img
        src={props.data.condition.icon_url}
        className="forecast-next-day"
        alt="forecast-imgs"
      ></img>
      <div className="forecast-temperatures">
        <span className="forecast-max-temperature">
          {Math.round(props.data.temperature.maximum)}º
        </span>
        <span className="forecast-min-temperature">
          {Math.round(props.data.temperature.minimum)}º
        </span>
      </div>
    </div>
  );
}
