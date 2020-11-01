import React from 'react';

const ErrorExample = () => {
  // ! not gonna work because it does not trigger re-rendering
  let title = 'random title';
  const handleClick = () => {
    title = 'hello people';
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
