import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const SignUp = () => {
    // custom title in the website
    useTitle('Sign Up');

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [errorMsg, setErrorMsg] = useState('');

    // navigation setup after successful sign in
    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        setErrorMsg('');

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const imageURL = form.imageURL.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                // get the jwt token and saved it into the local storage
                fetch('https://priyo-graphy-server.vercel.app/jwt', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify({ currentUserEmail: user?.email }),
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('priyo-graphy-token', data.token);
                        hadnleUpdateUserProfile(name, imageURL);
                        toast.success("User created successfully");
                        form.reset();
                        navigate('/signin');
                    })
            })
            .catch(error => setErrorMsg(error.message));
    }

    // update user name and photoURL
    const hadnleUpdateUserProfile = (name, imageURL) => {
        const profile = {
            displayName: name,
            photoURL: imageURL,
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));

    }

    return (
        <div className='md:w-1/4 md:mx-auto mx-5 my-10'>
            <form onSubmit={handleSignUp} className="flex flex-col border border-gray-200 rounded-lg shadow-lg p-10 gap-4">
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
                        placeholder="enter your email address"
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
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="imageURL"
                            value="Your image URL"
                        />
                    </div>
                    <TextInput
                        id="imageURL"
                        name="imageURL"
                        type="text"
                        placeholder="enter your image URL"
                    />
                </div>
                <Button type="submit">
                    Sign up
                </Button>
                <p className='text-sm text-center text-gray-500'>Already have an account?<Link to='/signin' className='hover:underline hover:text-orange-500 ml-1'>Sign in</Link></p>
                <p className='text-red-600 text-lg text-center'>{errorMsg}</p>
            </form>
        </div>
    );
};

export default SignUp;