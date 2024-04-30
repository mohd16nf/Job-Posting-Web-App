// components/HeroSection.js
'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { IoSearchOutline, IoLocationOutline } from 'react-icons/io5';
import { ChevronDownIcon } from '@heroicons/react/outline';
import heroImg from '../public/image3.png';
import Link from 'next/link'; // Import Link from Next.js

const HeroPage = () => {
    const [selectedJob, setSelectedJob] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [showJobDropdown, setShowJobDropdown] = useState(false);
    const [showCountryDropdown, setShowCountryDropdown] = useState(false);

    const handleJobChange = (event) => {
        setSelectedJob(event.target.textContent);
    };

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.textContent);
    };

    const toggleJobDropdown = () => {
        setShowJobDropdown(!showJobDropdown);
    };

    const toggleCountryDropdown = () => {
        setShowCountryDropdown(!showCountryDropdown);
    };

    return (
        <section id='heroPage-container' >
            <div className="mx-auto flex  md:flex-row flex-col items-center justify-center w-full" id=''>
                <div className="flex-1 flex flex-col justify-center items-center md:pr-5 mb-10" id='hero-container1'>
                    <h1 className="text-3xl font-bold text-start mb-5" id='heading'>
                        Find the perfect job <br/>  that you deserve.
                    </h1>
                    <div className="flex justify-center items-center mt-5" id='input-tags-container'>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Job title"
                                className="focus:outline-none pl-12 input-tags"
                                value={selectedJob}
                                readOnly
                            />
                            <IoSearchOutline className="h-6 w-6 absolute top-1/2 left-4 transform -translate-y-1/2 input-placeholder-color" />
                            <ChevronDownIcon className="h-5 w-5 absolute top-1/2 right-4 transform -translate-y-1/2 input-placeholder-color" onClick={toggleJobDropdown} />
                            {showJobDropdown && (
                                <div className="absolute bg-white border border-gray-300 mt-1 w-50">
                                    {/* Dropdown content for job titles */}
                                    {/* Replace this with your dropdown options */}
                                    <div className="option-items" onClick={handleJobChange}>Country 1</div>
                                    <div className="option-items" onClick={handleJobChange}>Country 2</div>
                                    <div className="option-items" onClick={handleJobChange}>Country 3</div>
                                    {/* Add more dropdown options here */}
                                </div>
                            )}
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Country"
                                className="focus:outline-none pl-12 input-tags"
                                value={selectedCountry}
                                readOnly
                            />
                            <IoLocationOutline className="h-6 w-6 absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer input-placeholder-color" />
                            <ChevronDownIcon className="h-5 w-5 absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer input-placeholder-color" onClick={toggleCountryDropdown} />
                            {showCountryDropdown && (
                                <div className="absolute bg-white border border-gray-300 mt-1 w-45">
                                    {/* Dropdown content for countries */}
                                    {/* Replace this with your dropdown options */}
                                    <div className="option-items" onClick={handleCountryChange}>Country 1</div>
                                    <div className="option-items" onClick={handleCountryChange}>Country 2</div>
                                    <div className="option-items" onClick={handleCountryChange}>Country 3</div>
                                    {/* Add more dropdown options here */}
                                </div>
                            )}
                        </div>
                        <Link href='/joblistings'> {/* Use Next.js's Link component */}
                            <button className=" text-white focus:outline-none input-tags" id='btn-heroPage' >
                                Search
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="md:w-1/2 hero-image-container flex justify-center">
                    <Image src={heroImg} alt="Hero Image" width={500} height={600} id='hero-image' />
                </div>
            </div>
        </section>
    );
};

export default HeroPage;
