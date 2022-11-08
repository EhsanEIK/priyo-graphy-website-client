import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateReview = () => {
    const review = useLoaderData();
    const { _id, reviewText, rating } = review;

    const navigate = useNavigate();

    // handler for updating the review into the database
    const handleUpdateReview = event => {
        event.preventDefault();
        const form = event.target;
        const reviewText = form.reviewText.value;
        const rating = form.rating.value;
        const review = {
            reviewText,
            rating,
        }

        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Review Updated Successfully');
                    navigate('/myReviews');
                }
            })
    }

    return (
        <div className='md:w-2/5 md:mx-auto mx-5'>
            <form onSubmit={handleUpdateReview} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="reviewText"
                            value="Your Review"
                        />
                    </div>
                    <Textarea
                        id="reviewText"
                        name='reviewText'
                        placeholder="write your review here..."
                        required={true}
                        rows={4}
                        defaultValue={reviewText}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="rating"
                            value="Rating"
                        />
                    </div>
                    <TextInput
                        id="rating"
                        name='rating'
                        type="text"
                        placeholder="enter the rating in number"
                        defaultValue={rating}
                    />
                </div>
                <Button type="submit">
                    Update
                </Button>
            </form>
        </div>
    );
};

export default UpdateReview;