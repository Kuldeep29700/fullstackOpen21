import React from "react";
import Part from "./part";

const Content = (props) => {
  return <Part part={props.part} exercise={props.exercises} />;
};

export default Content;
