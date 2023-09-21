import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function CoffeePhotos() {
  return (
    <Container>
      <Row>
        <div className="coffee">
        <Col xs={6} md={4}>
        <Image className="photo1" src="Black_Coffee.jpg" rounded />
          <p className="enjoy">Black Coffee</p>
        </Col>
        <Col xs={6} md={4}>
          <Image className="photo2" src="Latte.jpg" rounded />
          <p className="enjoy">Enjoy a delicous Latte</p>
        </Col>
        <Col xs={6} md={4}>
          <Image className="photo3" src="expresso.jpg" rounded/>
          <p className="enjoy">Fuel with an expresso</p>
        </Col>
        </div>
      </Row>
    </Container> 
  );
}

export default CoffeePhotos;