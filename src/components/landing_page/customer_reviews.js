import React, { useState, useEffect } from 'react';
import '../../styles/components/landing_page/customer_review.css'; // O arquivo CSS para estilizar o componente
import dishImage from '../../assets/gallerySection/contentSection1.png'; // Substitua pelo caminho correto para a imagem do prato

const commentsData = [
  {
    author: "Lina Gallardo",
    profession: "Customer",
    comment: "We stopped expressly to try the sardines and they did not disappoint us, it ...",
    photo: "path/to/photo1.jpg"
  },
  {
    author: "Canal Jota",
    profession: "Blogger",
    comment: "Well prepared food, fresh fish 👌 and generous portions I recommend visiting …",
    photo: "path/to/photo2.jpg"
  },
  {
    author: "Erica Topova",
    profession: "Market Analist",
    comment: "The quality of the entrecote served at the restaurant is impeccable, without a ...",
    photo: "path/to/photo2.jpg"
  }
];

const Testimonials = () => {
  const [currentComment, setCurrentComment] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentComment((prev) => (prev + 1) % commentsData.length);
    }, 5000); // Mudar de comentário a cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='testimonial-container'>

    <div className="testimonials-section">
      <div className="testimonials-left">
        <h2 className='mini-ver'>Testemunhos</h2>
        <h1>Avaliações dos nossos clientes</h1>
        <div className="quote-icon">“</div>
        <p>{commentsData[currentComment].comment}</p>
        <div className="author-info">
          <div>
            <h3>{commentsData[currentComment].author}</h3>
            <p>{commentsData[currentComment].profession}</p>
          </div>
        </div>
        <div className="arrows">
          <span onClick={() => setCurrentComment((currentComment - 1 + commentsData.length) % commentsData.length)}>&larr;</span>
          <span onClick={() => setCurrentComment((currentComment + 1) % commentsData.length)}>&rarr;</span>
        </div>
      </div>
      <div className="testimonials-right">
  <img src={dishImage} alt="Dish" />
  <div className="dish-card">
    <div className="dish-card-header">
      <h3>Mar e Monte</h3>
      <div className="rating">
        <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
      </div>
    </div>
    <p>A nossa assinatura representa tudo aquilo
         que temos de incrível. 
        Duas tábuas com uma seleção de carnes e peixes 
        permitem-lhe saborear todas as nossas delícias com 
        apenas um prato.</p>
  </div>
</div>
</div>

    </div>
  );
};

export default Testimonials;
