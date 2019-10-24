import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Price.css';

const Price = ({ price }) => (
  <div className="description-price">
    <div className="description-price-top-row">
      <div className="description-price-top-row-left">
        <div className="description-price-top-row-left-wrap">
          <label>Price:</label>
          <h1>US {price}</h1>
        </div>
      </div>
      <div className="description-price-top-row-right">
        <div className="description-price-top-row-right-wrap">
          <a className="buy-now">Buy It Now</a>
          <br></br>
          <a className="add-to-cart">Add to cart</a>
          <br></br>
          <a className="add-to-watch">
            <span className="add-to-watch-heart"></span>
            <span className="add-to-watch-txt"> Add to Watchlist</span>
          </a>
        </div>
      </div>
    </div>
    <div className="description-price-bot-row">
      <div className="description-price-bot-row-left">
        <p className="description-price-bot-row-txt">Longtime member</p>
      </div>
      <div className="description-price-bot-row-mid">
        <p className="description-price-bot-row-txt">Returns accepted</p>
      </div>
      <div className="description-price-bot-row-right">
        <p className="description-price-bot-row-txt">30 watchers</p>
      </div>
    </div>
  </div>

);

Price.propTypes = {
  price: PropTypes.string.isRequired,
};

export default Price;
