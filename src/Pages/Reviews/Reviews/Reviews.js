import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = ({ service }) => {
    const { _id } = service;

    // get all reviews
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://priyo-graphy-server.vercel.app/reviews/services/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [reviews])

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 gap-y-10 md:mx-0 mx-3'>
            {
                reviews.map(review => <Review
                    key={review._id}
                    review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;