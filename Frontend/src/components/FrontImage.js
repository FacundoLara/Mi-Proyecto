import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import React from 'react';
import Card from 'react-bootstrap/Card';


import primeraimagen from '../assets/images/Complejo1.jpg';

export default function FrontImage() {
    return (
        <>
            <div>
                <img style={{ 
                                width: '100%',
                                backgroundImage: primeraimagen,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center bottom',
                                backgroundRepeat: 'no-repeat',
                                position: 'relative',
                            }} 
                            src={primeraimagen}/>         
            </div>
            <div>
                <h2>
                    Complejo Turístico de Cabañas
                </h2>
                <h3>
                    El complejo se ubica rodeado de paisajes imponentes y es un destino ideal para la familia
                </h3>
            </div>  
        </>          
    );
}
