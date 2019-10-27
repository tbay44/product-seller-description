import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Logistics.css';

const Logistics = ({ shipping }) => {
  let date = new Date();
  const randomDay = Math.floor(Math.random() * (8 - 5) + 5);
  date.setDate(date.getDate() + randomDay);
  date = date.toString();
  const weekDay = date.slice(0, 3);
  const month = date.slice(4, 7);
  const day = date.slice(8, 10);
  if (!shipping) {
    return (
      <div className="description-logistics-false">
        <div className="left-column">
          <label className="shipping-label">Shipping:</label>
          <label className="delivery-label">Delivery:</label>
          <label className="payments-label">Payments:</label>
          <label className="returns-label">Returns:</label>
        </div>
        <div className="right-column">
          <div className="standard-shipping-wrap">
            <p className="shipping-cost">$2.75</p>
            <p className="shipping-text">Standard Shipping</p>
            <p className="shipping-divider"> | </p>
            <p className="shipping-details">See details</p>
          </div>
          <div className="location-wrap">
            <p className="item-location"> Item location: Miami, Florida, United States</p>
            <p className="ships-to">Ships to: United States</p>
          </div>
          <div className="dotted-line one"></div>
          <div className="delivery-wrap">
            <p className="default-text">Estimated on or before </p>
            <p className="date">{weekDay}. {month}. {day} </p>
            <p className="default-text">to 71270 </p>
            <span className="question-mark-span">
              <a className="question-mark-a"></a>
            </span>
          </div>
          <div className="dotted-line two"></div>
          <div className="payments-card-images-wrap">
            <img className="card-image-paypal" src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png"></img>
            <img className="card-image-visa" src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png"></img>
            <img className="card-image-mastercard" src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png"></img>
            <img className="card-image-american-express" src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png"></img>
            <img className="card-image-discover" src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png"></img>
          </div>
          <div className="paypal-credit-wrap">
            <img className="paypal-credit-img" src="https://ir.ebaystatic.com/pictures/aw/pics/logos/logoPaypalCredit_104x16.png"></img>
            <div className="paypal-text-wrap">
              <p className="paypal-text financing">Special financing available. </p>
              <p className="paypal-text apply-terms">Apply Now</p>
              <p className="paypal-text divider"> | </p>
              <p className="paypal-text apply-terms"> See terms</p>
            </div>
          </div>
          <div className="returns-wrapper">
            <p className="returns text">30 day returns. Buyer pays for return shipping</p>
            <p className="returns divider"> | </p>
            <p className="returns details">See details</p>
          </div>
        </div>
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
            <strong className="fast-n-free-text">{"FAST 'N FREE"}</strong>
          </span>
        </div>
        <div className="shipping-guarentee-wrap">
          <div className="shipping-date">
            <p className="black-text">Guaranteed by </p>
            <p className="green-text">{weekDay}. {month}. {day}</p>
            <p className="divider"> | </p>
            <p className="details-text">See details</p>
          </div>
          <p className="item-location"> Item location: Valley Cottage, New York, United States</p>
          <div className="ship-to-location-wrap">
            <p className="ship-to-location">Ships to: United States and many other countries | </p>
            <p className="details-text">See details</p>
          </div>
        </div>
        <div className="payments-card-images-wrap">
         <img className="card-image-paypal" src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png"></img>
         <img className="card-image-visa" src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png"></img>
         <img className="card-image-mastercard" src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png"></img>
         <img className="card-image-american-express" src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png"></img>
         <img className="card-image-discover" src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png"></img>
        </div>
        <div className="paypal-credit-wrap">
          <img className="paypal-credit-img" src="https://ir.ebaystatic.com/pictures/aw/pics/logos/logoPaypalCredit_104x16.png"></img>
          <div className="paypal-text-wrap">
            <p className="paypal-text financing">Special financing available. </p>
            <p className="paypal-text apply-terms">Apply Now</p>
            <p className="paypal-text divider"> | </p>
            <p className="paypal-text apply-terms"> See terms</p>
          </div>
        </div>
        <div className="returns-wrapper">
          <p className="returns text">30 day returns. Buyer pays for return shipping</p>
          <p className="returns divider"> | </p>
          <p className="returns details">See details</p>
        </div>
      </div>
    </div>
  );
};

Logistics.propTypes = {
  shipping: PropTypes.bool.isRequired,
};

export default Logistics;
