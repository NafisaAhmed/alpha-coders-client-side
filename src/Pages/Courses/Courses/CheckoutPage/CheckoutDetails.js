import React from 'react';

const CheckoutDetails = ({ check }) => {
    const { title, details, price } = check;
    return (
        <div className='text-center'>
            <h2>{title}</h2>
            <p>{details}</p>
            <p>Course fee: {price}</p>
        </div>
    );
};

export default CheckoutDetails;