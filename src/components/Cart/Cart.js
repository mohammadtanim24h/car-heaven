import React from "react";
import './Cart.css';

const Cart = ({ car }) => {
    const {name, img} = car;
    return (
        <div className="cart-container text-center mx-auto">
            <div>
                <h5>{name}</h5>
            </div>
            <img src={img} alt="" />
        </div>
    );
};

export default Cart;
