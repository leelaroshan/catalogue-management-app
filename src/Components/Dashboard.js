import React from 'react';
import { Card, Button, CardGroup,Row,Col } from 'react-bootstrap';

import { useSelector } from 'react-redux';



   

export default function Dashboard() {

  const products = useSelector(state => state.allProducts.products)  
  console.log(products)

  const {id, name, description, category} = products;

    return (
        <div>
          
       <Row xs={1} md={2} l={4} xl={5} className="g-4">
            {products.map(item => {   return (  
        <Col>
         <Card style={{ width: '18rem', height:"20rem", margin:"10px 20px" } }>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
           </Card.Body>
         </Card>

        </Col> 
                  )})}
    </Row>
          
        </div>
    )
}
