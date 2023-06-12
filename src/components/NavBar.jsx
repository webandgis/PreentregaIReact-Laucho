import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CarWidget from "./Carwidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar style={{backgroundColor:"#cfbcf3", fontSize:'1.3rem'}} expand="lg">
      <Container>
      <Navbar.Brand href="/">
            <img
               src={window.location.origin + '/img/garzamora.jpg'} width="35"
              height="45"
              className="d-inline-block align-top"
              alt="garzaMora"
            />
          </Navbar.Brand>
     
        <Navbar.Brand style={{color:"purple"}}><Link to='/'> Garza Mora</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >  <Link to='/'> Inicio</Link>  </Nav.Link>
            <NavDropdown title="Categoria" id="basic-nav-dropdown">
              <NavDropdown.Item > <Link to="/categoria/Vegano">Vegano</Link>
                
              </NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item > <Link to="/categoria/Vegetariano">Vegetariano</Link>
                
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CarWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;