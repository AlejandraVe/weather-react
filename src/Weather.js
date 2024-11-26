import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
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
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (loaded) {
    return (
      <div class="wholePage">
        <header>
          <form id="search-form" onSubmit={handleSubmit}>
            <input
              id="search-input"
              class="search-box"
              type="search"
              placeholder="Enter a city..."
              required
              onChange={updateCity}
            />
            <input class="submit-button" type="submit" value="🔍" />
          </form>
        </header>
        <main>
          <h1>
            <span id="city-element">{city}</span>
            <br />
          </h1>
          <p>
            <div class="today-details">
              <div class="todays-temperature">
                <div id="emoji">
                  <img src={weather.icon} alt={weather.condition} />
                </div>
                <span class="weather-app-unit" id="temperature-unit"></span>
                <div class="weather-app-celsius">{weather.temperature}°C</div>
              </div>
              <div class="wind-and-humidity">
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
          <div class="next-days" id="weather-forecast"></div>
        </main>
        <footer>
          Coded by{" "}
          <a href="https://github.com/AlejandraVe" target="_blank">
            Alejandra Vera
          </a>
          , open-sourced{" "}
          <a
            href="https://github.com/AlejandraVe/my-weather-app-alejandrave/tree/main/src"
            target="_blank"
          >
            on Github
          </a>{" "}
          and hosted{" "}
          <a
            href="https://my-weather-app-alejandrave.netlify.app/"
            target="_blank"
          >
            on Netlify
          </a>
        </footer>
      </div>
    );
  } else {
    return (
      <div class="wholePage">
        <header>
          <form id="search-form" onSubmit={handleSubmit}>
            <input
              id="search-input"
              class="search-box"
              type="search"
              placeholder="Enter a city..."
              required
            />
            <input class="submit-button" type="submit" value="🔍" />
          </form>
        </header>
        <main>
          <h1>
            <span id="city-element">Dublin</span>
            <br />
            <span class="country" id="country">
              Ireland
            </span>
            <br />
          </h1>
          <p>
            <div class="today-details">
              <div class="todays-temperature">
                <div id="emoji">
                  <img src="http://openweathermap.org/img/wn/04n@2x.png" />
                </div>
                <span class="weather-app-unit" id="temperature-unit">
                  3
                </span>
                <div class="weather-app-celsius">°C</div>
              </div>
              <div class="wind-and-humidity">
                Condition:{" "}
                <strong>
                  <span id="description">rainy</span>
                </strong>
                <br />
                Humidity:{" "}
                <strong>
                  <span id="humidity">60</span>%
                </strong>
                <br />
                Wind:{" "}
                <strong>
                  <span id="wind">3.13</span>km/h
                </strong>
              </div>
            </div>
          </p>
          <div class="next-days" id="weather-forecast"></div>
        </main>
        <footer>
          Coded by{" "}
          <a href="https://github.com/AlejandraVe" target="_blank">
            Alejandra Vera
          </a>
          , open-sourced{" "}
          <a
            href="https://github.com/AlejandraVe/my-weather-app-alejandrave/tree/main/src"
            target="_blank"
          >
            on Github
          </a>{" "}
          and hosted{" "}
          <a
            href="https://my-weather-app-alejandrave.netlify.app/"
            target="_blank"
          >
            on Netlify
          </a>
        </footer>
      </div>
    );
  }
}
