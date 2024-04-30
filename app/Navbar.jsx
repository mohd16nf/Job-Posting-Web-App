'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Use window.scrollY instead of window.pageYOffset
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={` ${isScrolled ? 'scrolled' : ''}`} id='navbar'>
      <div className="mx-auto flex md:flex-row flex-col  justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h2 className=" text-xl md:text-xl" id='logo'>
            OneJob
          </h2>
        </div>
        {/* Hamburger Menu */}
        <div className="flex md:hidden">
          <button onClick={toggleMenu} className=" focus:outline-none focus:bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {/* Navigation Links */}
        <div className={`md:flex flex-col md:flex-row items-center ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <Link href="/" className=" my-2 md:my-0 nav-items">
            Home
          </Link>
          <Link href='/joblistings' className=" my-2 md:my-0 nav-items">
            Job Listings
          </Link>
          <Link href="/about-us" className=" my-2 md:my-0 nav-items">
            About Japan
          </Link>
          <Link href="/signin-page" className=" my-2 md:my-0 nav-items">
            Sign In
          </Link>
          <Link href="/signup-page" className=" my-2 md:my-0 nav-items" id='active-item'>
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;