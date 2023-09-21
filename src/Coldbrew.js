import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Coldbrew() {
  return (
    <Container>
      <Row>
        <div className="coldbrew">
        <Col xs={6} md={4}>
        <Image className="photo1" src="cream_coffee.jpg" rounded />
          <p className="enjoy">Cream Coldbrew</p>
        </Col>
        <Col xs={6} md={4}>
          <Image className="photo2" src="nitro.jpg" rounded />
          <p className="enjoy">Nitro White Coffee</p>
        </Col>
        <Col xs={6} md={4}>
          <Image className="photo3" src="mint_coldbrew.jpg" rounded/>
          <p className="enjoy">Mint coldbrew</p>
        </Col>
        </div>
      </Row>
    </Container> 
  );
}

export default Coldbrew;