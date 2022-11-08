import { Footer } from 'flowbite-react';
import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from '../../../assets/logo/logo.jpg';

const FooterSection = () => {
    return (
        <Footer container={true} className='bg-slate-100 mt-32'>
            <div className="w-full container mx-auto">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div className='flex items-center md:mb-0 mb-10'>
                        <Footer.Brand
                            href=""
                            src={logo}
                            alt="priyo-graphy Logo"
                            name="Priyo-Graphy"
                        />
                        <span className='text-2xl font-bold'>Priyo-Graphy</span>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="about" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    My Introduction
                                </Footer.Link>
                                <Footer.Link href="#">
                                    My Achievements
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow Me" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    Github
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Facebook
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Terms & Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        href="#"
                        by="Priyo-Graphy"
                        year={2022}
                    />
                    <p className='text-sm'>Developed by <a href="https://www.linkedin.com/in/ehsanulislamkhan/" target="_blank" rel="noopener noreferrer" className="text-amber-700 text-decoration-none">Ehsan</a></p>

                    <div className="flex space-x-6 sm:mt-0 justify-center mt-4">
                        <FaFacebook className='w-5 h-5 text-blue-800 hover:cursor-pointer' />
                        <FaTwitter className='w-5 h-5 text-sky-600 hover:cursor-pointer' />
                        <FaGithub className='w-5 h-5 text-black hover:cursor-pointer' />
                        <FaInstagram className='w-5 h-5 text-rose-500 hover:cursor-pointer' />
                    </div>
                </div>
            </div>
        </Footer>
    );
};

export default FooterSection;