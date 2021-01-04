import React from 'react';
import { Button, Navbar, Form, FormControl, Nav } from 'react-bootstrap';


export default function Navigbar({userFormData, updateUserFormData}) {

  const handleChange = (e) => {
    updateUserFormData({
      ...userFormData,
      [e.target.email]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    console.log(userFormData);
  };

  return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Pizzeria</Navbar.Brand>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/menu">Menu</Nav.Link>
            <Nav.Link href="/order">Cart</Nav.Link>
            <Nav.Link href="/newproduct">Add product</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl id="email" onChange={handleChange} type="text" placeholder="Email" className="mr-sm-2" />
            <FormControl id="pass" onChange={handleChange} type="password" placeholder="Password" className="mr-sm-2" />
            <Button variant="primary" onClick={handleSubmit}>Login</Button>
            <Button variant="secondary" href="/register">Register</Button>
          </Form>
        </Navbar.Collapse>
        
      </Navbar>
    );
  }