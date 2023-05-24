import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CarWidget from "./Carwidget";

const NavBar = () => {
  return (
    <Navbar style={{backgroundColor:"#cfbcf3"}} expand="lg">
      <Container>
      <Navbar.Brand href="#home">
            <img
               src={window.location.origin + '/img/garzamora.jpg'} width="35"
              height="45"
              className="d-inline-block align-top"
              alt="garzaMora"
            />
          </Navbar.Brand>
     
        <Navbar.Brand style={{color:"purple"}}   href="#home">Garza Mora</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Historia</Nav.Link>
            <Nav.Link href="#link">Servicios</Nav.Link>
            <NavDropdown title="Menú" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Congelados</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Team Dulce
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Team Salado
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contacto</Nav.Link>
          </Nav>
          <CarWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;