import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../../Services/Services/Service';
import Slider from '../Slider/Slider';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/services?size=${3}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <Slider></Slider>

            {/* show services data(only 3 service) */}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 gap-y-10 mt-48'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}></Service>)
                }
            </div>

            {/* see all button to show the all the services from services route */}
            <div className='flex justify-center my-8'>
                <Link to='/services'>
                    <Button color="purple" className='w-36'>
                        See All
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Home;