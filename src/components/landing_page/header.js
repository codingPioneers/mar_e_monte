import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import '../../styles/components/landing_page/header.css'; // Import the CSS file for styling

import hero from '../../assets/heroSection/newHero.jpg'
import logo from '../../assets/heroSection/logo.png'


const Header = () => {


  return (
    <>

      <div className="hero-container">
      <img src={hero} alt="Hero" className="hero-image" />
      <div className="hero-overlay">
      <img src={logo} alt="Hero" className="hero-image" />

      </div>
    </div>
    </>
  );
};

export default Header;
