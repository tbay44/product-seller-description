import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Price.css';

const Price = ({ price }) => (
    <div className= "price">
        Price
        <br></br>
        price: {price}
    </div>

);

Price.propTypes = {
  price: PropTypes.string.isRequired,
};

export default Price;
