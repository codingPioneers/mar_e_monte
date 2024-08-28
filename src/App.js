import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/geral/navbar';
import LandingPage from './pages/landing_page';
import MenuPage from './pages/menu_page'; 
import ContactPage from './pages/contacts';
import AboutPage from './pages/about_us';
import './styles/styles.css';

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Vast+Shadow&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

function App() {
  return (
    <Router>
      <div className="App">


      <div className="">
      <Navbar />
      </div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contactos" element={<ContactPage />} />
          <Route path='/sobre_nos' element={<AboutPage />} />

        </Routes>
      </div>

    </Router>
  );
}

export default App;
