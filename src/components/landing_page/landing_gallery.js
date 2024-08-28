

import React from 'react';
import '../../styles/components/landing_page/landing_gallery.css'; // Importe o arquivo CSS de estilos

import foto1 from '../../assets/gallerySection/food1.jpg';
import foto2 from '../../assets/gallerySection/food2.jpg';
import foto3 from '../../assets/gallerySection/food3.jpg';
import foto4 from '../../assets/gallerySection/food4.jpg';
import foto5 from '../../assets/gallerySection/food5.jpg';
import foto6 from '../../assets/gallerySection/food6.jpg';
import foto7 from '../../assets/gallerySection/food7.jpg';
import foto8 from '../../assets/gallerySection/food8.jpg';
import foto9 from '../../assets/gallerySection/food9.jpg';
import foto10 from '../../assets/gallerySection/food10.jpg';
import foto11 from '../../assets/gallerySection/food11.jpg';





const images = [
  foto1,  foto4,
  foto9,
  
  foto6,
  foto8,
  foto11,
  foto10,
  foto3,


];



const LandingGallery = () => {
  const columns = 4;
  const imagesPerColumn = Math.ceil(images.length / columns);

  const groupedImages = [];
  for (let i = 0; i < columns; i++) {
    groupedImages.push(images.slice(i * imagesPerColumn, (i + 1) * imagesPerColumn));
  }

  return (
    <div className="gallery-container" data-aos="fade-up">
      <div className="gallery-grid">
        {groupedImages.map((column, index) => (
          <div className="gallery-column" key={index}>
            {column.map((image, imgIndex) => (
              <div key={imgIndex} data-aos="zoom-in" data-aos-delay={`${imgIndex * 100}`}>
                <img className="gallery-image" src={image} alt={`Gallery Image ${imgIndex + 1}`} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};


export default LandingGallery;
