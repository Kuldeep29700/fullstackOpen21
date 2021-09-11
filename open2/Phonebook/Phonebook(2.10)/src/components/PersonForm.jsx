import React from "react";

const PersonForm = ({ addPeople, name, number, eventname, eventNumb }) => {
  return (
    <>
      <form onSubmit={addPeople}>
        <div>
          {" "}
          Name:
          <input value={name} onChange={eventname} />
        </div>
        <div>
          Number : <input value={number} onChange={eventNumb} />
        </div>

        <button type="submit">Add</button>
      </form>
    </>
  );
};
export default PersonForm;
