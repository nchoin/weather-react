import React from "react";
import axios from "axios";

export default function Weather(props){
    
    function handleResponse(response){
        alert( `The weather in ${props.city} is ${Math.round(response.data.main.temp)}°F`)
    }
    const apiKey = "fc0cfae3b133613dbc3178be6b4c1a4d";
    const units = "imperial";
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

    axios.get(apiURL).then(handleResponse);
  
    
    return (
        <div>
            <h1>This is how you use React</h1>
        </div>
    )
}