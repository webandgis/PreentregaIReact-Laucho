import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom'


const ProductCard = ({ productData }) => {
  const cardStyle = {
    width: '20rem',
    height: '100%',
    marginTop:'5px',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    cursor: 'pointer',
    fontSize: '1.3rem',
  };

 const buttonStyle = {
    backgroundColor: '#cfbcf3',
    color: 'purple',
    border: 'none',
    fontWeight: 'bold',
    textAlign:'center',
    marginTop: 'auto',
    borderRadius:'5px'
  };
  const titleStyle = {
    color: 'purple',
  };

  const imgStyle={
    with:'70vw',
    height:'15w'
  }

  return (
    <Row xs={1} md={2} lg={3} xl={4}>
      <Col>
        <Card style={cardStyle}>
          <Card.Img variant="top" style={imgStyle} src={productData.img} />
          <Card.Body>
            <Card.Title style={titleStyle}>
               <strong>{productData.nombre}</strong> </Card.Title>
            <Card.Text>
              {productData.precio}
              <br />
              <strong>{productData.descripcion}</strong>
            </Card.Text>
          </Card.Body>
          
           <Link style={buttonStyle} to={`/item/${productData.id}`}>Agregar al carrito</Link>
           
          
        </Card>
      </Col>
    </Row>
  );
};

export default ProductCard;