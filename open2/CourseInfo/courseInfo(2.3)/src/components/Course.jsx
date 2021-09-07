import React from "react";

const Course = ({ course }) => {
  const sum = course.parts.reduce((accumulator, value) => {
    return accumulator + value.exercises;
  }, 0);
  console.log(sum);

  const nameEx = course.parts.map((cvalue) => (
    <p key={cvalue.id}>
      {cvalue.name} {cvalue.exercises}
    </p>
  ));
  return (
    <>
      <h1>{course.name}</h1>
      {nameEx}
      <p>
        <strong>Total of {sum} exercises</strong>
      </p>
    </>
  );
};

export default Course;
