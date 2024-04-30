'use client'
import React, { useState, useEffect } from 'react';
import Data from '../Json file/data.json';
import Link from 'next/link';
import Navbar from '../Navbar';
import { IoSearchOutline, IoLocationOutline } from 'react-icons/io5';
import { ChevronDownIcon } from '@heroicons/react/outline';
import './joblisting.css';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [showJobDropdown, setShowJobDropdown] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setJobs(Data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const handleJobChange = (event) => {
    setSelectedJob(event.target.textContent);
    setShowJobDropdown(false); // Close dropdown after selection
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.textContent);
    setShowCountryDropdown(false); // Close dropdown after selection
  };

  const toggleJobDropdown = () => {
    setShowJobDropdown(!showJobDropdown);
  };

  const toggleCountryDropdown = () => {
    setShowCountryDropdown(!showCountryDropdown);
  };

  // Filter jobs based on selected job and country
  const filteredJobs = jobs.filter((job) => {
    if (!selectedJob && !selectedCountry) {
      return true; // If no filters selected, show all jobs
    }
    if (selectedJob && selectedCountry) {
      return job.job_profile === selectedJob && job.location === selectedCountry;
    }
    if (selectedJob) {
      return job.job_profile === selectedJob;
    }
    if (selectedCountry) {
      return job.location === selectedCountry;
    }
  });

  return (
    <main>
      <Navbar />
      <div className="container mx-auto my-10 p-4">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col justify-center items-center pr-5 mb-10">
            <h1 className="text-3xl font-bold text-start mb-5">
              Pick the best for you
            </h1>
            <div className="flex justify-center items-center mt-5" id='input-tags-container'>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Job title"
                  className="focus:outline-none pl-12 input-tags1"
                  value={selectedJob}
                  readOnly
                />
                <IoSearchOutline className="h-6 w-6 absolute top-1/2 left-4 transform -translate-y-1/2 input-placeholder-color" />
                <ChevronDownIcon
                  className="h-5 w-5 absolute top-1/2 right-4 transform -translate-y-1/2 input-placeholder-color"
                  onClick={toggleJobDropdown}
                />
                {showJobDropdown && (
                  <div className="absolute bg-white border border-gray-300 mt-1 w-50 max-h-48 overflow-y-auto">
                    {/* Dropdown content for job titles */}
                    {Data.map((job) => (
                      <div
                        key={job.id}
                        className="option-items"
                        onClick={handleJobChange}
                      >
                        {job.job_profile}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Country"
                  className="focus:outline-none pl-12 input-tags1"
                  value={selectedCountry}
                  readOnly
                />
                <IoLocationOutline className="h-6 w-6 absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer input-placeholder-color" />
                <ChevronDownIcon
                  className="h-5 w-5 absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer input-placeholder-color"
                  onClick={toggleCountryDropdown}
                />
                {showCountryDropdown && (
                  <div className="absolute bg-white border border-gray-300 mt-1 w-45 max-h-48 overflow-y-auto">
                    {/* Dropdown content for countries */}
                    {Data.map((job) => (
                      <div
                        key={job.id}
                        className="option-items"
                        onClick={handleCountryChange}
                      >
                        {job.location}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/joblistings"> {/* Use Next.js's Link component */}
                <button className=" text-white focus:outline-none input-tags1 btn-tags1">
                  Search
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 w-full md:w-1/2">
            {filteredJobs.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

const JobCard = ({ job }) => {
  const {
    job_profile,
    company,
    location,
    salary,
    language,
    requirements,
    min_experience,
    skills,
    company_website,
    logo_placeholder,
    job_type,
  } = job;

  return (
    <div className="job-card p-4">
      <div className="bg-gray-100 rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4">{job_profile}</h3>
        <div className="flex justify-between mb-4">
          <div className="text-gray-700">
            <p>{company}</p>
            <p>{location}</p>
          </div>
          <div className="text-right text-gray-700">
            <p>{salary}</p>
            <p>{language}</p>
            <p>{requirements}</p>
            <p>{min_experience}</p>
          </div>
        </div>
        <div className="mb-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs mr-1 mb-1"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <a href={company_website} target="_blank" rel="noopener noreferrer">
            <img
              src={logo_placeholder}
              alt="Company Logo"
              className="h-6"
            />
          </a>
          <span className="text-sm text-gray-700">{job_type}</span>
        </div>
        <Link
          href={{
            pathname: '/applyjob',
            query: { jobId: job.id },
          }}
        >
          <button className="apply-btn text-white font-bold py-2 px-4 rounded transition duration-300">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobListings;
