import React, { useState } from 'react';
import { data } from '../../../data';

// more components

// * prop drilling is a situation where a variable from parent element
// * must travel (drill) a long way towards child elements through props

// * in this case, if we want to removePerson, we must carry it through props
// * to SinglePerson component

// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <section>
      <h3>Prop Drilling</h3>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

const List = (props) => {
  return (
    <>
      {props.people.map((person) => {
        // * you can also pass on all properties as props by using spread operator
        return <SinglePerson key={person.id} {...person} removePerson={props.removePerson} />;
      })}
    </>
  );
};

const SinglePerson = (props) => {
  return (
    <div className="item">
      <h4>{props.name}</h4>
      <button
        onClick={() => {
          props.removePerson(props.id);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default PropDrilling;
