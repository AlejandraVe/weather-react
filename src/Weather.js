import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function Weather() {
  const [newCity, setNewCity] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      condition: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "a33b693cfbefd271b0ed075f9a8f65f0";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
    setNewCity(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (loaded) {
    return (
      <div className="wholePage">
        <header>
          <form id="search-form" onSubmit={handleSubmit}>
            <input
              id="search-input"
              className="search-box"
              type="search"
              placeholder="Enter a city..."
              required
              autoFocus="on"
              onChange={updateCity}
            />
            <input className="submit-button" type="submit" value="🔍" />
          </form>
        </header>
        <main>
          <h1>
            <span id="city-element">{newCity}</span>
            <br />
          </h1>
          <p>
            <div className="today-details">
              <div className="todays-temperature">
                <div id="emoji">
                  <img src={weather.icon} alt={weather.condition} />
                </div>
                <span className="weather-app-unit" id="temperature-unit"></span>
                <div className="weather-app-celsius">
                  {Math.round(weather.temperature)}°C
                </div>
              </div>
              <div className="wind-and-humidity">
                Condition:{" "}
                <strong>
                  <span id="description">{weather.condition}</span>
                </strong>
                <br />
                Humidity:{" "}
                <strong>
                  <span id="humidity">{weather.humidity}</span>%
                </strong>
                <br />
                Wind:{" "}
                <strong>
                  <span id="wind">{weather.wind}</span>km/h
                </strong>
              </div>
            </div>
          </p>
          <div className="next-days" id="weather-forecast"></div>
        </main>
        <footer>
          Coded by{" "}
          <a
            href="https://github.com/AlejandraVe"
            target="_blank"
            rel="noreferrer"
          >
            Alejandra Vera
          </a>
          , open-sourced{" "}
          <a
            href="https://github.com/AlejandraVe/my-weather-app-alejandrave/tree/main/src"
            target="_blank"
            rel="noreferrer"
          >
            on Github
          </a>{" "}
          and hosted{" "}
          <a
            href="https://my-weather-app-alejandrave.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            on Netlify
          </a>
        </footer>
      </div>
    );
  } else {
    return (
      <div className="wholePage">
        <header>
          <form id="search-form" onSubmit={handleSubmit}>
            <input
              id="search-input"
              className="search-box"
              type="search"
              placeholder="Enter a city..."
              required
              onChange={updateCity}
            />
            <input className="submit-button" type="submit" value="🔍" />
          </form>
        </header>
        <main>
          <h1>
            <span id="city-element"></span>
            <br />
          </h1>
          <div className="next-days" id="weather-forecast"></div>
        </main>
        <footer>
          Coded by{" "}
          <a
            href="https://github.com/AlejandraVe"
            target="_blank"
            rel="noreferrer"
          >
            Alejandra Vera
          </a>
          , open-sourced{" "}
          <a
            href="https://github.com/AlejandraVe/my-weather-app-alejandrave/tree/main/src"
            target="_blank"
            rel="noreferrer"
          >
            on Github
          </a>{" "}
          and hosted{" "}
          <a
            href="https://my-weather-app-alejandrave.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            on Netlify
          </a>
        </footer>
      </div>
    );
  }
}
