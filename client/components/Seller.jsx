import React from 'react';
import PropTypes from 'prop-types';

const Seller = ({ seller, numRatings, feedback }) => (
    <div className= "seller">
        Seller
        <br></br>
        {seller}
        <br></br>
        {numRatings}
        <br></br>
        {feedback}
    </div>
);

Seller.propTypes = {
  seller: PropTypes.string.isRequired,
  numRatings: PropTypes.number.isRequired,
  feedback: PropTypes.number.isRequired,
};

export default Seller;
