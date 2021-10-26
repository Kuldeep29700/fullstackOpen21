import React from "react";
const Filter = ({ filter, setFilter }) => {
  return (
    <>
      filter shown with
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setFilter(event.target.value);
        }}
      ></input>
    </>
  );
};
export default Filter;
