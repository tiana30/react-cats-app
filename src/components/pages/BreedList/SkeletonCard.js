import React from "react";
import Skeleton from "react-loading-skeleton";
import { Col, Card } from 'react-bootstrap';

const SkeletonCard = () => {  const data = new Array(6).fill();
    return (<>
       {
       data.map((item, key) => (
         <Col sm={4} key={key}>
         <Card className="text-center" >
         <Card.Header>  <Skeleton height={25} width={200} />  </Card.Header>
         <Card.Body>
                <Card.Title> <Skeleton height={30} width={200} /> </Card.Title>
             <Card.Text>
             <Skeleton height={20} width={300} /> 
             <Skeleton height={20} width={300} /> 
             </Card.Text>
            </Card.Body>
         </Card>
             <br />
         </Col>
         ))
         }
        </>
    )
  };
  export default SkeletonCard;