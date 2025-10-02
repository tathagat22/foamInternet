import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from './foam_word_mark_white.svg';

const Navbar = () => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const solutionsTimeoutRef = useRef(null);
  const aboutTimeoutRef = useRef(null);

  // Handle dropdown open with delay for closing
  const handleSolutionsEnter = () => {
    clearTimeout(solutionsTimeoutRef.current);
    setIsSolutionsOpen(true);
  };

  const handleSolutionsLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setIsSolutionsOpen(false);
    }, 200); // 200ms delay before closing
  };

  const handleAboutEnter = () => {
    clearTimeout(aboutTimeoutRef.current);
    setIsAboutOpen(true);
  };

  const handleAboutLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setIsAboutOpen(false);
    }, 200); // 200ms delay before closing
  };

  // Cleanup timeouts on component unmount
  useEffect(() => {
    return () => {
      clearTimeout(solutionsTimeoutRef.current);
      clearTimeout(aboutTimeoutRef.current);
    };
  }, []);

  return (
    <nav className="bg-white text-[#001f3f] shadow-md sticky top-0 z-50 font-sans">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Comsol Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center font-semibold text-base uppercase">
          <li><Link to="/" className="hover:text-[#FFC107] transition-colors duration-300">Home</Link></li>
          <li className="relative">
            <button 
              onMouseEnter={handleSolutionsEnter}
              onMouseLeave={handleSolutionsLeave}
              className="hover:text-[#FFC107] flex items-center transition-colors duration-300"
            >
              Solutions
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isSolutionsOpen && (
              <div 
                className="absolute left-0 mt-4 bg-white shadow-lg rounded-md p-6 w-96 z-50 flex border-t-4 border-[#FFC107]"
                onMouseEnter={handleSolutionsEnter}
                onMouseLeave={handleSolutionsLeave}
              >
                <div className="w-1/2 pr-4">
                  <h3 className="font-bold mb-3 text-[#001f3f] uppercase">Solutions</h3>
                  <ul className="space-y-2">
                    <li><Link to="/solutions" className="block text-[#001f3f] hover:text-[#FFC107] transition-colors duration-200">View all</Link></li>
                    <li><Link to="/solutions/fixed-wireless" className="block text-[#001f3f] hover:text-[#FFC107] transition-colors duration-200">Fixed Wireless Access (FWA)</Link></li>
                    <li><Link to="/solutions/private-networks" className="block text-[#001f3f] hover:text-[#FFC107] transition-colors duration-200">Private Networks</Link></li>
                  </ul>
                </div>
                <div className="w-1/2 pl-4 border-l border-gray-200">
                  <p className="text-sm mb-3 text-[#001f3f]">Why choose to wait for lengthy fibre deployments...when you can have speedy, simple and equivalent business grade services?</p>
                  <Link to="/solutions" className="text-[#001f3f] font-semibold hover:text-[#FFC107] transition-colors duration-200">Learn more</Link>
                </div>
              </div>
            )}
          </li>
          <li><Link to="/industries" className="hover:text-[#FFC107] transition-colors duration-300">Industries</Link></li>
          <li className="relative">
            <button 
              onMouseEnter={handleAboutEnter}
              onMouseLeave={handleAboutLeave}
              className="hover:text-[#FFC107] flex items-center transition-colors duration-300"
            >
              About
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isAboutOpen && (
              <div 
                className="absolute left-0 mt-4 bg-white shadow-lg rounded-md p-6 w-96 z-50 flex border-t-4 border-[#FFC107]"
                onMouseEnter={handleAboutEnter}
                onMouseLeave={handleAboutLeave}
              >
                <div className="w-1/2 pr-4">
                  <h3 className="font-bold mb-3 text-[#001f3f] uppercase">About us</h3>
                  <ul className="space-y-2">
                    <li><Link to="/about/evolution" className="block text-[#001f3f] hover:text-[#FFC107] transition-colors duration-200">Evolution</Link></li>
                    <li><Link to="/about/bbbee" className="block text-[#001f3f] hover:text-[#FFC107] transition-colors duration-200">BBBEE</Link></li>
                    <li><Link to="/about/leadership-team" className="block text-[#001f3f] hover:text-[#FFC107] transition-colors duration-200">Leadership team</Link></li>
                  </ul>
                </div>
                <div className="w-1/2 pl-4 border-l border-gray-200">
                  <p className="text-sm mb-3 text-[#001f3f]">Available in more than 200 towns across SA, Comsol's new network combines the best of fibre and licensed wireless into one strategic solution.</p>
                  <Link to="/contact" className="text-[#001f3f] font-semibold hover:text-[#FFC107] transition-colors duration-200">Let's connect</Link>
                </div>
              </div>
            )}
          </li>
          <li><Link to="/media" className="hover:text-[#FFC107] transition-colors duration-300">Media</Link></li>
          <li><Link to="/coverage" className="hover:text-[#FFC107] transition-colors duration-300">Coverage</Link></li>
          <li><Link to="/careers" className="hover:text-[#FFC107] transition-colors duration-300">Careers</Link></li>
          <li><Link to="/contact" className="hover:text-[#FFC107] transition-colors duration-300">Let's connect</Link></li>
        </ul>

        {/* Call us */}
        <div className="hidden md:block">
          <a href="tel:+27101408800" className="bg-[#FFC107] text-[#001f3f] px-4 py-2 rounded font-semibold uppercase hover:bg-[#e0a800] transition-colors duration-300">Call us</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#001f3f] text-2xl" onClick={() => setIsMobileOpen(!isMobileOpen)}>☰</button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <ul className="md:hidden bg-white text-[#001f3f] px-4 py-4 space-y-4 font-sans">
          <li><Link to="/" className="block text-base font-semibold uppercase hover:text-[#FFC107] transition-colors duration-200">Home</Link></li>
          <li>
            <button 
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)} 
              className="flex items-center w-full text-base font-semibold uppercase hover:text-[#FFC107] transition-colors duration-200"
            >
              Solutions
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isSolutionsOpen && (
              <div className="pl-4 pt-2 space-y-2">
                <h3 className="font-bold text-[#001f3f] uppercase">Solutions</h3>
                <Link to="/solutions" className="block text-[#001f3f] hover:text-[#FFC107] transition-colors duration-200">View all</Link>
                <Link to="/solutions/fixed-wireless" className="block text-[#001f3f] hover:text-[#FFC107] transition-colors duration-200">Fixed Wireless Access (FWA)</Link>
                <Link to="/solutions/private-networks" className="block text-[#001f3f] hover:text-[#FFC107] transition-colors duration-200">Private Networks</Link>
                <p className="text-sm text-[#001f3f]">Why choose to wait for lengthy fibre deployments...when you can have speedy, simple and equivalent business grade services?</p>
                <Link to="/solutions" className="block text-[#001f3f] font-semibold hover:text-[#FFC107] transition-colors duration-200">Learn more</Link>
              </div>
            )}
          </li>
          <li><Link to="/industries" className="block text-base font-semibold uppercase hover:text-[#FFC107] transition-colors duration-200">Industries</Link></li>
          <li>
            <button 
              onClick={() => setIsAboutOpen(!isAboutOpen)} 
              className="flex items-center w-full text-base font-semibold uppercase hover:text-[#FFC107] transition-colors duration-200"
            >
              About
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isAboutOpen && (
              <div className="pl-4 pt-2 space-y-2">
                <h3 className="font-bold text-[#001f3f] uppercase">About us</h3>
                <Link to="/about/evolution" className="block text-[#001f3f] hover:text-[#FFC107] transition-colors duration-200">Evolution</Link>
                <Link to="/about/bbbee" className="block text-[#001f3f] hover:text-[#FFC107] transition-colors duration-200">BBBEE</Link>
                <Link to="/about/leadership-team" className="block text-[#001f3f] hover:text-[#FFC107] transition-colors duration-200">Leadership team</Link>
                <p className="text-sm text-[#001f3f]">Available in more than 200 towns across SA, Comsol's new network combines the best of fibre and licensed wireless into one strategic solution.</p>
                <Link to="/contact" className="block text-[#001f3f] font-semibold hover:text-[#FFC107] transition-colors duration-200">Let's connect</Link>
              </div>
            )}
          </li>
          <li><Link to="/media" className="block text-base font-semibold uppercase hover:text-[#FFC107] transition-colors duration-200">Media</Link></li>
          <li><Link to="/coverage" className="block text-base font-semibold uppercase hover:text-[#FFC107] transition-colors duration-200">Coverage</Link></li>
          <li><Link to="/careers" className="block text-base font-semibold uppercase hover:text-[#FFC107] transition-colors duration-200">Careers</Link></li>
          <li><Link to="/contact" className="block text-base font-semibold uppercase hover:text-[#FFC107] transition-colors duration-200">Let's connect</Link></li>
          <li><a href="tel:+27101408800" className="block text-base font-semibold uppercase hover:text-[#FFC107] transition-colors duration-200">Call us</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;