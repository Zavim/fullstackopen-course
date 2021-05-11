import React, { useState } from 'react';

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>press da buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(' ')} </div>;
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'));
    setRight(right + 1);
  };

  const Reset = () => {
    setLeft(0);
    setRight(0);
    setAllClicks([]);
  };

  return (
    <>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
      <Button handleClick={Reset} text='clear' />
    </>
  );
};

export default App;
