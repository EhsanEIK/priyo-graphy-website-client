import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AddReview = ({ service }) => {
    const { user } = useContext(AuthContext);
    const { _id, name } = service;

    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;
        const reviewText = form.reviewText.value;
        const rating = form.rating.value;
        const review = {
            serviceId: _id,
            serviceName: name,
            userEmail: user?.email,
            userName: user?.displayName,
            reviewText,
            rating,
        }
        console.log(review);
    }
    return (
        <div className='md:w-2/5 md:mx-auto mx-5'>
            <form onSubmit={handleAddReview} className="flex flex-col gap-4">
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
                    />
                </div>
                <Button type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default AddReview;