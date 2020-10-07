import React from "react";
import { Col, Card} from 'react-bootstrap';

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
      </Card.Body>
      </Card>
      <br />
      </Col>
    </>
    )
}
export default CardBreeds;