import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is from VS Code</h1>
        <Weather city="Narragansett" />
        <Weather city="Juneau" />
      </header>
    </div>
  );
}

export default App;
