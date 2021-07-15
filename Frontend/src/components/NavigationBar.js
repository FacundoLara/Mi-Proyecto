import React from 'react';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../assets/images/logo.jpg';

import { Link } from 'react-router-dom';


export default function Navigatorbar() {
    return (
      <>
        <Navbar 
          collapseOnSelect
          expand="lg"
          bg="info"
          variant="dark"
          sticky="top"
        >
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                width="65"
                height="65"
                className="d-inline-block align-top"
                alt="Complejo de Cabañas logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/cabañas">
                Cabañas
              </Link>
  
              <Nav.Link href="#promociones">Promociones</Nav.Link>
              <Nav.Link href="#servicios">Servicios</Nav.Link>
              <NavDropdown title="Nosotros" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#Ubicacion">Ubicacion</NavDropdown.Item>
                <NavDropdown.Item href="#Contacto">Contacto</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
  


/* export default function NavigationBar(props){
    return (
        <Navbar style={{backgroundColor: 'rgba(248, 249, 250, 0.7) !important', color: 'black'}} expand="lg">
            <Navbar.Brand href="#home">
                <img style={{height: '6vh'}} src={logo}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">

                { props.user
                  ? 
                    <>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown alignRight title={props.user.name} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Mi Cuenta</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Cerrar sesión</NavDropdown.Item>
                    </NavDropdown>

                    </>
                :
                    <Button>Registrarse</Button>

                }
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    );
} */