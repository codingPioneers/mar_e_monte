import React, { useEffect } from 'react';

import TwoColumnLayout from "../components/landing_page/content_two_column";
import Footer from "../components/geral/footer";


import hero from '../assets/about-header.jpg'
import logo from '../assets/heroSection/logo.png'



const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    

return (

<>

<div className="hero-container">
      <img src={hero} alt="Hero" className="hero-image" />
      <div className="hero-overlay">
      <img src={logo} alt="Hero" className="hero-image" />

      </div>
    </div>
<div className="container-wrapper">

<TwoColumnLayout/>
</div>
<Footer/>

</>
);


}

export default AboutPage;
