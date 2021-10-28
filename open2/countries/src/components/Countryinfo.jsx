import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import axios from "axios";
const Countryinfo = ({ country }) => {
  const [weather, setweather] = useState(null);
  const api_key = process.env.REACT_APP_API_KEY;
  const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`;
  useEffect(() => {
    axios.get(url).then((Response) => {
      setweather(Response.data.current);
      console.log(Response.data);
    });
  }, [url]);
  return (
    <>
      <h1>{country.name}</h1>
      <p>Capital- {country.capital}</p>
      <p>Population - {country.population}</p>
      <h3>Currency</h3>
      <ul>
        {country.currencies.map((language) => (
          <li key={language.code}>{language.name}</li>
        ))}
      </ul>
      <h2>Languages</h2>
      <ul>
        {country.languages.map((language) => (
          <li key={language.iso639_2}>{language.name}</li>
        ))}
      </ul>
      <img
        src={country.flag}
        alt={`${country.name} flag`}
        style={{ width: "10%" }}
      />
      <Weather weather={weather} capital={country.capital} />
    </>
  );
};
export default Countryinfo;
