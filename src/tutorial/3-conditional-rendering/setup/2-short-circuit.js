import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  // * everything in this function has to 'return' some JSX
  // * this is why we can't do { if() {...something...} }
  // * but must use terniary operators
  return (
    <>
      <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1>

      {/* short-circuit evaluation - set default value if text is falsey */}
      <h1>{text || 'john doe'}</h1>

      {/* short-circuit evaluation - do not display if text is falsey */}
      {text && <h1>I am displayed so I am Truthy</h1>}
      {!text && <h1>I am Rerverse Displayed so I am Falsy</h1>}

      {/* toggling */}
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {isError && <h1>Error...</h1>}

      {/* terniary operators */}
      {isError ? <p>There is an error...</p> : <h1>There is no error</h1>}
    </>
  );
};

export default ShortCircuit;
