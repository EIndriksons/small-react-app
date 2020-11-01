import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  // lets start with empty array
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };

  // ! useEffect CANNOT be asynchronous!
  // * either you can setup async await INSIDE useEffect
  // * or setup a separate function
  useEffect(() => {
    getUsers();
  }, []);

  // ! be careful how you setup your useEffect
  // ! if you do not add [] -> setUsers will cause re-render,
  // ! meaning useEffect will be called again and infinite loop will happen

  return (
    <>
      <h3>Github Users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
