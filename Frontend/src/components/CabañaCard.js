import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';



export default function CabañaCard({ cabaña, onReservaConfirmada }) {
  const imageUrl = `http://localhost:8000/images/${cabaña.imagen}`;

  const cardImageStyle = {
    height: '40vh',
    objectFit: 'contain',
  };

  const handleReservarClick = (event) => {
    event.preventDefault();

    reservarCabaña(cabaña.id);
  };

  async function reservarCabaña(idCabaña) {
    const url = 'http://localhost:8000/reservas';

    const dataReserva = {
      idCabaña,
    };

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(dataReserva),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();

    if (response.status === 200) {
      onReservaConfirmada();
    } else {
      alert(data.message);
    }

    console.log(data);
  }

  return (
    <Col className="my-4 text-center">
      <Link to={`/detail/${cabaña.id}`} className="nav-link">
        <Card className="h-100">
          <Card.Img style={cardImageStyle} variant="top" src={imageUrl} />

          <Card.Body>
            <Card.Title>{cabaña.estado}</Card.Title>
          </Card.Body>

          <Card.Footer className="text-muted">
            $ {cabaña.precio}
          </Card.Footer>

          <Row className="my-2">
            <Col>
              {cabaña.estado === 'Libre' && (
                <Button onClick={handleReservarClick}>Reservar</Button>
              )}
            </Col>
          </Row>

          {/* {props.type === 'mispublicaciones' && (
            <Row className="my-2">
              <Col>
                <Button variant="light" onClick={handleEditClick}>
                  <FontAwesomeIcon color="green" icon={faEdit} />
                </Button>

                <Button variant="light" onClick={handleDeleteClick}>
                  <FontAwesomeIcon color="red" icon={faTrash} />
                </Button>
              </Col>
            </Row>
          )} */}
        </Card>
      </Link>
    </Col>
  );
}
