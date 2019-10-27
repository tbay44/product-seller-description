import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Head.css';

const Head = ({ name, rating, reviewCount }) => {
  let star1;
  let star2;
  let star3;
  let star4;
  let star5;

  if (rating < 0.25) {
    star1 = 'empty';
  } else if (rating >= 0.25 && rating <= 0.75) {
    star1 = 'mid';
  } else {
    star1 = 'full';
  }

  if (rating < 1.25) {
    star2 = 'empty';
  } else if (rating >= 1.25 && rating <= 1.75) {
    star2 = 'mid';
  } else {
    star2 = 'full';
  }

  if (rating < 2.25) {
    star3 = 'empty';
  } else if (rating >= 2.25 && rating <= 2.75) {
    star3 = 'mid';
  } else {
    star3 = 'full';
  }

  if (rating < 3.25) {
    star4 = 'empty';
  } else if (rating >= 3.25 && rating <= 3.75) {
    star4 = 'mid';
  } else {
    star4 = 'full';
  }

  if (rating < 4.25) {
    star5 = 'empty';
  } else if (rating >= 4.25 && rating <= 4.75) {
    star5 = 'mid';
  } else {
    star5 = 'full';
  }

  return (
    <div className="head">
       <h2>{name}</h2>
       <div className="rating">
        <div className="stars">
          <i className= {star1}></i>
          <i className= {star2}></i>
          <i className= {star3}></i>
          <i className= {star4}></i>
          <i className= {star5}></i>
        </div>
         <p className="count">{reviewCount} product ratings </p>
      </div>
    </div>
  );
};

Head.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
};

export default Head;
