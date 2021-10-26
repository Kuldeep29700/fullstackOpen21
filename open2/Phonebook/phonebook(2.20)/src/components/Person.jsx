import React from "react";

const Person = ({ persons, deleteHandler }) => {
  return (
    <div>
      {persons.map((p) => (
        <li className="person">
          {`${p.name} :`} {`    +91-${p.number}`}
          <button type="submit" onClick={() => deleteHandler(p.id, p.name)}>
            delete
          </button>
        </li>
      ))}
    </div>
  );
};
export default Person;
