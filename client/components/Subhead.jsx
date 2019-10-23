import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Subhead.css';

const Subhead = ({ condition, sold, availability }) => {
  const conditionValue = condition === true ? 'New' : 'Used';
  return (
    <div className="subhead">
      <div>
        <div className="condition-lable">
          Condition:
        </div>
        <div className="condition-value">
          {conditionValue}
        </div>
        <div className="subhead-space"></div>
        <div className="quantity-available-wrapper">
          <div className="quantity-lable">
            <label>Quantity:</label>
          </div>
          <div>
            <div className="box-available-sold">
              <input className="quantity-text-box" type="text" autoComplete="off" size="4" defaultValue="1" name="quantity" id="qtyTextBox" isvalid= "true"></input>
              <span className="quantity-text">
                <span className="quantity-subtext">
                  <span>More then {availability} available</span>
                </span>
                <span className="soldwithfeedback">
                  <span className="false-slash">/</span>
                  <span className="sold">
                    <a className="sold-underline" href="#">{sold} sold</a>
                  </span>
                  <span className="soldfeedbackslash">/</span>
                  <span className="feedback1">
                    <span className="feedback2">
                      <a className="feedback-link" href="#">See feedback</a>
                    </span>
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Subhead.propTypes = {
  condition: PropTypes.bool.isRequired,
  sold: PropTypes.number.isRequired,
  availability: PropTypes.number.isRequired,
};

export default Subhead;
