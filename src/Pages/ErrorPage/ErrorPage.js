import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import errorPageImage from '../../assets/errorPageImage/errorPageImage.jpg';

const ErrorPage = () => {
    return (
        <div clclassName='h-screen w-screen'>
            <img className='h-screen w-screen' src={errorPageImage} alt="errorPageImage" />
            <div className='flex justify-center mb-3'>
                <Link to='/'>
                    <Button color="purple" className='px-10 py-1'>
                        Home
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;