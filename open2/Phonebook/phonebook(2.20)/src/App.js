import React, { useState, useEffect } from "react";
import personService from "./components/Services";
import Person from "./components/Person";
import Filter from "./components/Filter";
import "./index.css";
const App = () => {
  const [person, setPerson] = useState([]);
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [filter, setFilter] = useState("");
  const [errorMessage, seterrorMesage] = useState("some error happened....");
  const [successMsg, setSuccessmsg] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPerson) => {
      console.log("successfull");

      setPerson(initialPerson);
    });
  }, []);

  const submitEventhandler = (event) => {
    event.preventDefault();
    const addContact = {
      name: name,
      number: num,
    };
    const existingPerson = person.find(
      (val) => val.name.toLowerCase() === addContact.name.toLowerCase()
    );
    const changeNum = { ...existingPerson, number: addContact.number };
    if (
      person.some(
        (person) => person.name.toLowerCase() === addContact.name.toLowerCase()
      )
    ) {
      window.confirm(
        `${name} is already added to phonebook, replace the old number with a new one?`,
        console.log(existingPerson)
      );
      personService
        .update(existingPerson.id, changeNum)
        .then((updatedPerson) => {
          setPerson(
            person.map((val) =>
              val.name === changeNum.name ? updatedPerson : val
            )
          );

          setSuccessmsg(`updated ${addContact.name}`);
          setTimeout(() => {
            setSuccessmsg(null);
          }, 5000);
        })
        .catch((val) => {
          seterrorMesage(
            `Information of ${name} has already been removed from server`
          );
          setTimeout(() => {
            seterrorMesage(null);
          }, 5000);
        });
    } else {
      personService
        .create(addContact)
        .then((response) => {
          setPerson(person.concat(response));

          setSuccessmsg(`added new Contact ${name}`);
          setTimeout(() => {
            setSuccessmsg(null);
          }, 5000);
        })
        .catch((error) => {
          seterrorMesage(`person '${name}' was not added to the phonebook`);
          setTimeout(() => {
            seterrorMesage(null);
          }, 5000);
        });
    }
    setName("");
    setNum("");
  };

  const changeEventhangler = (event) => {
    setName(event.target.value);
  };
  const changeEventhanglernum = (event) => {
    setNum(event.target.value);
  };
  const deleteHandlerof = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      console.log(`Delete the person of ${id}`);
      const note = person.filter((n) => n.id !== id);
      console.log(note);

      personService
        .remove(id)
        .then((response) => {
          setPerson(person.filter((val) => (val.id !== id ? val : !response)));
          console.log("deleted", name);
          setSuccessmsg(`${name} deleted`);
          setTimeout(() => {
            setSuccessmsg(null);
          }, 5000);
        })
        .catch((error) => {
          setPerson(note);
          seterrorMesage(
            `the note '${note.content}' was already deleted from server`
          );
          setTimeout(() => {
            seterrorMesage(null);
          }, 5000);
        });
    }
  };
  const personToshow = person.filter((value) => {
    if (setFilter === "") {
      return value;
    } else if (value.name.toLowerCase().includes(filter.toLowerCase())) {
      return value;
    }
  });

  const Notification = ({ message }) => {
    if (message === null) {
      return null;
    }
    return <div className="message">{message}</div>;
  };
  const Error = ({ error }) => {
    if (error === null) {
      return null;
    }
    return <div className="error">{error}</div>;
  };
  return (
    <>
      <h1>PhoneBook</h1>
      <Notification message={successMsg} />
      <Error error={errorMessage} />
      <Filter filter={filter} setFilter={setFilter} />

      <h2>add a new</h2>
      <form onSubmit={submitEventhandler}>
        <div>
          Name:
          <input
            required
            value={name}
            type="text"
            placeholder="type name.."
            onChange={changeEventhangler}
          />
        </div>
        <div>
          number:
          <input
            value={num}
            type="number"
            placeholder="type num..."
            onChange={changeEventhanglernum}
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
      <h2>Numbers</h2>
      <div>
        <Person persons={personToshow} deleteHandler={deleteHandlerof} />
      </div>
    </>
  );
};
export default App;
