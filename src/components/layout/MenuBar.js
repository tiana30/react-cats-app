import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import cat from '../../images/cat.svg'

function MenuBar() {
  const menu = [
    {path:'/',
  name:'Home'},
    {path:'/images',
    name:'Images'},
    {path:'/breeds',
    name:'Breed'}
  ]
  return (
    <>
  <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
  <Navbar.Brand href="/">
    <img
          alt=""
          src={cat}
          width="30"
          height="30"
          className="d-inline-block align-top ml-5"
        />{' '}
    Kucing Kucingan
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav justify className="ml-5 mr-5"> 
  {menu.map((menu,index) => 
    <NavLink key={index} exact to={menu.path} className=" ml-3 text-light">
      {menu.name}
    </NavLink>
  )}
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </>
 
  );
  
}

export default MenuBar;
