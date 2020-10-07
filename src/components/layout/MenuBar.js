import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { NavLink } from "react-router-dom";


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
  <Navbar bg="dark" expand="lg" variant="dark">
  <Navbar.Brand href="/">Kucing Kucingan</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav justify className="mr-auto"> 
  {menu.map((menu,index) => 
    <NavLink key={index} exact to={menu.path}>
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
