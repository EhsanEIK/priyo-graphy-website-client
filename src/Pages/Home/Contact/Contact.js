import React from 'react';

const Contact = () => {
    return (
        <section className="min-h-screen bg-cover mt-48" style={{ backgroundImage: "url('https://i.ibb.co/MZK3Y69/images.jpg')" }}>
            <div className="flex flex-col min-h-screen bg-black/60">
                <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
                    <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
                        <div className="text-white lg:w-1/2 lg:mx-6">
                            <h1 className="text-3xl font-semibold capitalize lg:text-5xl">Contact Details</h1>

                            <div className="max-w-xl mt-6">
                                <p className="flex items-start -mx-2 my-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>

                                    <span className="mx-2 text-white truncate w-72">
                                        Rattarpul Segunbag, 231-525, Block-A, Road-11, Bangladesh
                                    </span>
                                </p>

                                <p className="flex items-start -mx-2 my-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>

                                    <span className="mx-2 text-white truncate w-72">(+880) 123456789</span>
                                </p>

                                <p className="flex items-start -mx-2 my-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>

                                    <span className="mx-2 text-white truncate w-72">priyo@email.com</span>
                                </p>
                            </div>

                            <button className="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                                get in touch
                            </button>

                            <div className="mapouter mt-10">
                                <iframe className="gmap_iframe w-full h-80" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Mohakhali, dhaka,bangladesh&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                            </div>
                        </div>

                        <div className="mt-8 lg:w-1/2 lg:mx-6">
                            <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                                <h1 className="text-2xl font-medium text-gray-700 dark:text-gray-200">Send Your Message</h1>

                                <p className="mt-4 text-gray-500 dark:text-gray-400">
                                    Ask us everything and we would love
                                    to hear from you
                                </p>

                                <form className="mt-6">
                                    <div className="flex-1">
                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                        <input type="text" placeholder="enter your full name" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>

                                    <div className="flex-1 mt-6">
                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                        <input type="email" placeholder="enter your email address" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>

                                    <div className="w-full mt-6">
                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                        <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="write your message"></textarea>
                                    </div>

                                    <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;