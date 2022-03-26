import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div className='quesion-container container mt-5'>
            <div className='question'>
                <h3>How React Works</h3>
                <p>React keeps a copy of the Real DOM called Virtual DOM. It is represented as a tree. When the state of a component changes, a new Virtual DOM tree is created. So then react has two representations of the Virtual DOM. One before the change of the state and one after the change of the state. With the help of the diff algorithm, it compares both DOMs and decides which things have been changed. Then it efficiently updates the Real DOM in the best possible way.</p>
            </div>
            <div className='question'>
                <h3>Props Vs State</h3>
                <p>States contain data or information that can change depending on our interaction on a website. Props are used to send data from one component to another component. Props are read-only and immutable which means we cannot change them. On the other hand, State is mutable and it can change. State is handled inside a component and props are handled outside of a component.</p>
            </div>
        </div>
    );
};

export default Questions;