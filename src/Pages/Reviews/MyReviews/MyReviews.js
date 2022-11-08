import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import MyReview from './MyReview';

const MyReviews = () => {
    const { user } = useContext(AuthContext);

    const [myReviews, setMyReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data));
    }, [myReviews])

    return (
        <div>
            <div className='grid grid-cols-3 gap-5 gap-y-10'>
                {
                    myReviews.map(myReview => <MyReview
                        key={myReview._id}
                        myReview={myReview}></MyReview>)
                }
            </div>
        </div>
    );
};

export default MyReviews;