import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import MyReview from './MyReview';

const MyReviews = () => {
    // custom title in the website
    useTitle('My Reviews');

    let count = 1;

    const { user, logOut } = useContext(AuthContext);

    // load the user (my) reviews from database
    const [myReviews, setMyReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('priyo-graphy-token')}`
            }
        })
            .then(res => {
                // jwt verification
                if (res.status === 401 || res.status === 403) {
                    if (count === 1) {
                        count++;
                        return logOut()
                            .then(() => toast.error('unauthorized access, please sign in again'))
                            .catch(error => console.error(error));
                    }
                }
                return res.json()
            })
            .then(data => setMyReviews(data));
    }, [])

    // delete handler for deleting user (my) self review
    const handleDeleteMyReview = id => {
        const agree = window.confirm("Are you sure to delete this review?");
        if (agree) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success("Review deleted successfully");
                        const remainingMyReviews = myReviews.filter(myReview => myReview._id !== id);
                        setMyReviews(remainingMyReviews);
                    }
                })
        }
    }

    return (
        <div>
            <h1 className='md:text-5xl text-3xl text-center font-bold bg-slate-200 rounded-xl shadow-lg md:p-20 p-10 mt-10 mb-16 md:mx-0 mx-3'>My Reviews</h1>
            {
                myReviews.length === 0 ? <p className='text-3xl text-center text-red-500'>No reviews were added</p>
                    : <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 gap-y-10 md:mx-0 mx-3'>
                        {
                            myReviews.map(myReview => <MyReview
                                key={myReview._id}
                                myReview={myReview}
                                handleDeleteMyReview={handleDeleteMyReview}></MyReview>)
                        }
                    </div>
            }
        </div>
    );
};

export default MyReviews;