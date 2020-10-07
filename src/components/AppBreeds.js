import React, {useState, useEffect} from 'react';
import { Container, Row, CardDeck } from 'react-bootstrap';
import SkeletonCard from './SkeletonCard';
import CardBreeds from './CardBreeds';


  const baseUrl = "https://api.thecatapi.com/v1/breeds?api_key=69aabfa8-6bb6-428f-bfce-a64524b9bee9&";

  const Breeds = () => {
    const[breed, setBreed] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
      setLoading(true);
      const timer = setTimeout(() => {  
         fetch(baseUrl)
        .then ((res) => res.json())
        .then((res) => {
        setBreed(res)
        setLoading(false);
        });
      }, 10000);
      
        return () => clearTimeout(timer);

    }, []);
  
  return (
    <>
      <Container fluid>
      <Row>
        <h2>Breed List</h2>
      </Row>
      <Row>
      <CardDeck>
      {loading && <SkeletonCard />}
      {!loading && breed.map((item) => 
      
        <CardBreeds key={item.id} item={item} /> 
         
      )}
    
      </CardDeck>
      </Row>
      </Container>
    </>
  );
  }

export default Breeds;

