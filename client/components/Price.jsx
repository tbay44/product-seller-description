import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ price }) => (
    <div className= "price">
        Price
        <br></br>
        {price}
    </div>

);

Price.propTypes = {
  price: PropTypes.string.isRequired,
};

export default Price;
