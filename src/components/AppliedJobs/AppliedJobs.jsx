import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../Utils/fakeDB';
import { useLoaderData } from 'react-router-dom';
import Applied from '../Applied/Applied';

const AppliedJobs = () => {

    const pData = useLoaderData();

    let cart = []
    const savedCart = getStoredCart()

    for (const id in savedCart) {
        const foundProduct = pData.find(product => product.id === id)

        if (foundProduct) {
            foundProduct.quantity = savedCart[id]
            cart.push(foundProduct)
        }
    }

    console.log(cart)

    return (
        <div className='my-10'>
            <h3 className='text-center text-2xl mb-10 font-bold'>Applied Jobs</h3>
            {
                cart.map(dt =>
                    <div key={dt.id}>
                        <Applied
                            dt={dt}
                        ></Applied>
                    </div>
                )
            }
        </div>
    );
};

export default AppliedJobs;