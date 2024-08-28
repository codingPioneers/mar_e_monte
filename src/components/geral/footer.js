import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../../styles/components/footer.css'; // Importe o arquivo CSS para estilização

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-title">
          <h2>Mar e Monte</h2>
        </div>
        <div className="footer-section contact-info">
          <h3>Contactos</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              Altura, Faro - Portugal
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} />
              +351 - 96659986
            </li>
           
            <li>
              <FontAwesomeIcon icon={faClock} />
              Seg - Dom / 12:00 AM - 23:00 PM
            </li>
          </ul>
        </div>

        <div className="footer-section links">
          <h3>Links</h3>
          <ul>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/contactos">Contactos</a></li>
            <li><a href="/sobre_nos">Sobre Nós</a></li>
            {
              /*
                <li><a href="#">Pizzeria Passione</a></li>
            <li><a href="#">Gelataria Sim Papá</a></li>
          
              */
            }
          </ul>
        </div>

        <div className="social-icons">
          <a href="https://www.facebook.com/restaurantemaremontealtura"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="https://www.instagram.com/restaurante_mar_e_monte/"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
      <p className="footer-rights">&copy;2024 Mar e Monte. Todos os direitos reservados. Developed by Coding Pioneers Solutions</p>


    </footer>
  );
};

export default Footer;
