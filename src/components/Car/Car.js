import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import "./Car.css";

const Car = ({ car, handleAddToCart }) => {
    const { name, img, price } = car;
    return (
        <div className="car-card col-md-4">
            <img className="img-fluid" src={img} alt="car" />
            <div>
                <h4 className="mt-2">{name}</h4>
                <p>${price}</p>
                <button onClick={() => handleAddToCart(car)} className="btn-cart">Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Car;
