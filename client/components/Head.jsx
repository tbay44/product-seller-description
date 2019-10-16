import React from 'react';
import PropTypes from 'prop-types';

const Head = ({ name, rating, numRatings }) => (
    <div className= "head">
        Head
        <br></br>
        {name}
        <br></br>
        {rating}
        <br></br>
        {numRatings}
    </div>
);

Head.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  numRatings: PropTypes.number.isRequired,
};

export default Head;
