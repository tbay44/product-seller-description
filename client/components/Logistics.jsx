import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Logistics.css';

const Logistics = ({ shipping }) => (
    <div className= "logistics">
        Logistics
        <br></br>
        shipping: {shipping}
    </div>
);

Logistics.propTypes = {
  shipping: PropTypes.bool.isRequired,
};

export default Logistics;
