import React from "react";

const App = () => {
	const course = {
		name: "Half Stack application development",
		parts: [
			{ name: "Fundamentals of React ", exercises: 10, id: 1 },
			{ name: "Using props to pass data ", exercises: 7, id: 2 },
			{ name: "State of a component ", exercises: 14, id: 3 },
			{ name: "Redux ", exercises: 11, id: 4 },
		],
	};
	const [part1, part2, part3, part4] = course.parts;

	const Course = ({ course }) => {
		return (
			<>
				<Header course={course} />
				<Content part1={part1} part2={part2} part3={part3} part4={part4} />
				<Total parts={course.parts} />
			</>
		);
	};

	const Header = ({ course }) => {
		return <h1>{course.name}</h1>;
	};

	const Content = ({ part1, part2, part3 }) => {
		return (
			<>
				<Part part={part1} exercises={part1.exercises} />
				<Part part={part2} exercises={part2.exercises} />
				<Part part={part3} exercises={part3.exercises} />
			</>
		);
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

	return (
		<>
			<Course course={course} />
		</>
	);
};

export default App;
