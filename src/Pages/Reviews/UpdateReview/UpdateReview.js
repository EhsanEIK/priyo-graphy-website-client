import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
    const review = useLoaderData();
    const { reviewText, rating } = review;

    // handler for saving the review into the database
    const handleUpdateReview = event => {
        event.preventDefault();
        const form = event.target;
        const reviewText = form.reviewText.value;
        const rating = form.rating.value;
        const date = new Date();
        // const review = {
        //     serviceId: _id,
        //     userEmail: user?.email,
        //     userName: user?.displayName,
        //     userPhoto: user?.photoURL,
        //     reviewText,
        //     rating,
        //     date,
        // }

        // fetch('http://localhost:5000/reviews', {
        //     method: "POST",
        //     headers: {
        //         'content-type': 'application/json',
        //     },
        //     body: JSON.stringify(review),
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.acknowledged) {
        //             toast.success('Review Added Successfully');
        //             form.reset();
        //         }
        //     })
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