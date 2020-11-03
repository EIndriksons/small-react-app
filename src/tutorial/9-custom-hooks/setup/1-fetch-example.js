import React, { useState, useEffect } from 'react';
import { useFetch } from './2-useFetch';

// * custom Hooks allow us to re-use specific hooks
// * google various custom hooks

const url = 'https://course-api.com/javascript-store-products';

const Example = () => {
  // * so now we can just import useFetch whenever we need to fetch any data
  const { loading, products } = useFetch(url);

  console.log(products);

  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  );
};

export default Example;
