import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-scroll'

import 'bootstrap/dist/css/bootstrap.min.css'

export default function Navigation() {
  return (
    <Navbar className="fixed-top" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home" className="text-danger">Bonfire<span className="text-warning">Apps</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Link
            href="#aboutUs"
            to="aboutUs"
            activeClass="active"
            className="nav-link"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About us
          </Link>

          <Link
            href="#industries"
            to="industries"
            activeClass="active"
            className="nav-link"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Industries
          </Link>

          <Link
            href="#technologies"
            to="technologies"
            activeClass="active"
            className="nav-link"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Technologies
          </Link>

          <Link
            href="#contactUs"
            to="contactUs"
            activeClass="active"
            className="nav-link"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact us
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
