import { Card } from 'flowbite-react';
import React from 'react';

const Review = ({ review }) => {
    const { userName, userPhoto, reviewText, rating } = review;

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
                </div>
            </Card>
        </div>
    );
};

export default Review;