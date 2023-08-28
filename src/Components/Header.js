import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {
  return (
    <Navbar  expand="lg" className="bg-body-tertiary px-3  ">
      <Container fluid > 
        <Navbar.Brand href="#" className='fs-1'>K<span className='text-primary'>p</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto mb-2  my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  className='text-primary' ><Link to="/"  className="kkk">Home</Link></Nav.Link>
            <Nav.Link ><Link to="/about" className="kkk">About </Link></Nav.Link>
            <Nav.Link ><Link to="/product" className="kkk">Product</Link></Nav.Link>
            &nbsp;&nbsp;<Col xs="auto" >
            <Button variant="success" ><Link to="/login" className="kkk">login</Link></Button>
          </Col>&nbsp;
          <Col xs="auto">
            <Button><Link to="/signup" className="kkk">Register</Link></Button>
          </Col>
          
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header