import React from 'react';
import Slider from 'react-slick';
import '../../styles/components/landing_page/image_carrousel.css'; // O arquivo CSS para estilizar o carrossel


/* Imagens */
import p1 from '../../assets/partners/p1.png'; 
import p2 from '../../assets/partners/p2.png'; 
import p3 from '../../assets/partners/p3.png'; 
import p4 from '../../assets/partners/p4.png'; 
import p5 from '../../assets/partners/p5.png'; 
import p6 from '../../assets/partners/p6.png'; 

const SupplierCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0.1,
    arrows: false, 
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  };

  return (
    <div className='supplier-container'>
    <div className="supplier-carousel">
      <h2 className='title' >Parceiros & Clientes</h2>
      <h3>Porque trabalhamos com os melhores</h3>
      <Slider {...settings}>
        <div>
          <img src={p1} alt="Supplier 1" />
        </div>
        <div>
          <img src={p2} alt="Supplier 2" />
        </div>
        <div>
          <img src={p3} alt="Supplier 3" />
        </div>
        <div>
          <img src={p4} alt="Supplier 4" />
        </div>
        <div>
          <img src={p5} alt="Supplier 5" />
        </div>
        <div>
          <img src={p6} alt="Supplier 6" />
        </div>
      </Slider>
    </div>
    </div>
  );
};

export default SupplierCarousel;
