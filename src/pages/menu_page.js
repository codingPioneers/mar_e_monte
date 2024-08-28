import React, { useEffect, useState, useRef } from 'react';

import ShrinkingHeader from '../components/geral/shrinking_header';

import menuData from '../assets/food_menu.json';
import drinksData from '../assets/drinks_menu.json';

import Footer from '../components/geral/footer';

import menuHeader from '../assets/meny-header.jpg';

// Dummy images for each food section
import appetizersImage from '../assets/meny-header.jpg';
import mainCourseImage from '../assets/meny-header.jpg';
import dessertsImage from '../assets/meny-header.jpg';
import saladsImage from '../assets/meny-header.jpg';
import pastasImage from '../assets/meny-header.jpg';
import pizzasImage from '../assets/meny-header.jpg';

import '../styles/components/menu_page/menu.css';

const MenuPage = () => {
  const [foodMenu, setFoodMenu] = useState({});
  const [drinksMenu, setDrinksMenu] = useState({});
  const [mainTab, setMainTab] = useState('comida'); // 'comida' or 'bebida'
  const [activeTab, setActiveTab] = useState('');

  const mainTabsRef = useRef(null);
  const secondaryTabsRef = useRef(null);

  useEffect(() => {
    setFoodMenu(menuData);
    setDrinksMenu(drinksData);
    setActiveTab(Object.keys(menuData)[0]); // Set the first section of 'comida' as the active tab initially
  }, []);

  const scrollToSection = (sectionName) => {
    const section = document.getElementById(sectionName);
    if (section) {
      const mainTabsHeight = mainTabsRef.current ? mainTabsRef.current.clientHeight : 0;
      const secondaryTabsHeight = secondaryTabsRef.current ? secondaryTabsRef.current.clientHeight : 0;
      const offset = mainTabsHeight + secondaryTabsHeight + 20; // Adjust this value as needed

      window.scrollTo({
        top: section.offsetTop - offset,
        behavior: 'smooth',
      });
      setActiveTab(sectionName); // Set the clicked tab as active
    }
  };

  const handleTabClick = (tab) => {
    setMainTab(tab);
    const firstCategory = tab === 'comida' ? Object.keys(foodMenu)[0] : drinksMenu.categories[0].name;
    scrollToSection(firstCategory);
  };

  const renderSection = (sectionName, items, image) => (
    <div id={sectionName} className={sectionName === 'pastas' ? 'blueSection' : 'section'} key={sectionName}>
      <h2 className="tabs-section-title">{sectionName.toUpperCase()}</h2>
      {mainTab === 'comida' && image && (
        <img src={image} alt={`${sectionName} image`} className="section-image" />
      )}
      <div className="list">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <div className="item">
              <div className="itemName">{item.nome}</div>
              <div className="itemIngredients">{item.ingredientes ? item.ingredientes.join(', ') : item.tipo || ''}</div>
              <div className="itemPrice">€{item.preco.toFixed(2)}</div>
            </div>
            {index < items.length - 1 && <hr className="dashed-line" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
  
  const renderTabs = () => {
    const menu = mainTab === 'comida' ? foodMenu : drinksMenu;
    const categories = mainTab === 'comida' ? Object.keys(menu) : menu.categories.map(category => category.name);

    // Images for food categories (dummy images, replace with actual ones)
    const sectionImages = {
      appetizers: appetizersImage,
      main_course: mainCourseImage,
      desserts: dessertsImage,
      salads: saladsImage,
      pastas: pastasImage,
      pizzas: pizzasImage
    };

    return (
      <>
        <div className="secondary-tabs-container" ref={secondaryTabsRef}>
          {categories.map((section) => (
            <div
              key={section}
              className={`secondary-tab ${activeTab === section ? 'active' : ''}`}
              onClick={() => scrollToSection(section)}
            >
              <p className="tab-title">{section.toUpperCase()}</p>
            </div>
          ))}
        </div>

        {mainTab === 'comida' ? categories.map((section) => (
          <React.Fragment key={section}>
            {renderSection(section, menu[section], sectionImages[section])}
            <hr className="separator" />
          </React.Fragment>
        )) : menu.categories.map((category) => (
          <React.Fragment key={category.name}>
            {renderSection(category.name, category.items, null)}
            <hr className="separator" />
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <>
      <div className="menu-header">
        <img src={menuHeader} alt="Menu Header" className="header-image" />
        <div className="header-overlay">
          <div className="header-text">Menu</div>
        </div>
      </div>

      <div className='menu-container-wrapper'>
        <div className="menu-container">
          <div className="main-tabs-container" ref={mainTabsRef}>
            <div
              className={`main-tab ${mainTab === 'comida' ? 'active' : ''}`}
              onClick={() => handleTabClick('comida')}
            >
              <p className="tab-title">COMIDA</p>
            </div>
            <div
              className={`main-tab ${mainTab === 'bebida' ? 'active' : ''}`}
              onClick={() => handleTabClick('bebida')}
            >
              <p className="tab-title">BEBIDA</p>
            </div>
          </div>

          {renderTabs()}
        </div> 
      </div>

      <Footer />
    </>
  );
};

export default MenuPage;
