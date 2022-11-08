import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';

const AddReview = () => {
    return (
        <div className='md:w-2/5 md:mx-auto mx-5'>
            <form className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="reviewDescription"
                            value="Your email"
                        />
                    </div>
                    <Textarea
                        id="reviewDescription"
                        name='reviewDescription'
                        placeholder="write you review here..."
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