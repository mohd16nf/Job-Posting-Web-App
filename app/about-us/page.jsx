'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import IMG1 from '../../public/jimage2.jpg';
import IMG2 from '../../public/jimage3.jpg';
import IMG3 from '../../public/jimage5.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
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
    <div className="about-container">
      <nav className={`bg-white shadow-md ${isScrolled ? 'scrolled' : ''}`} id='navbar'>
        <div className="container mx-auto px-4 md:px-0 flex md:flex-row flex-col justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <h2 className="text-xl font-bold" id='logo'>
              Coo!Cod3
            </h2>
          </div>
          {/* Hamburger Menu */}
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none focus:bg-gray-700">
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
        </div>
      </nav>
      <div className="body-container flex flex-col md:flex-row p-20">
        {/* Japanese Aesthetics */}
        <div className="text-container w-full md:w-1/2 p-5">
          <p>
            Japan is known for its rich cultural heritage and unique aesthetics. The country's traditional arts and crafts,
            such as pottery, calligraphy, and tea ceremonies, reflect its deep connection to nature and spirituality.
            Japanese aesthetics emphasize simplicity, harmony, and attention to detail, which are evident in various aspects
            of daily life, architecture, and art. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut sollicitudin 
            tortor. Proin iaculis tempus risus, eget malesuada purus varius a. Vivamus sit amet volutpat tortor, nec tempor
            turpis. Integer nec justo vel urna tincidunt tristique. 
          </p>
        </div>
        <div className="img-container w-full md:w-1/2 p-5">
          <Image src={IMG3} alt="Japanese Aesthetics" width={550} height={450} />
        </div>
      </div>
      {/* Cherry Blossom */}
      <div className="body-container flex flex-col md:flex-row p-20">
        <div className="img-container w-full md:w-1/2 p-5">
          <Image src={IMG1} alt="Cherry Blossom" width={550} height={450} />
        </div>
        <div className="text-container w-full md:w-1/2 p-5">
          <p>
            Cherry blossom, or "sakura," holds a special significance in Japanese culture. These delicate pink flowers bloom
            in spring, marking the beginning of a new season and symbolizing renewal and the fleeting nature of life.
            People gather under cherry blossom trees for "hanami" (flower viewing) picnics, celebrating the beauty of nature
            and the ephemeral beauty of the blossoms. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut 
            sollicitudin tortor. Proin iaculis tempus risus, eget malesuada purus varius a. Vivamus sit amet volutpat tortor,
            nec tempor turpis. Integer nec justo vel urna tincidunt tristique. 
          </p>
        </div>
      </div>
      {/* Fire Festival */}
      <div className="body-container flex flex-col md:flex-row p-20">
        <div className="text-container w-full md:w-1/2 p-5">
          <p>
            The Fire Festival, known as "Hi Matsuri," is a traditional event held in various regions of Japan.
            Participants carry large torches and parade through the streets, accompanied by drumming and chanting,
            to purify the area and drive away evil spirits. The festival is often associated with the worship of
            fire deities and the celebration of the changing seasons, bringing communities together in a spirit of
            camaraderie and celebration. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut sollicitudin 
            tortor. Proin iaculis tempus risus, eget malesuada purus varius a. Vivamus sit amet volutpat tortor, nec 
            tempor turpis. Integer nec justo vel urna tincidunt tristique.
          </p>
        </div>
        <div className="img-container w-full md:w-1/2 p-5">
          <Image src={IMG2} alt="Fire Festival" width={550} height={450} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
