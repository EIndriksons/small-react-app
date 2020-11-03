import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

// * to use context API we must 1) initialize the Context
const PersonContext = React.createContext();
// provides two components - Provider, Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    // * 2) we then wrap the components in the Context Provider
    // * 3) pass the necessary props through value
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>prop drilling</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  const data = useContext(PersonContext);
  return (
    <>
      {data.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  // * 4) access the passed props anywhere in the child components
  // * by using useContext(ContextAPIName)
  const { removePerson } = useContext(PersonContext);

  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
