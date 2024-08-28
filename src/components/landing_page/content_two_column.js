import React from 'react';
import '../../styles/components/landing_page/content_two_column.css'; // Ensure this CSS file has the correct styles

import ColumnGallery from './column_gallery';

const TwoColumnLayout = () => {
  return (
    <div className="two-column-container">
      <div className="two-column-left-column">
        <ColumnGallery />
      </div>
      <div className="two-column-right-column">
        <div className="right-content">
          <p className="mini-ver">Um pouco sobre nós</p>
          <h1>A nossa história</h1>
          <p>
            Localizado à beira da deslumbrante praia de Altura, é um refúgio acolhedor para os amantes da boa comida.
            Especializando-se em peixe e marisco frescos, bem como picanha e entrecote da Argentina, o Mar e Monte oferece
            uma experiência gastronômica inigualável. 
            Com um ambiente simpático e acolhedor, pode desfrutar dos melhores
            produtos da região apenas a um passo da praia. Seja para um almoço relaxante ou um jantar memorável, o Mar e
            Monte é o destino perfeito para quem busca qualidade e sabor.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TwoColumnLayout;
