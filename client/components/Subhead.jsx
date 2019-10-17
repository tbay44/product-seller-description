import React from 'react';
import PropTypes from 'prop-types';

const Subhead = ({ condition, sold, availability }) => (
    <div className= "subhead">
        Subhead
        <br></br>
        condition: {condition}
        <br></br>
        sale_count: {sold}
        <br></br>
        availability: {availability}
    </div>
);

Subhead.propTypes = {
  condition: PropTypes.bool.isRequired,
  sold: PropTypes.number.isRequired,
  availability: PropTypes.number.isRequired,
};

export default Subhead;
