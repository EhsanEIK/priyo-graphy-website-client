import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';

const Services = () => {
    const services = useLoaderData();
    console.log(services)

    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 gap-y-10'>
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