import React, { useState } from 'react';

const UseStateObject = () => {
  // * with arrays you can easily filter and re-construct them
  // * but with objects it is a little bit different, because you want to keep some information

  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message form peter',
  });

  const changeMessage = () => {
    // * solution is spread operator ...
    setPerson({ ...person, message: 'hello world' });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
