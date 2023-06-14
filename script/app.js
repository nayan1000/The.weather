//apikey= 86c73309ea63a65386a7055a5c31afac

const weatherIcon = document.querySelector("#weather-icon")
const datetime = document.querySelector(".date-time")
const temperature = document.querySelector(".temperature")
const weatherCond = document.querySelector(".weather-condition")
const city = document.querySelector(".city")
const humidity = document.querySelector(".humidity")
const windSpeed = document.querySelector(".wind-speed")


const gridBox1 = document.querySelector("#gridBox1");
const gridBox2 = document.querySelector("#gridBox2");
const gridBox3 = document.querySelector("#gridBox3");
const gridBox4 = document.querySelector("#gridBox4");
const gridBox5 = document.querySelector("#gridBox5");
const gridBox6 = document.querySelector("#gridBox6");
const gridBox7 = document.querySelector("#gridBox7");
const gridBox8 = document.querySelector("#gridBox8");
const gridBox9 = document.querySelector("#gridBox9");
const gridBox10 = document.querySelector("#gridBox10");
const gridBox11 = document.querySelector("#gridBox11");
const gridBox12= document.querySelector("#gridBox12");
const gridBox13= document.querySelector("#gridBox13");
const gridBox14 = document.querySelector("#gridBox14");
const gridBox15 = document.querySelector("#gridBox15");
const gridBox16 = document.querySelector("#gridBox16");
const gridBox17 = document.querySelector("#gridBox17");
const gridBox18 = document.querySelector("#gridBox18");
const gridBox19 = document.querySelector("#gridBox19");
const gridBox20 = document.querySelector("#gridBox20");
const gridBox21 = document.querySelector("#gridBox21");
const gridBox22 = document.querySelector("#gridBox22");
const gridBox23 = document.querySelector("#gridBox23");
const gridBox24 = document.querySelector("#gridBox24");
const gridBox25 = document.querySelector("#gridBox25");
const gridBox26 = document.querySelector("#gridBox26");
const gridBox27 = document.querySelector("#gridBox27");
const gridBox28 = document.querySelector("#gridBox28");
const gridBox29 = document.querySelector("#gridBox29");
const gridBox30 = document.querySelector("#gridBox30");




// Function to get the current location coordinates
function getCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

// Success callback function for geolocation
function onSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Call the OpenWeather API
  getWeatherData(latitude, longitude);
}


function getWeatherData(latitude, longitude) {
  const apiKey = "86c73309ea63a65386a7055a5c31afac"; // Replace with your OpenWeather API key
  const apiUrl_current = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
  const apiUrl_forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
  // Make the API request
  fetch(apiUrl_current)
    .then(response => response.json())
    .then(data => {
      // Process the weather data
      console.log("Weather data:", data);
      weatherIcon.innerHTML = `<img class="weather-icon" src="./icons/${data.weather[0].icon}.png" alt="weather icon">`;
      temperature.innerHTML = `${data.main.temp}<span>°C  <img class="fixed-icon" src="icons/thermometer.png" alt=""></span>`;
      weatherCond.innerHTML = data.weather[0].main;
      city.innerHTML = `${data.name},&nbsp &nbsp${data.sys.country}`;
      humidity.innerHTML = `${data.main.humidity}<span>% <img class="fixed-icon" src="icons/humidity.png" alt=""></span>`;
      windSpeed.innerHTML = `${data.wind.speed}<span>KM/H</span>`;

      // Access specific data
      console.log("Temperature:", temperature);


    })

  fetch(apiUrl_forecast)
    .then(response => response.json())
    .then(data => {
      
      
      // current location forecast
      console.log("locationforecast", data)
      gridBox1.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[1].weather[0].icon}.png" alt="weather icon">     
      <p>${data.list[1].dt_txt}</p>
      <h1> ${Math.floor(data.list[1].main.temp)}<span>°C</span></h1>
      <h3>${data.list[1].weather[0].description}</h3>
      <p>${data.list[1].main.humidity}<span>%</span></p>
      <p>${data.list[1].wind.speed} <span>KM/H</span></p>
      `;
      gridBox2.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[2].weather[0].icon}.png" alt="weather icon">     
      <p>${data.list[2].dt_txt}</p>
      <h1>${Math.floor(data.list[2].main.temp)}<span>°C</span></h1>
      <h3>${data.list[2].weather[0].description}</h3>
      <p>${data.list[2].main.humidity}<span>%</span></p>
      <p>${data.list[2].wind.speed} <span>KM/H</span></p>
      `;
      gridBox3.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[3].weather[0].icon}.png" alt="weather icon">     
      <p>${data.list[3].dt_txt}</p>
      <h1>${Math.floor(data.list[3].main.temp)}<span>°C</span></h1>
      <h3>${data.list[3].weather[0].description}</h3>
      <p>${data.list[3].main.humidity}<span>%</span></p>
      <p>${data.list[3].wind.speed} <span>KM/H</span></p>
      `;
      gridBox4.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[4].weather[0].icon}.png" alt="weather icon">     
      <p>${data.list[4].dt_txt}</p>
      <h1>${Math.floor(data.list[4].main.temp)}<span>°C</span></h1>
      <h3>${data.list[4].weather[0].description}</h3>
      <p>${data.list[4].main.humidity}<span>%</span></p>
      <p>${data.list[4].wind.speed} <span>KM/H</span></p>
      `;
      gridBox5.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[5].weather[0].icon}.png" alt="weather icon">      
      <p>${data.list[5].dt_txt}</p>
      <h1>${Math.floor(data.list[5].main.temp)}<span>°C</span></h1>
      <h3>${data.list[5].weather[0].description}</h3>
      <p>${data.list[5].main.humidity}<span>%</span></p>
      <p>${data.list[5].wind.speed} <span>KM/H</span></p>
      `;
      gridBox6.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[6].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[6].dt_txt}</p>
      <h1>${Math.floor(data.list[6].main.temp)}<span>°C</span></h1>
      <h3>${data.list[6].weather[0].description}</h3>
      <p>${data.list[6].main.humidity}<span>%</span></p>
      <p>${data.list[6].wind.speed} <span>KM/H</span></p>
      `;
      gridBox7.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[7].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[7].dt_txt}</p>
      <h1>${Math.floor(data.list[7].main.temp)}<span>°C</span></h1>
      <h3>${data.list[7].weather[0].description}</h3>
      <p>${data.list[7].main.humidity}<span>%</span></p>
      <p>${data.list[7].wind.speed} <span>KM/H</span></p>
      `;
      gridBox8.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[8].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[8].dt_txt}</p>
      <h1>${Math.floor(data.list[8].main.temp)}<span>°C</span></h1>
      <h3>${data.list[8].weather[0].description}</h3>
      <p>${data.list[8].main.humidity}<span>%</span></p>
      <p>${data.list[8].wind.speed} <span>KM/H</span></p>
      `;
      gridBox9.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[9].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[9].dt_txt}</p>
      <h1>${Math.floor(data.list[9].main.temp)}<span>°C</span></h1>
      <h3>${data.list[9].weather[0].description}</h3>
      <p>${data.list[9].main.humidity}<span>%</span></p>
      <p>${data.list[9].wind.speed} <span>KM/H</span></p>
      `;
      gridBox10.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[10].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[10].dt_txt}</p>
      <h1>${Math.floor(data.list[10].main.temp)}<span>°C</span></h1>
      <h3>${data.list[10].weather[0].description}</h3>
      <p>${data.list[10].main.humidity}<span>%</span></p>
      <p>${data.list[10].wind.speed} <span>KM/H</span></p>
      `;
      gridBox11.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[11].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[11].dt_txt}</p>
      <h1>${Math.floor(data.list[11].main.temp)}<span>°C</span></h1>
      <h3>${data.list[11].weather[0].description}</h3>
      <p>${data.list[11].main.humidity}<span>%</span></p>
      <p>${data.list[11].wind.speed} <span>KM/H</span></p>
      `;
      gridBox12.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[12].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[12].dt_txt}</p>
      <h1>${Math.floor(data.list[12].main.temp)}<span>°C</span></h1>
      <h3>${data.list[12].weather[0].description}</h3>
      <p>${data.list[12].main.humidity}<span>%</span></p>
      <p>${data.list[12].wind.speed} <span>KM/H</span></p>
      `;
      gridBox13.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[13].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[13].dt_txt}</p>
      <h1>${Math.floor(data.list[13].main.temp)}<span>°C</span></h1>
      <h3>${data.list[13].weather[0].description}</h3>
      <p>${data.list[13].main.humidity}<span>%</span></p>
      <p>${data.list[13].wind.speed} <span>KM/H</span></p>
      `;
      gridBox14.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[14].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[14].dt_txt}</p>
      <h1>${Math.floor(data.list[14].main.temp)}<span>°C</span></h1>
      <h3>${data.list[14].weather[0].description}</h3>
      <p>${data.list[14].main.humidity}<span>%</span></p>
      <p>${data.list[14].wind.speed} <span>KM/H</span></p>
      `;
      gridBox15.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[15].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[15].dt_txt}</p>
      <h1>${Math.floor(data.list[15].main.temp)}<span>°C</span></h1>
      <h3>${data.list[15].weather[0].description}</h3>
      <p>${data.list[15].main.humidity}<span>%</span></p>
      <p>${data.list[15].wind.speed} <span>KM/H</span></p>
      `;
      gridBox16.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[16].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[16].dt_txt}</p>
      <h1>${Math.floor(data.list[16].main.temp)}<span>°C</span></h1>
      <h3>${data.list[16].weather[0].description}</h3>
      <p>${data.list[16].main.humidity}<span>%</span></p>
      <p>${data.list[16].wind.speed} <span>KM/H</span></p>
      `;
      gridBox17.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[17].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[17].dt_txt}</p>
      <h1>${Math.floor(data.list[17].main.temp)}<span>°C</span></h1>
      <h3>${data.list[17].weather[0].description}</h3>
      <p>${data.list[17].main.humidity}<span>%</span></p>
      <p>${data.list[17].wind.speed} <span>KM/H</span></p>
      `;
      gridBox18.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[18].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[18].dt_txt}</p>
      <h1>${Math.floor(data.list[18].main.temp)}<span>°C</span></h1>
      <h3>${data.list[18].weather[0].description}</h3>
      <p>${data.list[18].main.humidity}<span>%</span></p>
      <p>${data.list[18].wind.speed} <span>KM/H</span></p>
      `;
      gridBox19.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[19].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[19].dt_txt}</p>
      <h1>${Math.floor(data.list[19].main.temp)}<span>°C</span></h1>
      <h3>${data.list[19].weather[0].description}</h3>
      <p>${data.list[19].main.humidity}<span>%</span></p>
      <p>${data.list[19].wind.speed} <span>KM/H</span></p>
      `;
      gridBox20.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[20].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[20].dt_txt}</p>
      <h1>${Math.floor(data.list[20].main.temp)}<span>°C</span></h1>
      <h3>${data.list[20].weather[0].description}</h3>
      <p>${data.list[20].main.humidity}<span>%</span></p>
      <p>${data.list[20].wind.speed} <span>KM/H</span></p>
      `;
      gridBox21.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[21].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[21].dt_txt}</p>
      <h1>${Math.floor(data.list[21].main.temp)}<span>°C</span></h1>
      <h3>${data.list[21].weather[0].description}</h3>
      <p>${data.list[21].main.humidity}<span>%</span></p>
      <p>${data.list[21].wind.speed} <span>KM/H</span></p>
      `;
      gridBox22.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[22].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[22].dt_txt}</p>
      <h1>${Math.floor(data.list[22].main.temp)}<span>°C</span></h1>
      <h3>${data.list[22].weather[0].description}</h3>
      <p>${data.list[22].main.humidity}<span>%</span></p>
      <p>${data.list[22].wind.speed} <span>KM/H</span></p>
      `;
      gridBox23.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[23].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[23].dt_txt}</p>
      <h1>${Math.floor(data.list[23].main.temp)}<span>°C</span></h1>
      <h3>${data.list[23].weather[0].description}</h3>
      <p>${data.list[23].main.humidity}<span>%</span></p>
      <p>${data.list[23].wind.speed} <span>KM/H</span></p>
      `;
      gridBox24.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[24].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[24].dt_txt}</p>
      <h1>${Math.floor(data.list[24].main.temp)}<span>°C</span></h1>
      <h3>${data.list[24].weather[0].description}</h3>
      <p>${data.list[24].main.humidity}<span>%</span></p>
      <p>${data.list[24].wind.speed} <span>KM/H</span></p>
      `;
      gridBox25.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[25].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[25].dt_txt}</p>
      <h1>${Math.floor(data.list[25].main.temp)}<span>°C</span></h1>
      <h3>${data.list[25].weather[0].description}</h3>
      <p>${data.list[25].main.humidity}<span>%</span></p>
      <p>${data.list[25].wind.speed} <span>KM/H</span></p>
      `;
      gridBox26.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[26].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[26].dt_txt}</p>
      <h1>${Math.floor(data.list[26].main.temp)}<span>°C</span></h1>
      <h3>${data.list[26].weather[0].description}</h3>
      <p>${data.list[26].main.humidity}<span>%</span></p>
      <p>${data.list[26].wind.speed} <span>KM/H</span></p>
      `;
      gridBox27.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[27].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[27].dt_txt}</p>
      <h1>${Math.floor(data.list[27].main.temp)}<span>°C</span></h1>
      <h3>${data.list[27].weather[0].description}</h3>
      <p>${data.list[27].main.humidity}<span>%</span></p>
      <p>${data.list[27].wind.speed} <span>KM/H</span></p>
      `;
      gridBox28.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[28].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[28].dt_txt}</p>
      <h1>${Math.floor(data.list[28].main.temp)}<span>°C</span></h1>
      <h3>${data.list[28].weather[0].description}</h3>
      <p>${data.list[28].main.humidity}<span>%</span></p>
      <p>${data.list[28].wind.speed} <span>KM/H</span></p>
      `;
      gridBox29.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[29].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[29].dt_txt}</p>
      <h1>${Math.floor(data.list[29].main.temp)}<span>°C</span></h1>
      <h3>${data.list[29].weather[0].description}</h3>
      <p>${data.list[29].main.humidity}<span>%</span></p>
      <p>${data.list[29].wind.speed} <span>KM/H</span></p>
      `;
      gridBox30.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[30].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[30].dt_txt}</p>
      <h1>${Math.floor(data.list[30].main.temp)}<span>°C</span></h1>
      <h3>${data.list[30].weather[0].description}</h3>
      <p>${data.list[30].main.humidity}<span>%</span></p>
      <p>${data.list[30].wind.speed} <span>KM/H</span></p>
      `;
      
    })
    .catch(error => {
      console.log("Error occurred while fetching weather data:", error);
    });
}

// Error callback function for geolocation
function onError(error) {
  console.log("Error occurred while retrieving location:", error.message);
}

// Add event listener to the search form
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', handleSearch);

// Function to handle the search form submission
function handleSearch(event) {
  event.preventDefault();
  const searchInput = document.getElementById('search-input');
  const cityName = searchInput.value;
  // Call the OpenWeather API
  getForecastdata(cityName);
  getWeatherDataByLocation(cityName);
 
}



// Function to fetch weather data from OpenWeather API based on location
function getWeatherDataByLocation(cityName) {
  const apiKey = "86c73309ea63a65386a7055a5c31afac"; 
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

  // Make the API request
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Process the weather data
      console.log("Weather data:", data);
      // Access specific data
      const temp = Math.floor(data.main.temp)
      weatherIcon.innerHTML = `<img class="weather-icon" src="icons/${data.weather[0].icon}.png" alt="weather icon">`;
      temperature.innerHTML = `${temp}<span>°C</span>`;
      weatherCond.innerHTML = `${data.weather[0].main}`;
      city.innerHTML = `${data.name},&nbsp &nbsp${data.sys.country}`;
      humidity.innerHTML = `${data.main.humidity} <span>%</span>`;
      windSpeed.innerHTML = `${data.wind.speed} <span>KM/H</span>`;

      console.log("Temperature:", temperature);

    })
    .catch(error => {
      console.log("Error occurred while fetching weather data:", error);
    });
}

getCurrentLocation();




// for updating date and time--->

const date = document.querySelector(".date-time");
function getCurrentDateTime() {
  const currentDateTime = new Date();

  const date = currentDateTime.toLocaleDateString();
  const time = currentDateTime.toLocaleTimeString();

  document.querySelector(".date-time").textContent = date + "----- " + time;
}


getCurrentDateTime();


// next 5 days forecast

function getForecastdata(cityName){
  const apiKey = "86c73309ea63a65386a7055a5c31afac";
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${apiKey}`;


  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Process the forecast data
      console.log("Forecast data:", data);

      gridBox1.innerHTML = `
        <img class="weather-icon" src="icons/${data.list[1].weather[0].icon}.png" alt="weather icon">
        <p>${data.list[1].dt_txt}</p>
        <h1> ${Math.floor(data.list[1].main.temp)}<span>°C</span></h1>
        <h3>${data.list[1].weather[0].description}</h3>
        <p>${data.list[1].main.humidity}<span>%</span></p>
        <p>${data.list[1].wind.speed} <span>KM/H</span></p>
        `;
      gridBox2.innerHTML = `
        <img class="weather-icon" src="icons/${data.list[2].weather[0].icon}.png" alt="weather icon">
        <p>${data.list[2].dt_txt}</p>
        <h1>${Math.floor(data.list[2].main.temp)}<span>°C</span></h1>
        <h3>${data.list[2].weather[0].description}</h3>
        <p>${data.list[2].main.humidity}<span>%</span></p>
        <p>${data.list[2].wind.speed} <span>KM/H</span></p>
        `;
      gridBox3.innerHTML = `
        <img class="weather-icon" src="icons/${data.list[3].weather[0].icon}.png" alt="weather icon">
        <p>${data.list[3].dt_txt}</p>
        <h1>${Math.floor(data.list[3].main.temp)}<span>°C</span></h1>
        <h3>${data.list[3].weather[0].description}</h3>
        <p>${data.list[3].main.humidity}<span>%</span></p>
        <p>${data.list[3].wind.speed} <span>KM/H</span></p>
        `;
      gridBox4.innerHTML = `
        <img class="weather-icon" src="icons/${data.list[4].weather[0].icon}.png" alt="weather icon">
        <p>${data.list[4].dt_txt}</p>
        <h1>${Math.floor(data.list[4].main.temp)}<span>°C</span></h1>
        <h3>${data.list[4].weather[0].description}</h3>
        <p>${data.list[4].main.humidity}<span>%</span></p>
        <p>${data.list[4].wind.speed} <span>KM/H</span></p>
        `;
      gridBox5.innerHTML = `
        <img class="weather-icon" src="icons/${data.list[5].weather[0].icon}.png" alt="weather icon">
        <p>${data.list[5].dt_txt}</p>
        <h1>${Math.floor(data.list[5].main.temp)}<span>°C</span></h1>
        <h3>${data.list[5].weather[0].description}</h3>
        <p>${data.list[5].main.humidity}<span>%</span></p>
        <p>${data.list[5].wind.speed} <span>KM/H</span></p>
        `;
      gridBox6.innerHTML = `
        <img class="weather-icon" src="icons/${data.list[6].weather[0].icon}.png" alt="weather icon">
        <p>${data.list[6].dt_txt}</p>
        <h1>${Math.floor(data.list[6].main.temp)}<span>°C</span></h1>
        <h3>${data.list[6].weather[0].description}</h3>
        <p>${data.list[6].main.humidity}<span>%</span></p>
        <p>${data.list[6].wind.speed} <span>KM/H</span></p>
        `;
        gridBox7.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[7].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[7].dt_txt}</p>
      <h1>${Math.floor(data.list[7].main.temp)}<span>°C</span></h1>
      <h3>${data.list[7].weather[0].description}</h3>
      <p>${data.list[7].main.humidity}<span>%</span></p>
      <p>${data.list[7].wind.speed} <span>KM/H</span></p>
      `;
      gridBox8.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[8].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[8].dt_txt}</p>
      <h1>${Math.floor(data.list[8].main.temp)}<span>°C</span></h1>
      <h3>${data.list[8].weather[0].description}</h3>
      <p>${data.list[8].main.humidity}<span>%</span></p>
      <p>${data.list[8].wind.speed} <span>KM/H</span></p>
      `;
      gridBox9.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[9].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[9].dt_txt}</p>
      <h1>${Math.floor(data.list[9].main.temp)}<span>°C</span></h1>
      <h3>${data.list[9].weather[0].description}</h3>
      <p>${data.list[9].main.humidity}<span>%</span></p>
      <p>${data.list[9].wind.speed} <span>KM/H</span></p>
      `;
      gridBox10.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[10].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[10].dt_txt}</p>
      <h1>${Math.floor(data.list[10].main.temp)}<span>°C</span></h1>
      <h3>${data.list[10].weather[0].description}</h3>
      <p>${data.list[10].main.humidity}<span>%</span></p>
      <p>${data.list[10].wind.speed} <span>KM/H</span></p>
      `;
      gridBox11.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[11].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[11].dt_txt}</p>
      <h1>${Math.floor(data.list[11].main.temp)}<span>°C</span></h1>
      <h3>${data.list[11].weather[0].description}</h3>
      <p>${data.list[11].main.humidity}<span>%</span></p>
      <p>${data.list[11].wind.speed} <span>KM/H</span></p>
      `;
      gridBox12.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[12].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[12].dt_txt}</p>
      <h1>${Math.floor(data.list[12].main.temp)}<span>°C</span></h1>
      <h3>${data.list[12].weather[0].description}</h3>
      <p>${data.list[12].main.humidity}<span>%</span></p>
      <p>${data.list[12].wind.speed} <span>KM/H</span></p>
      `;
      gridBox13.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[13].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[13].dt_txt}</p>
      <h1>${Math.floor(data.list[13].main.temp)}<span>°C</span></h1>
      <h3>${data.list[13].weather[0].description}</h3>
      <p>${data.list[13].main.humidity}<span>%</span></p>
      <p>${data.list[13].wind.speed} <span>KM/H</span></p>
      `;
      gridBox14.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[14].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[14].dt_txt}</p>
      <h1>${Math.floor(data.list[14].main.temp)}<span>°C</span></h1>
      <h3>${data.list[14].weather[0].description}</h3>
      <p>${data.list[14].main.humidity}<span>%</span></p>
      <p>${data.list[14].wind.speed} <span>KM/H</span></p>
      `;
      gridBox15.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[15].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[15].dt_txt}</p>
      <h1>${Math.floor(data.list[15].main.temp)}<span>°C</span></h1>
      <h3>${data.list[15].weather[0].description}</h3>
      <p>${data.list[15].main.humidity}<span>%</span></p>
      <p>${data.list[15].wind.speed} <span>KM/H</span></p>
      `;
      gridBox16.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[16].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[16].dt_txt}</p>
      <h1>${Math.floor(data.list[16].main.temp)}<span>°C</span></h1>
      <h3>${data.list[16].weather[0].description}</h3>
      <p>${data.list[16].main.humidity}<span>%</span></p>
      <p>${data.list[16].wind.speed} <span>KM/H</span></p>
      `;
      gridBox17.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[17].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[17].dt_txt}</p>
      <h1>${Math.floor(data.list[17].main.temp)}<span>°C</span></h1>
      <h3>${data.list[17].weather[0].description}</h3>
      <p>${data.list[17].main.humidity}<span>%</span></p>
      <p>${data.list[17].wind.speed} <span>KM/H</span></p>
      `;
      gridBox18.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[18].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[18].dt_txt}</p>
      <h1>${Math.floor(data.list[18].main.temp)}<span>°C</span></h1>
      <h3>${data.list[18].weather[0].description}</h3>
      <p>${data.list[18].main.humidity}<span>%</span></p>
      <p>${data.list[18].wind.speed} <span>KM/H</span></p>
      `;
      gridBox19.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[19].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[19].dt_txt}</p>
      <h1>${Math.floor(data.list[19].main.temp)}<span>°C</span></h1>
      <h3>${data.list[19].weather[0].description}</h3>
      <p>${data.list[19].main.humidity}<span>%</span></p>
      <p>${data.list[19].wind.speed} <span>KM/H</span></p>
      `;
      gridBox20.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[20].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[20].dt_txt}</p>
      <h1>${Math.floor(data.list[20].main.temp)}<span>°C</span></h1>
      <h3>${data.list[20].weather[0].description}</h3>
      <p>${data.list[20].main.humidity}<span>%</span></p>
      <p>${data.list[20].wind.speed} <span>KM/H</span></p>
      `;
      gridBox21.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[21].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[21].dt_txt}</p>
      <h1>${Math.floor(data.list[21].main.temp)}<span>°C</span></h1>
      <h3>${data.list[21].weather[0].description}</h3>
      <p>${data.list[21].main.humidity}<span>%</span></p>
      <p>${data.list[21].wind.speed} <span>KM/H</span></p>
      `;
      gridBox22.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[22].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[22].dt_txt}</p>
      <h1>${Math.floor(data.list[22].main.temp)}<span>°C</span></h1>
      <h3>${data.list[22].weather[0].description}</h3>
      <p>${data.list[22].main.humidity}<span>%</span></p>
      <p>${data.list[22].wind.speed} <span>KM/H</span></p>
      `;
      gridBox23.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[23].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[23].dt_txt}</p>
      <h1>${Math.floor(data.list[23].main.temp)}<span>°C</span></h1>
      <h3>${data.list[23].weather[0].description}</h3>
      <p>${data.list[23].main.humidity}<span>%</span></p>
      <p>${data.list[23].wind.speed} <span>KM/H</span></p>
      `;
      gridBox24.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[24].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[24].dt_txt}</p>
      <h1>${Math.floor(data.list[24].main.temp)}<span>°C</span></h1>
      <h3>${data.list[24].weather[0].description}</h3>
      <p>${data.list[24].main.humidity}<span>%</span></p>
      <p>${data.list[24].wind.speed} <span>KM/H</span></p>
      `;
      gridBox25.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[25].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[25].dt_txt}</p>
      <h1>${Math.floor(data.list[25].main.temp)}<span>°C</span></h1>
      <h3>${data.list[25].weather[0].description}</h3>
      <p>${data.list[25].main.humidity}<span>%</span></p>
      <p>${data.list[25].wind.speed} <span>KM/H</span></p>
      `;
      gridBox26.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[26].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[26].dt_txt}</p>
      <h1>${Math.floor(data.list[26].main.temp)}<span>°C</span></h1>
      <h3>${data.list[26].weather[0].description}</h3>
      <p>${data.list[26].main.humidity}<span>%</span></p>
      <p>${data.list[26].wind.speed} <span>KM/H</span></p>
      `;
      gridBox27.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[27].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[27].dt_txt}</p>
      <h1>${Math.floor(data.list[27].main.temp)}<span>°C</span></h1>
      <h3>${data.list[27].weather[0].description}</h3>
      <p>${data.list[27].main.humidity}<span>%</span></p>
      <p>${data.list[27].wind.speed} <span>KM/H</span></p>
      `;
      gridBox28.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[28].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[28].dt_txt}</p>
      <h1>${Math.floor(data.list[28].main.temp)}<span>°C</span></h1>
      <h3>${data.list[28].weather[0].description}</h3>
      <p>${data.list[28].main.humidity}<span>%</span></p>
      <p>${data.list[28].wind.speed} <span>KM/H</span></p>
      `;
      gridBox29.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[29].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[29].dt_txt}</p>
      <h1>${Math.floor(data.list[29].main.temp)}<span>°C</span></h1>
      <h3>${data.list[29].weather[0].description}</h3>
      <p>${data.list[29].main.humidity}<span>%</span></p>
      <p>${data.list[29].wind.speed} <span>KM/H</span></p>
      `;
      gridBox30.innerHTML = `
      <img class="weather-icon" src="icons/${data.list[30].weather[0].icon}.png" alt="weather icon">
      <p>${data.list[30].dt_txt}</p>
      <h1>${Math.floor(data.list[30].main.temp)}<span>°C</span></h1>
      <h3>${data.list[30].weather[0].description}</h3>
      <p>${data.list[30].main.humidity}<span>%</span></p>
      <p>${data.list[30].wind.speed} <span>KM/H</span></p>
      `;

    })
    .catch(error => {
      console.log("Error occurred while fetching forecast data:", error);
    });
}

getForecastdata();

