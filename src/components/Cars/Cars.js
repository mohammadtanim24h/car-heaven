import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Cart from '../Cart/Cart';
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
        if(cart.length < 4) {
            const newCart = [...cart, car];
            setCart(newCart);
        }
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
            <div className='cart col-lg-3 p-3'>
                <h2 className='text-secondary text-center'>Selected Cars</h2>
                {
                    cart.map(cartItem => <Cart car={cartItem} key={cartItem.id}></Cart>)
                }
                <div className='text-center'>
                    <button className='my-3 me-2 btn btn-outline-success'>Choose 1 for me</button>
                    <button className='btn btn-outline-danger'>Choose Again</button>
                </div>
            </div>
        </div>
    );
};

export default Cars;