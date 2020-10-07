import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {MenuBar, Footer} from './components/layout/';
import CarouselImages from './components/pages/ImagesCarousel/ImageCaraousel.js';
import Breeds from './components/pages/BreedList/AppBreeds.js';
import Home from './components/pages/Home/Home';

function App() {
  return (
  
    
  <Router>
    <Container fluid className="p-3"> 
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
  </Switch> <Footer />
  </Container>
</Router>
  
  
 
  );
}

export default App;
