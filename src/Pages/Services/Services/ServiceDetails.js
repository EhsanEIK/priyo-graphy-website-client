import { Card } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AddReview from '../../Reviews/AddReview/AddReview';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    const { name, image, price, rating, description } = serviceDetails;

    return (
        <div>
            <Card>
                <img src={image} alt={name} className="h-full w-full" />

                <h5 className="text-4xl font-semibold text-center tracking-tight text-gray-900 dark:text-white">
                    {name}
                </h5>
                <p className="text-base text-gray-900 dark:text-white">
                    {description}
                </p>
                <div className="mt-2.5 mb-5 flex items-center">
                    <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                        Rating: {rating}
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        ${price}
                    </span>
                </div>
            </Card>

            <div className='mt-20'>
                <h1 className='text-5xl text-center font-bold mt-10 mb-16'>Reviews</h1>
                <AddReview></AddReview>
            </div>
        </div>
    );
};

export default ServiceDetails;