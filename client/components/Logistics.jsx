import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Logistics.css';

const Logistics = ({ shipping }) => {
  if (!shipping) {
    return (
      <div className="description-logistics-false">
        False Shipping {shipping}
      </div>
    );
  }
  return (
    <div className="description-logistics-true">
      <div className="left-column">
        <label className="shipping-label">Shipping:</label>
        <label className="payments-label">Payments:</label>
        <label className="returns-label">Returns:</label>
      </div>
      <div className="right-column">
        <div className="fast-n-free-wrap">
          <img alt="Estimated by tBay FAST 'N FREE " src="https://ir.ebaystatic.com/rs/v/xmyxg1ubry1npie2zlpan5za3yu.png"></img>
          <span className="fast-n-free-span">
            <strong className="fast-n-free-text">FAST N FREE</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

Logistics.propTypes = {
  shipping: PropTypes.bool.isRequired,
};

export default Logistics;
