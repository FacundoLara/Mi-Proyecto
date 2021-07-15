import React, { useState, useEffect } from 'react';

import Row from 'react-bootstrap/Row';

import CabañaCard from './CabañaCard';

export default function CabañasList() {
  const [cabañas, setCabañas] = useState([]);

  useEffect(() => {
    getCabañas();
  }, []);

  async function getCabañas() {
    const url = 'http://localhost:8000/cabañas';

    const response = await fetch(url);      //error
    const data = await response.json();

    setCabañas(data.data);
  }

  const handleReservaConfirmada = () => {
    getCabañas();
  };

  function renderCabañasCards() {
    const URL_IMAGES = 'http://localhost:8000/images';

    return cabañas.map((cabaña) => (
      <CabañaCard
        cabaña={cabaña}
        onReservaConfirmada={handleReservaConfirmada}
      />
    ));
  }

  return (
    <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 row-cols-xl-6">
      {renderCabañasCards()}
    </Row>
  );
}