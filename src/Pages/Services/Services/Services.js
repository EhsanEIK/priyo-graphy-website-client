import { Dropdown, Pagination } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Service from './Service';

const Services = () => {
    // custom title in the website
    useTitle('All Services');

    const [size, setSize] = useState(6);
    const [page, setPage] = useState(0);

    const [services, setServices] = useState([]);
    const [count, setCount] = useState([]);
    useEffect(() => {
        fetch(`https://priyo-graphy-server.vercel.app/services?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setServices(data.services);
                setCount(data.count);
            })
    }, [page, size])

    // pagination functionality
    const pages = Math.ceil(count / size);

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

            {/* pagination */}
            <div className="flex justify-center mt-16 mb-10">
                <button onClick={() => page > 0 ? setPage(page - 1) : setPage(page)} className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                    <div className="flex items-center -mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>

                        <span className="mx-1">
                            Previous
                        </span>
                    </div>
                </button>
                <div>
                    {
                        [...Array(pages).keys()].map(number =>
                            <button key={number} onClick={() => setPage(number)} className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                                {number + 1}
                            </button>
                        )
                    }
                </div>
                <button onClick={() => page < pages - 1 ? setPage(page + 1) : setPage(page)} className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                    <div className="flex items-center -mx-1">
                        <span className="mx-1">
                            Next
                        </span>

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </button>
                <select onChange={event => setSize(event.target.value)} className="rounded-lg border-1">
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="6" selected>6</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value={count}>All</option>
                </select>
            </div>
        </div>
    );
};

export default Services;