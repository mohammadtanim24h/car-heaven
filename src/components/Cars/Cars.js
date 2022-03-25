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

    const [cart, setCart] = useState([]);
    const handleAddToCart = car => {
        const newCart = [...cart, car];
        setCart(newCart);
    }
    return (
        <div className='row mt-5'>
            <div className='cars-container col-lg-9'>
                <div className='row'>
                    {
                        cars.map(car => <Car key={car.id} handleAddToCart={handleAddToCart} car={car}></Car>)
                    }
                </div>
            </div>
            <div className='cart col-lg-3'>
                <h2>{cart.length}</h2>
            </div>
        </div>
    );
};

export default Cars;