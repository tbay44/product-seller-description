import React from 'react';
import PropTypes from 'prop-types';

const Seller = ({ seller, sellerRatingCount, sellerFeedback }) => (
    <div className= "seller">
        Seller
        <br></br>
        seller: {seller}
        <br></br>
        sellerRating_count: {sellerRatingCount}
        <br></br>
        seller_feedback: {sellerFeedback}%
    </div>
);

Seller.propTypes = {
  seller: PropTypes.string.isRequired,
  sellerRatingCount: PropTypes.number.isRequired,
  sellerFeedback: PropTypes.string.isRequired,
};

export default Seller;
