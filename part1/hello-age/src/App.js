import React from 'react';

const Hello = ({ name, age }) => {
	return (
		<div>
			<p>
				henlo {name} you are {age} years old
			</p>
		</div>
	);
};

const App = () => {
	return (
		<>
			<h1>greeting</h1>
			<Hello name='Georgie' age={65} />
			<Hello name='Daisy' age={12} />
		</>
	);
};

export default App;
