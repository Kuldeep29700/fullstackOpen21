import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];
  const votva = () => {
    const copy = [...point];
    copy[select] += 1;
    setPoint(copy);
  };
  const [select, setNew] = useState(0);
  const [point, setPoint] = useState(new Array(anecdotes.length).fill(0));
  const nextLine = () => {
    let rand = Math.floor(Math.random() * 7);
    console.log(rand);
    setNew(rand);
  };
  // console.log(Math.max(...point) + "max vote");

  const maxAnecdote =
    // console.log(anecdotes[point.indexOf(Math.max(...point))]);
    anecdotes[point.indexOf(Math.max(...point))];

  return (
    <>
      <p>{anecdotes[select]}</p>
      <p>
        <strong>has {point[select]} vote</strong>
      </p>
      <br />
      <br />
      <br />
      <h3>Anecdote with most votes:</h3>
      <p>{maxAnecdote}</p>
      <p>
        <strong>has maximum {Math.max(...point)} votes</strong>
      </p>
      <button onClick={votva}>vote</button>
      <button onClick={nextLine}>next anecdote</button>
    </>
  );
};

export default App;
