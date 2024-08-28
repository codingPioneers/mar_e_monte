import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../../styles/components/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > scrollY) {
      setScrollDirection('down');
    } else if (currentScrollY < scrollY) {
      setScrollDirection('up');
    }

    setScrollY(currentScrollY);
    setIsScrolled(currentScrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  useEffect(() => {
    if (scrollY === 0) {
      setIsVisible(true); // Sempre visível quando no topo
    } else if (scrollDirection === 'down') {
      setIsVisible(false); // Esconder ao rolar para baixo
    } else if (scrollDirection === 'up') {
      setIsVisible(true); // Mostrar ao rolar para cima
    }
  }, [scrollDirection, scrollY]);

  return (
    <>
      <nav className={`navbar ${isVisible ? 'visible' : 'hidden'} ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">Mar e Monte</Link>
          <ul className="navbar-nav">
            <li className="nav-item"><a href="/" className="nav-link">Início</a></li>
            <li className="nav-item"><a href="/menu" className="nav-link">Menu</a></li>
            <li className="nav-item"><a href="/contactos" className="nav-link">Contactos</a></li>
            <li className="nav-item"><a href="/sobre_nos" className="nav-link">Sobre Nós</a></li>
          </ul>
          <div className="menu-toggle" onClick={toggleMenu}>
            <MenuIcon className="menu-icon" />
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-navbar-brand">Mar e Monte</Link>
          <CloseIcon className="close-btn" onClick={toggleMenu} />
          <ul className="mobile-nav">
            <li className="nav-item"><a href="/" className="nav-link" onClick={toggleMenu}>Início</a></li>
            <li className="nav-item"><a href="/menu" className="nav-link" onClick={toggleMenu}>Menu</a></li>
            <li className="nav-item"><a href="/contactos" className="nav-link" onClick={toggleMenu}>Contactos</a></li>
            <li className="nav-item"><a href="/sobre_nos" className="nav-link" onClick={toggleMenu}>Sobre Nós</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
