import React from 'react';
import CardInfo from './CardInfo';

import { Link } from 'react-router-dom';

export default function CardsSecciones() {
  return (
    <div className="row justify-content-between">
      <Link to="/cabañas" className="text-decoration-none">
        <CardInfo nombre="Cabañas" className="col-3" />
      </Link>

      <a className="text-decoration-none" href="#promociones">
        <CardInfo nombre="Promociones" className="col-3" />
      </a>
      <a className="text-decoration-none" href="#servicios">
        <CardInfo nombre="Servicios" className="col-3" />
      </a>
      <a className="text-decoration-none" href="#ubicacion">
        <CardInfo nombre="Ubicación" className="col-3" />
      </a>
    </div>
  );
}
