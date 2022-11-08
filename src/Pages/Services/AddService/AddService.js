import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';

const AddService = () => {
    return (
        <div className='w-2/5 mx-auto'>
            <h1 className='text-3xl text-center bg-slate-200 rounded-lg mb-5 p-10'>Add New Service</h1>
            <form className="flex flex-col gap-4">
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