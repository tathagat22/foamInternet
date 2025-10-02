import React from 'react';
import { Link } from 'react-router-dom';
import logo from './foam_word_mark_white.svg';
const Footer = () => (
  <footer className="bg-[#001f3f] text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <p>
            152 Roan Crescent<br />
            Corporate Park North<br />
            Midrand<br />
            Gauteng<br />
            South Africa
          </p>
          <p className="mt-4">
            +27 (0) 10 140 8800<br />
            info@comsol.co.za<br />
            careers@comsol.co.za<br />
            <a href="/directions" className="hover:text-[#FFC107]">Directions</a>
          </p>
        </div>
        <div>
          <ul className="space-y-2">
            <li><Link to="/news" className="hover:text-[#FFC107]">News</Link></li>
            <li><Link to="/coverage" className="hover:text-[#FFC107]">Coverage</Link></li>
            <li><Link to="/careers" className="hover:text-[#FFC107]">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-[#FFC107]">Let's connect</Link></li>
          </ul>
        </div>
        <div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img src={logo} alt="Facebook" className="h-40 w-40" />
            </a>
            
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>
          © Comsol Networks (Pty) Ltd. 2025 | <Link to="/terms" className="hover:text-[#FFC107]">Site T&Cs</Link> | <Link to="/cookie-policy" className="hover:text-[#FFC107]">Cookie Policy</Link> | <Link to="/privacy-policy" className="hover:text-[#FFC107]">Privacy Policy</Link> | <Link to="/aup" className="hover:text-[#FFC107]">AUP</Link> | <Link to="/ispa" className="hover:text-[#FFC107]">ISPA</Link>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;