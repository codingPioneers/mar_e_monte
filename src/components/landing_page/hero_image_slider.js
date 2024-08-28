import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { createGlobalStyle } from 'styled-components';
import h1 from '../../assets/header/header1.png';
import h2 from '../../assets/header/header2.png';
import h3 from '../../assets/header/header3.png';

const images = [h1, h2, h3];

const GlobalStyle = createGlobalStyle`
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 1s ease-in-out;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }
`;

const HeroImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 1s ease-in-out;
`;

const HeroImageSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <GlobalStyle />
      <HeroImageContainer>
        <TransitionGroup>
          <CSSTransition key={index} timeout={1000} classNames="fade">
            <HeroImage src={images[index]} alt="Hero" />
          </CSSTransition>
        </TransitionGroup>
      </HeroImageContainer>
    </>
  );
};

export default HeroImageSlider;
