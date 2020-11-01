import React, { useState, useEffect } from 'react';

// * useEffect allows for various side-effects
// * side effects are actions which happen outside the component
// * like API calls, signing up for things, listening for events, etc.
// * by default runs after every re-render
// > cleanup function
// > second parameter

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  // we must pass in fallback function
  // it will run after each re-render
  useEffect(() => {
    console.log('call useEffect');
    if (value > 0) {
      document.title = `New Messages (${value})`;
    }
  }, [value]);

  // * ^ second parameter is the dependency manager
  // * if we leave it empty, it will run EVERY time
  // * if we set it [] it will run ONLY after the initial render
  // * if we set it to 'value' for example, it will ONLY run after 'value' will update

  // * you can also have multiple useEffects
  useEffect(() => {
    console.log('hello world');
  }, []);

  console.log('render component');

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </>
  );
};

export default UseEffectBasics;
