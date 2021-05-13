import React from 'react';

const Header = ({ iterator, courses }) => {
  // console.log(courses[0].name);
  console.log(courses[iterator - 1].name);
  // console.log(iterator);
  return <h2>{courses[iterator - 1].name}</h2>;
  // return <h2>{courses}</h2>;
};

const Part = ({ part }) => {
  return (
    <>
      <p>
        <strong>{part.name}</strong>
        {part.exercises}
      </p>
    </>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);
  return (
    <p>
      <strong> total of {total} exercises</strong>
    </p>
  );
};

const Course = ({ courses }) => {
  // console.log(courses.map((course) => course));
  return (
    <>
      {courses.map((course) => (
        <Content key={course.id} parts={course.parts} courses={courses} />
      ))}
    </>
  );
};

const Content = ({ courses, parts }) => {
  // console.log(courses.map((course) => course.id));
  return (
    <>
      {courses.map((course) => (
        <Header key={course.id} iterator={course.id} courses={courses} />
      ))}
      {/* <Header courses={courses} /> */}
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <Total parts={parts} />
    </>
  );
};

export default Course;
