import React from "react";
import Skeleton from "react-loading-skeleton";
import { Col, Card, Button } from 'react-bootstrap';

const SkeletonCard = () => {  const data = new Array(9).fill();
    return (<>
       {
       data.map((item) => (
         <Col sm={4}>
         <Card className="text-center" key={item+1}>
         <Card.Header>  <Skeleton height={25} />  </Card.Header>
         <Card.Body>
                <Card.Title> <Skeleton height={30} /> </Card.Title>
             <Card.Text>
             <Skeleton height={20} /> </Card.Text>
             <Button variant="primary">Go somewhere</Button>
            </Card.Body>
         <Card.Footer className="text-muted">2 days ago</Card.Footer>
         </Card>
             <br />
         </Col>
         ))
         }
        </>
    )
  };
  export default SkeletonCard;