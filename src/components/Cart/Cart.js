import React from "react";
import './Cart.css';

const Cart = ({ car }) => {
    const {name, img} = car;
    return (
        <div className="cart-container">
            <img src={img} alt="" />
            <div>
                <h4>{name}</h4>
            </div>
        </div>
    );
};

export default Cart;
