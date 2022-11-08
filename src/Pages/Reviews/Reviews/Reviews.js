import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = ({ service }) => {
    const { _id } = service;

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/services/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [reviews])

    return (
        <div className='grid grid-cols-3 gap-5 gap-y-10'>
            {
                reviews.map(review => <Review
                    key={review._id}
                    review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;