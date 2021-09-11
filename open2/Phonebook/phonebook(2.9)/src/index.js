import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
const name = [
  { id: 1, namep: "kuldeep", number: "779778330" },
  { id: 2, namep: "Mritunjay", number: "902702930" },
  { id: 3, namep: "Ishaan", number: "987902930" },
  { id: 4, namep: "Abhishek", number: "9807819700" },
  { id: 5, namep: "Amit", number: "7712938230" },
  { id: 6, namep: "Astha", number: "982023830" },
  { id: 7, namep: "Neha", number: "9877902930" },
];

ReactDOM.render(<App person={name} />, document.getElementById("root"));
