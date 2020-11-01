import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  // * problem with this implementation is that it will set
  // * event listener each and every re-render
  // * eventually it will cause full memory
  // useEffect(() => {
  //   window.addEventListener('resize', checkSize);
  // });

  // * whenever we return a function from useEffect
  // * it will be invoked right before the next time useEffect is called
  // * this is called a cleanup function
  useEffect(() => {
    window.addEventListener('resize', checkSize);

    // we must use cleanup function instead of [] for example
    // because we never know when some components will get rendered or removed
    // * so it is a good practice to always setup a cleanup function
    return () => {
      console.log('cleanup function');
      window.removeEventListener('resize', checkSize);
    };
  });

  return (
    <>
      <h1>Window</h1>
      <h2>{size} Pixels</h2>
    </>
  );
};

export default UseEffectCleanup;
