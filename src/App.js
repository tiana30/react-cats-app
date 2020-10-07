import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MenuBar from './components/layout/MenuBar.js';
import CarouselImages from './components/pages/ImagesCarousel/ImageCaraousel.js';
import Breeds from './components/pages/BreedList/AppBreeds.js';
import Home from './components/pages/Home/Home';

function App() {
  return (
  
    <Container fluid> 
    <Router>
    <MenuBar />
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
  </Switch> </Router>
  </Container>
 
  );
}

export default App;
