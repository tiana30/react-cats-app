import React from 'react';
import '../App.css';
import cat from '../images/cat.svg';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CarouselImages from './ImageCaraousel.js';
import Breeds from './AppBreeds.js';
import Home from './Home';

function MenuBar() {
  return (
    <Router>
    <>
   <Navbar collapseOnSelect expand="lg" variant="dark" >
  <Navbar.Brand href="#home">
  <img
        alt=""
        src={cat}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
 Kucing Kucingan
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto" justify variant="tabs" defaultActiveKey="/">
  
  <Nav.Item>
      <Nav.Link href='/'> Home </Nav.Link>

  </Nav.Item>
  <Nav.Item>

      <Nav.Link href='/images'> Images </Nav.Link>

  </Nav.Item>
  <Nav.Item>

      <Nav.Link href='/breeds'> Breeds </Nav.Link>

  </Nav.Item>

    </Nav>
  </Navbar.Collapse>
</Navbar>
  </>
  <Switch>
   <Route exact path="/">
            <Home />
  </Route>
  <Route path="/breeds">
    <Breeds />
  </Route>
  <Route path="/images">
    <CarouselImages />
  </Route>

  </Switch>
  </Router>
  );
  
}

export default MenuBar;
