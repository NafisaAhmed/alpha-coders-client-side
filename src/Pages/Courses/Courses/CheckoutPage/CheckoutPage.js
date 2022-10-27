import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutDetails from './CheckoutDetails';

const CheckoutPage = () => {
    const checks = useLoaderData();
    console.log(checks);
    return (
        <div>
            {
                checks.map(check => <CheckoutDetails
                    key={check.id}
                    check={check}
                ></CheckoutDetails>)
            }
        </div>
    );
};

export default CheckoutPage;