import React, { useState, useEffect } from 'react';
import '../../styles/components/geral/shrinking_header.css';

const ShrinkingHeader = () => {
  const [shrink, setShrink] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={shrink ? 'shrink' : ''}>
      <h1>Menu</h1>
    </header>
  );
};

export default ShrinkingHeader;
