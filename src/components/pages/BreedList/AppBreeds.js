import React, {useState, useEffect} from 'react';
import { Row, CardDeck } from 'react-bootstrap';
import { Layout } from '../../layout';
import SkeletonCard from './SkeletonCard';
import CardBreeds from './CardBreeds';


  const baseUrl = "https://api.thecatapi.com/v1/breeds?api_key=69aabfa8-6bb6-428f-bfce-a64524b9bee9&&limit=6&page=10&order=desc";

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
    <Layout>
    <Row>
      <h1 className="text-center">List Breeds</h1>
      <CardDeck>
      {loading && <SkeletonCard />}
      {!loading && breed.map((item) => 
      
      <CardBreeds key={item.id} item={item} /> 
         
      )}
      </CardDeck>
      </Row>
    </Layout>
  );
  }

export default Breeds;

