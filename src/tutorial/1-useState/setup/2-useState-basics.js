import React, { useState } from 'react';

const UseStateBasics = () => {
  // ! To use useState or any other 'use' function the function must be Capitalized

  // useState() is a function
  // it returns an array of two values
  // [state, stateHandlerFunction]
  // state - is the initial (default) state
  // stateHandlerFunction is the function which handles the previous state

  const [text, setText] = useState('random title');

  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world');
    } else {
      setText('random title');
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
