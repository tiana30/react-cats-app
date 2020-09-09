import React from 'react';
import '../App.css';
import cat from '../images/cat.svg';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import CarouselImages from './images-list.js';
import Breeds from './breed-list.js';
import SearchImages from './search-images.js';

function MenuBar() {
  return (
    <Router>
    <>
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">
  <img
        alt=""
        src={cat}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
  <Link to="/">Kucing Kucingan</Link>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Link to="/images">Images</Link>
     
    </Nav>
  </Navbar.Collapse>
</Navbar>
{/* 
<CarouselImages /> */}
  </>
  <Switch>
  
  <Route path="/images">
    <SearchImages />
  </Route>
  <Route path="/">
            <Breeds />
          </Route>
  </Switch>
  </Router>
  );
  
}

export default MenuBar;
