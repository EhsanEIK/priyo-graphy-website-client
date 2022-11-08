import { Card } from 'flowbite-react';
import React from 'react';

const MyReview = ({ myReview, handleDeleteMyReview }) => {
    const { _id, userName, userPhoto, reviewText, rating } = myReview;

    return (
        <div className="max-w-sm">
            <Card>
                <div className="flex justify-end px-4 pt-4">
                </div>
                <div className="flex flex-col items-center pb-10">
                    <img
                        className="mb-3 h-24 w-24 rounded-full shadow-lg"
                        src={userPhoto}
                        alt={userName}
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {userName}
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        Rating: {rating}
                    </span>
                    <p className='mt-5'>{reviewText}</p>
                    <div className="mt-4 flex space-x-3 lg:mt-6">
                        <button
                            className="w-20 rounded-lg bg-teal-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Edit
                        </button>
                        <button onClick={() => handleDeleteMyReview(_id)}
                            className="w-20 rounded-lg border border-gray-300 bg-red-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default MyReview;