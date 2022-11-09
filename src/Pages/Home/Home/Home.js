import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Service from '../../Services/Services/Service';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Slider from '../Slider/Slider';

const Home = () => {
    // custom title in the website
    useTitle('Home');

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/services?size=${3}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <Slider></Slider>
            <About></About>
            {/* show services data (only 3 service) */}
            <section className='mt-48'>
                <h1 className="text-3xl text-center font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl mb-16">
                    My Service
                </h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 gap-y-10 md:mx-0 mx-3'>
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
            </section>
            <Contact></Contact>
        </div>
    );
};

export default Home;