import React from 'react';
import './image_backgorund2.css'

import hero from '../../../assets/meny-header.jpg'
import logo from '../../../assets/heroSection/newHero.jpg'

const ImageBackground2 = () => {
    return (
        <>
          {/* Parallax Container */}
          <div className="parallax">
            {/* Overlay content */}
            <div className="parallax-overlay">
              <img src={logo} alt="Logo" className="parallax-logo" />
            </div>
            
            {/* Sections that scroll over the parallax background 
            
              <div className="parallax-section">Section 1</div>
            <div className="parallax-section">Section 2</div>
            <div className="parallax-section">Section 3</div>
            */}
          
          </div>
        </>
      );
    
};

export default ImageBackground2;
