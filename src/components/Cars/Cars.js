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

    // Add Items to cart
    const [cart, setCart] = useState([]);
    const handleAddToCart = car => {
        if(cart.length < 4) {
            const newCart = [...cart, car];
            setCart(newCart);
        }
    }

    // Choose one from cart 
    const chooseOne = () => {
        const num = Math.random() * (cart.length - 1);
        const numInt = Math.round(num);
        const randomCar = cart[numInt];
        setCart([randomCar]);
    }

    // Empty the cart
    const emptyCart = () => {
        setCart([]);
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
                    <button onClick={chooseOne} className='my-3 me-2 btn btn-outline-success'>Choose 1 for me</button>
                    <button onClick={emptyCart} className='btn btn-outline-danger'>Choose Again</button>
                </div>
            </div>
        </div>
    );
};

export default Cars;