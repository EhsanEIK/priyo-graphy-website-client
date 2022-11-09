import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';

const AddService = () => {
    // custom title in the website
    useTitle('Add New Service');

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const photoURL = form.photoURL.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const service = { name, price, image: photoURL, rating, description };

        fetch('http://localhost:5000/services', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(service),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Service Added Successfully');
                    form.reset();
                }

            })
    }
    return (
        <div className='md:w-2/5 md:mx-auto mx-5'>
            <h1 className='text-3xl text-center bg-slate-200 rounded-lg mb-5 p-10'>Add New Service</h1>
            <form onSubmit={handleAddService} className="flex flex-col gap-4">
                {/* service name */}
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value="Service Name"
                        />
                    </div>
                    <TextInput
                        id="name"
                        name='name'
                        type="text"
                        required={true}
                    />
                </div>
                {/* price */}
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="price"
                            value="Service Price"
                        />
                    </div>
                    <TextInput
                        id="price"
                        name='price'
                        type="text"
                        required={true}
                    />
                </div>
                {/* photoURL */}
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="photoURL"
                            value="Service Photo URL"
                        />
                    </div>
                    <TextInput
                        id="photoURL"
                        name='photoURL'
                        type="text"
                        required={true}
                    />
                </div>
                {/* rating */}
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="rating"
                            value="Service Rating"
                        />
                    </div>
                    <TextInput
                        id="rating"
                        name='rating'
                        type="text"
                        required={true}
                    />
                </div>
                {/* description */}
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="descripiton"
                            value="Service Description"
                        />
                    </div>
                    <textarea
                        id="descripiton"
                        name='description'
                        type="text"
                        required={true}
                        className="w-full rounded-xl border-spacing-1 border-gray-300"
                    ></textarea>
                </div>

                <Button type="submit">
                    Add Service
                </Button>
            </form>
        </div>
    );
};

export default AddService;