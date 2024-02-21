import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link, useLocation } from 'react-router-dom';
import { MainRoutes } from '../infos/MainRoutes';

export default function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const { pathname } = useLocation();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener('scroll', scrollHandler);

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? 'sticky' : 'navbar'}>
      <Container>
        <Navbar.Brand as={Link} to={'/'} className="d-flex white">
          Miroslav Pesic
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : 'expanded');
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {MainRoutes.map(({ className, href, icon: Icon, label, rel, route, target }, idx) => (
              <Nav.Item key={`nav-item-${idx}`} className={route === pathname ? 'active' : className && 'fork-btn'}>
                {className ? (
                  <Button className={className} href={href} target={target}>
                    <Icon />
                  </Button>
                ) : (
                  <Nav.Link
                    as={Link}
                    href={href}
                    onClick={() => route && updateExpanded(false)}
                    rel={rel}
                    target={target}
                    to={route}
                  >
                    {Icon && <Icon style={{ marginBottom: '2px' }} />} {label}
                  </Nav.Link>
                )}
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
