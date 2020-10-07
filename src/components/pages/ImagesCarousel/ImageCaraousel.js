import React, {useState, useEffect} from 'react';
import { Row, Carousel} from 'react-bootstrap';
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
    className="rounded d-block img-thumbnail"
    key={item.id}
    src={item.url} 
    alt="cats"
    />
    </Carousel.Item>
    );
    
  return (
    <Layout>
    <Row>
      <h1>Images Carousel</h1>
    </Row>
    <Row>
      <Carousel>
          {listImages}
      </Carousel>
    </Row>
    </Layout>
  );
  }

export default CarouselImages;

