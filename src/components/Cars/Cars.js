import React, { useEffect, useState } from 'react';
import './Cars.css';

const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('cars.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, []);
    console.log(cars);
    return (
        <div className='row'>
            <div className='cars-container col-lg-7'>
                <h2>Cars</h2>
            </div>
            <div className='cart col-lg-5'>
                <h2>cart</h2>
            </div>
        </div>
    );
};

export default Cars;