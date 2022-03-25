import React from "react";
import './Cart.css';

const Cart = ({ car }) => {
    const {name, img} = car;
    return (
        <div className="cart-container">
            <div>
                <h4>{name}</h4>
            </div>
            <img src={img} alt="" />
        </div>
    );
};

export default Cart;
