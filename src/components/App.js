import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  // Hardcoded weather data
  const [weather] = useState({
    temperature: 25,
    conditions: "Sunny"
  });

  // Conditional styling for temperature
  const tempStyle = {
    color: weather.temperature > 20 ? "red" : "blue"
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <p>
        Temperature: <span style={tempStyle}>{weather.temperature}</span>
      </p>
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
};

export default App;

