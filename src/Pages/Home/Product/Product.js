import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {_id,name,img}=product;
    const navigation=useNavigate()
    const navigate =(id)=>{
        navigation(`/singleitem/${id}`)
    }
    return (
        <div>

            <Col className='p-4'>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Button onClick={()=>navigate(_id)}>Manage Item</Button>
                </Card>
            </Col>
        </div>
    );
};

export default Product;