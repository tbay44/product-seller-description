import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Seller.css';

const Seller = ({ seller, sellerRatingCount, sellerFeedback }) => {
  const hello='hello';
  return (
    <div className="description-seller">
      <div className="description-seller-inner-wrapper">
        <h2 className="header">Seller information</h2>
        <div className="name-rating-star-wrap">
            <span className="name-span">{seller} </span>
            <div className="rating-star-wrap">
               (
                <a href="#" title="feedback score: 2872">{sellerRatingCount} </a>
                <span className="star"></span>
                )
            </div>
        </div>
        <div className="feedback">
          {sellerFeedback}% Positive feedback
        </div>
        <div className="seller-dotted-line"></div>
        <div className="save-wrapper">
          <a className="save-a">
            <div className="heart"></div>
            <span>Save this Seller</span>
          </a>
        </div>
        <div className="text-wrapper">
          <a className="text">Contact seller</a>
        </div>
        <div className="text-wrapper">
          <a className="text">Visit store</a>
        </div>
        <div className="text-wrapper">
          <a className="text">See other items</a>
        </div>
      </div>
    </div>
  );
};

Seller.propTypes = {
  seller: PropTypes.string.isRequired,
  sellerRatingCount: PropTypes.number.isRequired,
  sellerFeedback: PropTypes.string.isRequired,
};

export default Seller;
