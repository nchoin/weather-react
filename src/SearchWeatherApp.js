import React, {useState} from "react";
import axios from "axios";
import "./SearchWeatherApp.css";

export default function SearchWeatherApp() {
  let [city, setCity] = useState("");
  let [forecast, setForecast] = useState("");

  function showForecast(response) {
    // takes in the response from API call and uses the setForecast funcion to update the forecast variable with a div

    const icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    console.log(icon);
    setForecast(
      <div>
        <p className="summary">The current weather in {city} is: </p>
        <ul className="forecast">
          <li>Temperature: {Math.round(response.data.main.temp)}°F</li>
          <li>Conditions: {response.data.weather[0].description}</li>
          <li>Wind: {Math.round(response.data.wind.speed)} mph</li>
          <li>Humidity: {response.data.main.humidity}%</li>
          <li>
            <img src={icon} alt={response.data.weather[0].description} />
          </li>
        </ul>
      </div>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "fc0cfae3b133613dbc3178be6b4c1a4d";
    const units = "imperial";
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiURL).then(showForecast);
  }

  function updateCityInfo(event) {
    setCity(event.target.value);
  }

  const weatherInput = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        className="searchField"
        placeholder="Please enter a city"
        onChange={updateCityInfo}
      />
      <input type="Submit" className="searchButton" value="Search" />
    </form>
  );

  return (
    <div>
      {weatherInput}
      <p>{forecast}</p>
    </div>
  );
}

// import React from "react";
// import axios from "axios";

// export default function Weather(props){

//     function handleResponse(response){
//         alert( `The weather in ${props.city} is ${Math.round(response.data.main.temp)}°F`)
//     }
//     const apiKey = "fc0cfae3b133613dbc3178be6b4c1a4d";
//     const units = "imperial";
//     const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

//     axios.get(apiURL).then(handleResponse);

//     return (
//         <div>
//             <h1>This is how you use React</h1>
//         </div>
//     )
// }
