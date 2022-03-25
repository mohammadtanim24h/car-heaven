import React from "react";
import "./Car.css";

const Car = ({ car }) => {
    console.log(car);
    const { name, img, price } = car;
    return (
        <div className="car-card col-lg-4">
            <img src={img} alt="" />
            <div>
                <h5 className="mt-2">{name}</h5>
                <p>${price}</p>
            </div>
        </div>
    );
};

export default Car;
