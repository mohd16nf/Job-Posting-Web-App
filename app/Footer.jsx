'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Footer = () => {
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
    <footer
      className={` ${isScrolled ? 'scrolled' : ''}`}
      id='navbar'
      style={{ backgroundColor: '#2b3940', minHeight: '300px' }}
    >
      <div className="mx-auto flex flex-col md:flex-row md:justify-between items-center py-8 md:py-0 text-white">
        {/* Logo */}
        <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
          <h2 className="text-xl md:text-xl" id='logo'>
          OneJob
          </h2>
        </div>
        {/* Navigation Links */}
        <div className={`md:flex flex-col md:flex-row items-center ${isMenuOpen ? 'flex' : 'hidden'} mb-4 md:mb-0`}>
          <Link href="/" className="my-2 md:my-0 nav-items">
            Home
          </Link>
          <Link href='/joblistings' className="my-2 md:my-0 nav-items">
            Job Listings
          </Link>
          <Link href="/about-us" className="my-2 md:my-0 nav-items">
            About Japan
          </Link>
          <Link href="/" className="my-2 md:my-0 nav-items">
            Sign In
          </Link>
          <Link href="/" className="my-2 md:my-0 nav-items" id='active-item'>
            Sign up
          </Link>
        </div>
        {/* Contact Us */}
        <div className="flex flex-col md:ml-8 mb-4 md:mb-0">
          <h3 className="mb-2">Contact Us</h3>
          <p className="mb-1">Email: example@example.com</p>
          <p>Phone: +123456789</p>
        </div>
        {/* Follow Us */}
        <div className="flex flex-col md:ml-8">
          <h3 className="mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

