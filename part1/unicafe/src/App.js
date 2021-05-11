import React, { useState } from 'react';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistic = ({ text, value }) => {
  if (text === 'positive ') {
    return (
      <tr>
        <td>{text}</td>
        <td>{value} %</td>
      </tr>
    );
  }
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, votes, average }) => {
  if (votes === 0) {
    return <p>no feedback given</p>;
  }

  return (
    <table>
      <tbody>
        <Statistic text='good ' value={good} />
        <Statistic text='neutral ' value={neutral} />
        <Statistic text='bad ' value={bad} />
        <Statistic text='votes ' value={votes} />
        <Statistic text='average ' value={average / votes} />
        <Statistic text='positive ' value={good / votes} />
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [votes, setVotes] = useState(0);
  const [average, setAverage] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    setVotes(votes + 1);
    setAverage(average + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
    setVotes(votes + 1);
    setAverage(average - 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setVotes(votes + 1);
  };

  return (
    <>
      <h2>give feedback</h2>
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />
      <h2>statistics</h2>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        votes={votes}
        average={average}
      />
    </>
  );
};

export default App;
