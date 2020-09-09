import React, {useState, useEffect} from 'react';
import { Container, Row, Col, CardDeck, Card, Button } from 'react-bootstrap';

  const baseUrl = "https://api.thecatapi.com/v1/breeds?api_key=69aabfa8-6bb6-428f-bfce-a64524b9bee9&";

  const Breeds = () => {
    const[breed, setBreed] = useState(undefined);

    useEffect(()=> {
      fetch(baseUrl)
        .then ((res) => res.json())
        .then((res) => {
        setBreed(res)
        });


    }, []);
    if(!breed) return null;
  
    const listBreeds = breed.map((item) => 
      <Col sm={4}>
      <Card className="text-center">
      <Card.Header>{item.name}</Card.Header>
      <Card.Body>
        <Card.Title>{item.origin}</Card.Title>
        <Card.Text>
          {item.temperament} </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
      <br />
      </Col>
    );
    
  return (
    <>
      <Container fluid>
      <Row>
        <h2>Breed List</h2>
      </Row>
      <Row>
      <CardDeck>
      {listBreeds}
      </CardDeck>
      </Row>
      </Container>
    </>
  );
  }

export default Breeds;

