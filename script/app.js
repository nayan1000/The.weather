
const weatherIcon = document.querySelector("#weather-icon");
const datetime = document.querySelector(".date-time");
const temperature = document.querySelector(".temperature");
const weatherCond = document.querySelector(".weather-condition");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");
const gridBoxes = [...document.querySelectorAll(".grid-cards")]; // Select all forecast grid boxes

const apiKey = "86c73309ea63a65386a7055a5c31afac";

// Function to get current location
function getCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

getCurrentLocation();

// Success callback function for geolocation
function onSuccess(position) {
  const { latitude, longitude } = position.coords;
  getWeatherDataByCoords(latitude, longitude);
  getForecastDataByCoords(latitude, longitude);
}

// Fetch current weather by coordinates
function getWeatherDataByCoords(latitude, longitude) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => updateCurrentWeather(data))
    .catch(error => console.log("Error fetching weather:", error));
}

// Fetch 5-day forecast by coordinates
function getForecastDataByCoords(latitude, longitude) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => updateForecast(data))
    .catch(error => console.log("Error fetching forecast:", error));
}

// Update current weather data
function updateCurrentWeather(data) {
  const timestamp = data.dt;
  const timezoneOffset = data.timezone;
  const localDate = new Date((timestamp + timezoneOffset) * 1000);
  const formattedTime = localDate.toUTCString().slice(0, -3); // Convert to city time

  datetime.innerHTML = `<p>${formattedTime}</p>`;
  weatherIcon.innerHTML = `<img class="weather-icon" src="icons/${data.weather[0].icon}.png" alt="weather icon">`;
  temperature.innerHTML = `${Math.floor(data.main.temp)}<span>°C</span>`;
  weatherCond.innerHTML = data.weather[0].main;
  city.innerHTML = `${data.name}, ${data.sys.country}`;
  humidity.innerHTML = `${data.main.humidity}%`;
  windSpeed.innerHTML = `${data.wind.speed} KM/H`;
}

// Update 5-day forecast data
function updateForecast(data) {
  gridBoxes.forEach((box, index) => {
    const weatherData = data.list[index];
    box.innerHTML = `
      <img class="weather-icon" src="icons/${weatherData.weather[0].icon}.png" alt="weather icon">
      <p>${weatherData.dt_txt}</p>
      <h1>${Math.floor(weatherData.main.temp)}<span>°C</span></h1>
      <h3>${weatherData.weather[0].description}</h3>
      <p>${weatherData.main.humidity}%</p>
      <p>${weatherData.wind.speed} KM/H</p>
    `;
  });
}

// getting input from search bar 
document.getElementById('search-form').addEventListener('submit', event => {
  event.preventDefault();
  const cityName = document.getElementById('search-input').value;
  getWeatherDataByCity(cityName);
  getForecastDataByCity(cityName);
});

// Fetch weather data by city name
function getWeatherDataByCity(cityName) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => updateCurrentWeather(data))
    .catch(error => console.log("Error fetching weather:", error));
}

// Fetch forecast data by city name
function getForecastDataByCity(cityName) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => updateForecast(data))
    .catch(error => console.log("Error fetching forecast:", error));
}

// Error callback function for geolocation
function onError(error) {
  alert("Turn on location for getting data ", error.message);
}
