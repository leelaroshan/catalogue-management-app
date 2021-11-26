import React from 'react';
import {Navbar, Container,Nav,NavDropdown,Form,Button,FormControl } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {category} from '../actions/index'
import {Link} from 'react-router-dom'

export default function Header() {

  const dispatch = useDispatch();



    return (
        <div>
    <Navbar bg="light" expand="lg">
       <Container fluid >
       <Navbar.Brand href="#">Fake Shop</Navbar.Brand>
       <Navbar.Toggle aria-controls="navbarScroll" />
       <Navbar.Collapse id="navbarScroll">
        <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        
        <NavDropdown title="Category" id="navbarScrollingDropdown">
       
          <Link to="/category">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          </Link>

          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
       
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    )
}
