import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Service from './Service';

const Services = () => {
    // custom title in the website
    useTitle('All Services');

    const services = useLoaderData();

    return (
        <div>
            <h1 className='md:text-5xl text-3xl text-center font-bold bg-slate-200 rounded-xl shadow-lg md:p-20 p-10 mt-10 mb-16 md:mx-0 mx-3'>All Services</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 gap-y-10 md:mx-0 mx-3'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;