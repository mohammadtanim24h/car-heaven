import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import './Cars.css';

const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('cars.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, []);
    return (
        <div className='row'>
            <div className='cars-container col-lg-8'>
                <div className='row'>
                    {
                        cars.map(car => <Car key={car.id} car={car}></Car>)
                    }
                </div>
            </div>
            <div className='cart col-lg-4'>
                <h2>cart</h2>
            </div>
        </div>
    );
};

export default Cars;