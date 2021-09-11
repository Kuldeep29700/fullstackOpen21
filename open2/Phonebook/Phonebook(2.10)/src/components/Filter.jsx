import React from "react";

const Filter = (props) => {
  return (
    <>
      <input
        value={props.Filter}
        placeholder="Search..."
        onChange={props.eventfilter}
      />
      <br />
    </>
  );
};
export default Filter;
