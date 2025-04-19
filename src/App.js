import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <body>
        <div class="weather-search-container">
          <h1 className="heading-main">Weather App</h1>
          <form id="weatherForm">
            <input type="text" id="cityInput" placeholder="Enter city name" />
            <button type="submit">Search</button>
          </form>
          <div id="error" class="error"></div>
          <div id="weatherResult" class="weather-result"></div>
          <div className="messages"></div>
        </div>
      </body>
    </>
  );
}

export default App;
