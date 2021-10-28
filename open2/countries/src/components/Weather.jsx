import React from "react";

const Weather = ({ weather, capital }) => {
  if (!weather) {
    return null;
  }
  return (
    <>
      <h1>weather in {capital}</h1>
      <h3>
        <strong>Temperature:</strong>
        {weather.temperature} deg. Celsius
      </h3>
      <img
        src={weather.weather_icons}
        alt={weather.weather_descriptions}
        style={{ width: "10%" }}
      />

      <h3>
        <strong>Wind:</strong>
        {weather.wind_speed} mph , direction :{weather.wind_dir}
      </h3>
    </>
  );
};
export default Weather;
