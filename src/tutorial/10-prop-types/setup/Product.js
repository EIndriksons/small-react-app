import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

// * PropTypes are necessary because if the component gets transferred
// * nonexistant value - it will cause an error

const Product = (props) => {
  // * two ways how to use default props
  // * 1) use Product.defaultProps
  // * 2) put {props.name || 'default name'} in each output

  const url = props.image && props.image.url;

  return (
    <article className="product">
      <img src={url || defaultImage} alt={props.name} />
      <h4>{props.name}</h4>
      <p>${props.price || 3.99}</p>
    </article>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
};

// Product.defaultProps = {
//   name: 'Default Name',
//   price: 3.99,
//   image: defaultImage,
// };

export default Product;
