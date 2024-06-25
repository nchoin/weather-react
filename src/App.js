import React from "react";
import SearchWeatherApp from "./SearchWeatherApp";
import "./SearchWeatherApp.css";

export default function App() {
  return (
    <div className="Search">
      <h1 className="weatherApp">Weather App</h1>
      <SearchWeatherApp />
      <p className="aboutFooter">
        This project was coded by{" "}
        <a
          href="https://github.com/nchoin"
          title="link to GitHub profile"
          className="linkFooter"
        >
          Nicole Choiniere-Kroeker
        </a>
        and is open-sourced on{" "}
        <a
          href="https://github.com/nchoin/weather-react"
          title="link to repo on GitHub"
          className="linkFooter"
        >
          GitHub{" "}
        </a>
        and hosted by{" "}
        <a
          href="https://weather-react-shecodes-nck.netlify.app/"
          title="weather app using react"
          className="linkFooter"
        >
          {" "}
          Netlify.
        </a>
      </p>
    </div>
  );
}

// import Weather from "./SearchWeatherApp";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>This is from VS Code</h1>
//         <Weather city="Narragansett" />
//         <Weather city="Juneau" />
//       </header>
//     </div>
//   );
// }

// export default App;
