import React from "react";
import "./Car.css";

const Car = ({ car }) => {
    console.log(car);
    const {name, img, price} = car;
    return (
        <div className="col-lg-4">
            <img src="" alt="" />
            <h5>{name}</h5>
        </div>
    );
};

export default Car;
