import React from 'react';
import '../styles/Guarentee.css';

const Guarentee = () => (
    <div className="description-guarentee">
        <div className="shop-wrapper">
            <h2 className="shop">Shop with confidence</h2>
        </div>
        <div className="money-back-wrapper" role="presentation">
            <div className="money-img-wrapper">
                <span className="money-img"></span>
            </div>
            <div className="message-wrapper">
                <div className="header">Tbay Money Back Guarantee</div>
                <div className="message">
                    <span>Get the item you ordered or get your money back. </span>
                    <a href="#">Learn more</a>
                </div>
            </div>
        </div>
    </div>
);

export default Guarentee;
