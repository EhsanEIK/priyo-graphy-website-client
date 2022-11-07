import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='w-1/4 mx-auto'>
            <form className="flex flex-col border border-gray-200 rounded-lg shadow-lg p-10 gap-4">
                <h1 className='text-3xl font-bold text-center mb-5'>Sign Up</h1>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value="Your name"
                        />
                    </div>
                    <TextInput
                        id="name"
                        name="name"
                        type="text"
                        placeholder="enter your name"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your-email@email.com"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password"
                        name="password"
                        type="password"
                        placeholder="enter your password"
                        required={true}
                    />
                </div>
                <Button type="submit">
                    Sign up
                </Button>
                <p className='text-sm text-center text-gray-500'>Already have an account?<Link to='/signin' className='hover:underline hover:text-orange-500 ml-1'>Sign in</Link></p>
            </form>
        </div>
    );
};

export default SignUp;