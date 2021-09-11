import React from "react";

const Persons = ({ note }) => {
  return (
    <>
      <div>
        <p>
          {note.namep} : {note.number}
        </p>
      </div>
    </>
  );
};
export default Persons;
