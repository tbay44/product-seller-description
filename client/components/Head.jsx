import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Head.css';

const Head = ({ name, rating, reviewCount }) => (
    <div className="head">
      <h2>{name}</h2>
      <div className="rating">
        <div className="stars">{rating} stars here</div>
        <p className="count">{reviewCount} product ratings </p>
      </div>
    </div>
);

Head.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
};

export default Head;
