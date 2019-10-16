import React from 'react';
import PropTypes from 'prop-types';

const Head = ({ name, rating, reviewCount }) => (
    <div className= "head">
        Head
        <br></br>
        product_name: {name}
        <br></br>
        rating: {rating}
        <br></br>
        review_count: {reviewCount}
    </div>
);

Head.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
};

export default Head;
