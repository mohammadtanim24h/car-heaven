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
        <div className='row mt-5'>
            <div className='cars-container col-lg-9'>
                <div className='row mx-auto'>
                    {
                        cars.map(car => <Car key={car.id} car={car}></Car>)
                    }
                </div>
            </div>
            <div className='cart col-lg-3'>
                <h2>cart</h2>
            </div>
        </div>
    );
};

export default Cars;