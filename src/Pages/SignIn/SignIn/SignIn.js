import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const SignIn = () => {
    // custom title in the website
    useTitle('Sign In');

    const { signIn, socialMediaSignIn } = useContext(AuthContext);
    const [errorMsg, setErrorMsg] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    // navigation setup after successful sign in
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    // sign in with email & password
    const handleSignIn = event => {
        event.preventDefault();
        setErrorMsg('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
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
                        toast.success("Sign in successfully");
                        form.reset();
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => setErrorMsg(error.message));
    }

    // sign in with google
    const handleGoogleSignIn = () => {
        setErrorMsg('');

        socialMediaSignIn(googleProvider)
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
                        toast.success('User sign in successfully with google')
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => setErrorMsg(error.message));
    }

    // sign in with facebook
    const handleFacebookSignIn = () => {
        setErrorMsg('');

        socialMediaSignIn(facebookProvider)
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
                        toast.success('User sign in successfully with facebook')
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => setErrorMsg(error.message));
    }

    return (
        <div className='md:w-1/4 md:mx-auto mx-5 my-10'>
            <form onSubmit={handleSignIn} className="flex flex-col border border-gray-200 rounded-lg shadow-lg p-10 gap-4">
                <h1 className='text-3xl font-bold text-center mb-5'>Sign In</h1>
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
                        placeholder="enter your email"
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
                <Button type="submit" className='bg-purple-700'>
                    Sign in
                </Button>

                <small className='text-xs text-center text-gray-500'>social media sign in</small>

                {/* google sign in button  */}
                <Button onClick={handleGoogleSignIn} color="light">
                    <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                        <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                        <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                    </svg>

                    <span className="mx-4">Sign in with Google</span>
                </Button>

                {/* facebook sign in button */}
                <Button onClick={handleFacebookSignIn} className='bg-blue-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6 mx-2"><linearGradient id="Ld6sqrtcxMyckEl6xeDdMa" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4" /><stop offset="1" stop-color="#007ad9" /></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z" /><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z" /></svg>

                    <span className="text-white mx-2">Sign in with Facebook</span>
                </Button>

                <p className='text-sm text-center text-gray-500'>Don't have an account?<Link to='/signup' className='hover:underline hover:text-orange-500 ml-1'>Sign up</Link></p>
                <p className='text-red-600 text-lg text-center'>{errorMsg}</p>
            </form>
        </div>
    );
};

export default SignIn;