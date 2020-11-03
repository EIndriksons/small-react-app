import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useFetch } from '../../9-custom-hooks/final/2-useFetch';

// ! React is fast by itself
// ! it is often unecessary to add optimizations to already existing app's
// ! this is because optimizations themselves take up resources

// * 1) wrap elements in React.memo(). It is checking and memorizing the value
// * if prop value did not change it will not trigger re-rendering

const url = 'https://course-api.netlify.app/api/javascript-store-products';

// every time props or state changes, component re-renders
const calculateMostExpensive = (data) => {
  console.log('hello ');
  return (
    data.reduce((total, item) => {
      const price = item.fields.price;
      if (price >= total) {
        total = price;
      }
      return total;
    }, 0) / 100
  );
};

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  // * 2) addToCart function is also a prop
  // * each time something gets added to the cart it causes re-render for the whole list
  // * for this we useCallback() which creates this function ONLY when we update [cart] value
  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  // * 3) every time Im updating state value Im re-calculating this
  // * and if this function takes a lot of computing power than can be pretty draining
  // * therefore, we can useMemo() to set a dependancy on products
  // * if products don't change - this variable won't be updated
  const mostExpensive = useMemo(() => calculateMostExpensive(products), [products]);

  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: '3rem' }}>cart : {cart}</h1>
      <h1>Most Expensive : ${mostExpensive}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log('big list called');
  });
  return (
    <section className="products">
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product} addToCart={addToCart}></SingleProduct>;
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.count('single item called');
  });
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>add to cart</button>
    </article>
  );
};
export default Index;
