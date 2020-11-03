import React from 'react';
import PropTypes from 'prop-types';

// * PropTypes are necessary because if the component gets transferred
// * nonexistant value - it will cause an error

const Product = (props) => {
  return (
    <article className="product">
      <img src={props.image.url} alt={props.name} />
      <h4>{props.name}</h4>
      <p>${props.price}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
