import React from "react";

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
};

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map((cvalue) => (
        <Part key={cvalue.id} cvalue={cvalue} />
      ))}
    </>
  );
};
const Part = (props) => {
  return (
    <p>
      {props.cvalue.name} {props.cvalue.exercises}
    </p>
  );
};
const Total = ({ course }) => {
  const sum = course.parts.reduce(
    (accumulator, value) => accumulator + value.exercises,
    0
  );
  return (
    <p>
      <strong>Total of {sum} exercises</strong>
    </p>
  );
};

export default Course;
