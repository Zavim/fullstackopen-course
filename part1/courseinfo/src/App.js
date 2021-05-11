import React from 'react';

const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
			{ name: 'Fundamentals of React ', exercises: 10 },
			{ name: 'Using props to pass data ', exercises: 7 },
			{ name: 'State of a component ', exercises: 14 },
		],
	};
	const [part1, part2, part3] = course.parts;

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

	const Total = ({ part1, part2, part3 }) => {
		return (
			<p>
				Number of exercises{' '}
				{part1.exercises + part2.exercises + part3.exercises}
			</p>
		);
	};

	return (
		<>
			<Header course={course} />
			<Content part1={part1} part2={part2} part3={part3} />
			<Total part1={part1} part2={part2} part3={part3} />
		</>
	);
};

export default App;
