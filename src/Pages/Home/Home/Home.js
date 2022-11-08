import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>

            {/* see all button to show the all the services from services route */}
            <div className='flex justify-center my-8'>
                <Link to='/services'>
                    <Button color="purple">
                        See All
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Home;