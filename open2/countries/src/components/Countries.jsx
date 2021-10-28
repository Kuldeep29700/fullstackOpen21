import React from "react";
import Countryinfo from "./Countryinfo";

const Countries = ({ nationToshow, filter, setFilter, eventfilter }) => {
  if (nationToshow.length === 0) {
    console.log("NO match");
    return <>NO match</>;
  } else if (nationToshow.length === 1) {
    return (
      <>
        <Countryinfo country={nationToshow[0]} />
      </>
    );
  } else if (nationToshow.length <= 10) {
    return nationToshow.map((country) => (
      <div key={country.alpha3code}>
        <p>{country.name}</p>
        <button onClick={() => setFilter(country.name)}>show</button>
      </div>
    ));
  } else {
    return (
      <>
        <p>Too many matches, enter specific country</p>
      </>
    );
  }
};
export default Countries;
