import React, {useState, useEffect} from 'react';
import { Container, Carousel} from 'react-bootstrap';
import { Layout } from '../../layout';

  const baseUrl = "https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc&api_key=69aabfa8-6bb6-428f-bfce-a64524b9bee9&";

  const CarouselImages = () => {
    const[image, setImage] = useState(undefined);

    useEffect(()=> {
      fetch(baseUrl)
        .then ((res) => res.json())
        .then((res) => {
        setImage(res)
        });
    }, []);
    if(!image) return null;
  
    const listImages = image.map((item) => 
    <Carousel.Item>
    <img
    className="d-block w-100"
    width="150"
    height="300"
    key={item.id}
    src={item.url} 
    alt="cats"
    />
    </Carousel.Item>
    );
    
  return (
    <Layout>
      <Container fluid>
      <Carousel>
          {listImages}
      </Carousel>
      </Container>
    </Layout>
  );
  }

export default CarouselImages;

