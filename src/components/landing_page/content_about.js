import React from 'react';
import { Link } from 'react-router-dom'; // Certifique-se de que você está usando o react-router-dom para navegação

import '../../styles/components/landing_page/content_about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faFish, faLeaf, faBurn } from '@fortawesome/free-solid-svg-icons';


import veg from '../../assets/gallerySection/about_veg.png';
import testImage from '../../assets/gallerySection/contentSection1.png';
import img1 from '../../assets/gallerySection/food4.jpg'
import img2 from '../../assets/gallerySection/food5.jpg'



const AboutSection = () => {
    return (
       <div className='about-container'>
       <div className="about-section">
          <div className="about-left-column">
            <img src={testImage} alt="Food 1" className="food-image top-image" />
            <img src={img2} alt="Food 2" className="food-image bottom-image" />
            <img src={veg} alt="Food 3" className="food-image veg-image" />

          </div>
          <div className="about-right-column">
            <div className="mini-ver">Experiência comprovada</div>
            <h1>Desde 2012</h1>
            <p>
            
                Localizado à beira da deslumbrante praia de Altura, é um refúgio acolhedor para os amantes da boa comida.
            Especializando-se em peixe e marisco frescos, bem como picanha e entrecote da Argentina, o Mar e Monte oferece
            uma experiência gastronômica inigualável. 
           
                 Conheça como tudo começou <Link to="/sobre_nos">aqui</Link>.
            </p>
            <div className="cards">
              <div className="card">
                <FontAwesomeIcon icon={faTruck} className="card-icon" />
                <strong>100% Picanha Argentina</strong>
              </div>
              <div className="card">
                <FontAwesomeIcon icon={faFish} className="card-icon" />
                <strong>Peixe Fresco</strong>
              </div>
              <div className="card">
                <FontAwesomeIcon icon={faLeaf} className="card-icon" />
                <strong>Produtos Locais</strong>
              </div>
              <div className="card">
            <FontAwesomeIcon icon={faBurn} className="card-icon" />
            <strong>Grelha a Carvão</strong>
          </div>
            </div>
          </div>
        </div>
        </div>
      );
    };

export default AboutSection;
