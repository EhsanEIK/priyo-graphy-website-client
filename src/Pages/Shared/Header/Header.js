import { Avatar, Dropdown, Navbar, Spinner } from 'flowbite-react';
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
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Link to='/' className='flex'>
                <img
                    src={logo}
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Priyo-Graphy
                </span>
            </Link>
            <div className="flex items-center md:order-2">
                <div className='mr-5'>
                    {
                        user?.email ? <p className='bg-gray-200 rounded-lg px-3 py-1'>Welcome, {user?.email}</p> : ''
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
                    <Dropdown.Item>
                        Earnings
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    {
                        user?.email ?
                            <Dropdown.Item onClick={handleSignOut}>
                                Sign out
                            </Dropdown.Item> : ''
                    }
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    href="/"
                >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/">
                    About
                </Navbar.Link>
                <Navbar.Link href="/">
                    Pricing
                </Navbar.Link>
                <Navbar.Link href="/">
                    Contact
                </Navbar.Link>
                {
                    user?.email ? <>
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

    );
};

export default Header;