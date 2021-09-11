import React, { useState } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
const App = (props) => {
  const [person, setPerson] = useState(props.person);
  const [newPerson, setNewperson] = useState("");
  const [newNumber, setNewnumber] = useState("");
  const [newFilter, setNewfilter] = useState("");

  const addNewperson = (event) => {
    event.preventDefault();
    const objPerson = {
      namep: newPerson,
      id: person.length + 1,
      number: newNumber,
    };
    const found = person.some((el) => el.namep === newPerson);
    const foundnum = person.some((el) => el.number === newNumber);
    if (!found && !foundnum) setPerson(person.concat(objPerson));

    if (found) {
      return alert(`${newPerson} is already added to phonebook`);
    }
    if (foundnum) {
      return alert(`${newNumber} is already added to phonebook`);
    }

    console.log(found);
    setNewperson("");
    setNewnumber("");
  };
  const eventHandler = (event) => {
    setNewperson(event.target.value);
  };
  const eventHandlerFornum = (event) => {
    setNewnumber(event.target.value);
  };
  const eventfilter = (event) => {
    setNewfilter(event.target.value);
  };

  const peopleToshow =
    newFilter.length > 0
      ? person.filter((val) =>
          val.namep.toLowerCase().includes(newFilter.toLowerCase())
        )
      : person;

  return (
    <>
      <h2>Phonebook</h2>
      <Filter filter={newFilter} eventfilter={eventfilter} />
      <hr />
      <PersonForm
        addPeople={addNewperson}
        name={newPerson}
        eventname={eventHandler}
        number={newNumber}
        eventNumb={eventHandlerFornum}
      />
      <hr />
      <h3>Numbers :</h3>
      {peopleToshow.map((cvalue) => (
        <Persons key={cvalue.id} note={cvalue} />
      ))}
    </>
  );
};

export default App;
