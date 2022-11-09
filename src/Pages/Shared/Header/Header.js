import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.jpg';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => toast.success('Sign out successfully'))
            .catch(error => console.error(error.message));
    }

    return (
        <div className='shadow-lg py-2'>
            <Navbar
                fluid={true}
                rounded={true}
                className='container mx-auto'
            >
                <Link to='/' className='flex'>
                    <img
                        src={logo}
                        className="mr-3 h-6 sm:h-9"
                        alt="Priyo-Graphy Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Priyo-Graphy
                    </span>
                </Link>
                <div className="flex items-center md:order-2">
                    <div className='mr-5'>
                        {
                            user || user?.email ? <p className='bg-gray-200 rounded-lg px-3 py-1'>Welcome, {user?.email || user?.displayName}</p> : ''
                        }
                    </div>
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar title={user?.displayName} alt="User Profile" img={user?.photoURL} rounded={true} />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                {user?.displayName}
                            </span>
                            <span className="block truncate text-sm font-medium">
                                {user?.email}
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        {
                            user || user?.email ?
                                <Dropdown.Item onClick={handleSignOut}>
                                    Sign out
                                </Dropdown.Item> : ''
                        }
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Link to='/'>Home</Link>
                    <Link to='/blogs'>Blogs</Link>
                    {
                        user || user?.email ? <>
                            <Link to='/myReviews'>My Reviews</Link>
                            <Link to='/addService'>Add Service</Link>
                            <Link onClick={handleSignOut}>Sign Out</Link>
                        </>
                            :
                            <>
                                <Link to='/signin'>Sign In</Link>
                                <Link to='/signup'>Sign Up</Link>
                            </>
                    }
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;