import React, { useState, useEffect } from "react";
import Countries from "./components/Countries";
import Filter from "./components/Filter";
import axios from "axios";

const App = () => {
  const [nation, setNation] = useState([]);

  const [newFilter, setNewfilter] = useState("");

  useEffect(() => {
    console.log("effect");

    const eventHandler = (response) => {
      console.log("promise fulfilled");
      setNation(response.data);
    };

    const promise = axios.get("https://restcountries.com/v2/all");
    promise.then(eventHandler);
  }, []);

  const nationToshow =
    newFilter.length > 0
      ? nation.filter((country) =>
          country.name.toLowerCase().includes(newFilter.toLowerCase())
        )
      : nation;

  const eventfilter = (event) => {
    setNewfilter(event.target.value);
  };

  return (
    <>
      <h1>RestCountry</h1>
      <Filter filter={newFilter} eventfilter={eventfilter} />

      <Countries
        filter={newFilter}
        setFilter={setNewfilter}
        nationToshow={nationToshow}
        eventfilter={eventfilter}
      />
    </>
  );
};
export default App;
