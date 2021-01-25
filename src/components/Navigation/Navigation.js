import React from 'react'
import { Nav } from 'react-bootstrap'
import { Navbar, NavDropdown, Button, Form, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Navigation() {
  return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <Navbar.Brand href="#home">BonfireApps</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">About us</Nav.Link>
          <Nav.Link href="#link">Industries</Nav.Link>
          <Nav.Link href="#link">Contact us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
