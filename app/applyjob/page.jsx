'use client'
import React, { useState } from 'react';
import Navbar from '../pages/Navbar';

const JobDetails = () => {
  const job = {
    company: "Gubagoo",
    company_logo_url: "company_logo_url_placeholder",
    salary: "80-90K PLN",
    job_type: "Full-Time",
    location: "777 Brockton Avenue, Abington MA 2351",
    description: "Gubagoo is a fast growing provider of messaging and commerce solutions for automotive dealers changing the future of how people find, buy and service their vehicles.",
    responsibilities: "We’re looking for a passionate individual to design beautiful and functional products for our customers at Gubagoo. We move very fast and you will be expected to contribute to a cross-functional product development squad, that includes product managers and developers, to deliver the UX and UI for the team to bring to life.",
    qualifications: "Bachelor's degree in Computer Science or equivalent practical experience. Experience with user interface design patterns and standard UCD methodologies. Strong problem-solving skills and familiarity with technical constraints and limitations as they apply to designing for platforms such as desktop and mobile web. Excellent leadership, communication and teamwork skills.",
    skills: ["UI/UX Design", "Problem Solving", "Communication", "Teamwork"],
    apply_link: "https://example.com/apply",
  };

  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = () => {
    // Simulate form submission
    // Here you can implement your form submission logic
    // After submission, set showThankYou to true
    setShowThankYou(true);

    // Redirect the user to job listings page after 3 seconds
    setTimeout(() => {
      window.location.href = '/joblistings';
    }, 3000);
  };

  if (!job) {
    return null; // If job data is not available, don't render anything
  }

  const {
    company,
    company_logo_url,
    salary,
    job_type,
    location,
    description,
    responsibilities,
    qualifications,
    skills,
    apply_link,
  } = job;

  return (
    <main className="w-full h-full bg-gray-50">
      <Navbar />
      <div className="container mx-auto mt-8">
        <div className="flex items-center">
          <img src={company_logo_url} alt="Company Logo" className="w-16 h-16 mr-4" />
          <h1 className="text-2xl font-bold">{company}</h1>
        </div>
        {/* Job Details */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="col-span-2 lg:col-span-1">
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-xl font-semibold text-gray-800">Salary</h2>
              <p className="text-gray-600">{salary}</p>
              <h2 className="text-xl font-semibold mt-4 text-gray-800">Job Type</h2>
              <p className="text-gray-600">{job_type}</p>
              <h2 className="text-xl font-semibold mt-4 text-gray-800">Location</h2>
              <p className="text-gray-600">{location}</p>
            </div>
          </div>
        </div>
        {/* Job Description */}
        <div className="mt-8 bg-white p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Job Description</h2>
          <p className="text-gray-600">{description}</p>
          <h3 className="text-lg font-semibold mt-4 text-gray-800">Your Role:</h3>
          <p className="text-gray-600">{responsibilities}</p>
          <h3 className="text-lg font-semibold mt-4 text-gray-800">Qualifications:</h3>
          <p className="text-gray-600">{qualifications}</p>
          <h3 className="text-lg font-semibold mt-4 text-gray-800">Skills:</h3>
          <div className="flex flex-wrap">
            {skills.map((skill, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm mr-2 mb-2">{skill}</span>
            ))}
          </div>
        </div>
        {/* Apply Button at Bottom */}
        <div className="mt-8 flex justify-center">
          <button onClick={handleSubmit} className="apply-now-btn bg-blue-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-blue-600">
            Apply to this job
          </button>
        </div>
        {/* Thank You Message */}
        {showThankYou && (
          <div className="mt-8 text-center text-gray-800">
            <p>Thank you for applying! Redirecting you to job listings...</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default JobDetails;
