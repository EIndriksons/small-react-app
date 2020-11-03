import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  // * useRef works very similar to useState
  // * difference is that useRef does not trigger re-render
  // * this is useful for forms or targetting DOM nodes/elements
  // * because this does not cause unecessary re-renders that might impact performance

  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };

  useEffect(() => {
    // * we can also useRef for cool stuff like
    // * setting focus on input elements
    refContainer.current.focus();
    console.log(refContainer.current);
  });

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">Submit</button>
        </div>
      </form>
      <div ref={divContainer}>Hello World</div>
    </>
  );
};

export default UseRefBasics;
