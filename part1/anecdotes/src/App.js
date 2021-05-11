import React, { useState } from 'react';

const MostVotes = ({ votes, anecdotes }) => {
  const reducer = (prev, total) => {
    return prev + total;
  };
  if (votes.reduce(reducer) !== 0) {
    return (
      <>
        <h2>Anecdote With Most Votes</h2>
        <p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>
      </>
    );
  }
  return null;
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const votesCopy = [...votes];

  const selector = () => {
    setSelected(Math.floor(Math.random() * 6));
  };

  const handleVotes = () => {
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  };

  return (
    <>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVotes}>vote</button>
      <button onClick={selector}>next anecdote</button>
      <MostVotes votes={votes} anecdotes={anecdotes} />
    </>
  );
};

export default App;
