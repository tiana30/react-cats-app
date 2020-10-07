import React from "react";
import { Col, Card, Button } from 'react-bootstrap';

const CardBreeds = ({item}) => {
    return(
        <>
      <Col sm={4}>
      <Card className="text-center" >
      <Card.Header>{item.name}  </Card.Header>
      <Card.Body>
        <Card.Title>{item.origin} </Card.Title>
        <Card.Text>
          {item.temperament} </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
      <br />
      </Col>
    </>
    )
}
export default CardBreeds;