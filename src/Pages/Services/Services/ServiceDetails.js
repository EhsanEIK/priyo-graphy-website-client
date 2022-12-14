import { Card } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import AddReview from '../../Reviews/AddReview/AddReview';
import Reviews from '../../Reviews/Reviews/Reviews';

const ServiceDetails = () => {
    // custom title in the website
    useTitle('Service Details');

    const { user } = useContext(AuthContext);
    const serviceDetails = useLoaderData();
    const { name, image, price, rating, description } = serviceDetails;

    //  using location to send the location state to signin
    const location = useLocation();

    return (
        <div>
            {/* service details section */}
            <section>
                <h1 className='md:text-5xl text-3xl text-center font-bold bg-slate-200 rounded-xl shadow-lg md:p-20 p-10 mt-10 mb-16 md:mx-0 mx-3'>Service Details</h1>
                <Card className='md:mx-0 mx-3'>
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
            </section>

            {/* reviews section  */}
            <section className='mt-20'>
                <h1 className='md:text-5xl text-3xl text-center font-bold bg-slate-200 rounded-xl shadow-lg md:p-20 p-10 mt-10 mb-16 md:mx-0 mx-3'>Reviews</h1>
                {
                    user?.email ? <AddReview service={serviceDetails}></AddReview>
                        : <p className='text-3xl text-center text-red-500'>Please
                            <Link to='/signin'
                                state={{ from: location }}
                                replace
                                className='underline'> login</Link> to add a review</p>
                }

                {/* displayed all the reviews of this service */}
                <h1 className='text-3xl text-center font-bold bg-slate-300 rounded-full py-2 mt-20 md:mx-96 mx-3'>Client Reviews</h1>
                <div className='mt-10'>
                    <Reviews
                        service={serviceDetails}></Reviews>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetails;