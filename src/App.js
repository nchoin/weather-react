import React from "react";
import SearchWeatherApp from "./SearchWeatherApp";
import "./SearchWeatherApp.css";

export default function App() {
  return (
    <div className="Search">
      <h1 className="weatherApp">Weather App</h1>
      <SearchWeatherApp />
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
