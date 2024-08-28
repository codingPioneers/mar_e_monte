import React, { useState, useEffect } from 'react';
import '../styles/styles.css';

/* Components */
import Header from '../components/landing_page/header.js';
import LandingGallery from '../components/landing_page/landing_gallery.js';
import AboutSection from '../components/landing_page/content_about.js';
import MenuSection from '../components/landing_page/menu_section.js';
import SupplierCarousel from '../components/landing_page/image_carrousel.js';
import Testimonials from '../components/landing_page/customer_reviews.js';
import Footer from '../components/geral/footer.js';

/* Assets */
import h1 from '../assets/heroSection/hero1.png';
import h2 from '../assets/heroSection/hero2.png';
import h3 from '../assets/heroSection/hero3.png';

const images = [h1, h2, h3];

const LandingPage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>

        <Header />
        <AboutSection />
        <MenuSection />

        <div className="container-wrapper">
          <Testimonials />
        </div>

        <LandingGallery />

      <div className="container-wrapper">
        <SupplierCarousel />
      </div>

      <Footer />
    </>
  );
};

export default LandingPage;
