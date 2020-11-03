import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // * recreate getProducts function only when url changes
  // * another way to use useCallback()
  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  }, [url]);

  // * dont forget to add getProducts as part of dependancy
  // * otherwise you might cause an infinite loop
  useEffect(() => {
    getProducts();
  }, [url, getProducts]);

  return { loading, products };
};
