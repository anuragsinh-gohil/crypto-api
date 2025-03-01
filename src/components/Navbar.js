import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // Function to handle smooth scroll to the section
  const smoothScrollTo = (target) => {
    const element = document.querySelector(target);
    if (element) {
      const startPosition = window.scrollY;
      const targetPosition = element.offsetTop;
      const distance = targetPosition - startPosition;
      const duration = 1000; // Duration in ms (1 second)
      let startTime = null;

      // Easing function for smooth scroll
      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      // Animation frame function for smooth scroll
      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <div className='header'>
      <div className='container'>
        <h1>XF<span className='primary'>iT</span></h1>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <a
              href='#hero'
              onClick={(e) => { e.preventDefault(); smoothScrollTo('#hero'); }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='#featured'
              onClick={(e) => { e.preventDefault(); smoothScrollTo('#featured'); }}
            >
              Featured
            </a>
          </li>
          <li>
            <a
              href='#signup'
              onClick={(e) => { e.preventDefault(); smoothScrollTo('#signup'); }}
            >
              Signup
            </a>
          </li>
          <li>
            <a
              href='#footer'
              onClick={(e) => { e.preventDefault(); smoothScrollTo('#footer'); }}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className='btn-group'>
          <button href='#featured'
              onClick={(e) => { e.preventDefault(); smoothScrollTo('#featured'); }} className='btn'>Connect Wallet</button>
        </div>
        <div className='hamburger' onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: '#333' }} />
          ) : (
            <FaBars size={20} style={{ color: '#333' }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
