import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { _id, name, img, description, price, quentity, supplier } = product;
    const navigation = useNavigate()
    const handleNavigate = (id) => {
        navigation(`/singleitem/${id}`)

    }
    return (
        <div>
            <Col className='p-4 w-75 mx-auto'>
                <Card className='card-color'>
                    <Card.Img className='imgClip' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title >{name}</Card.Title>
                        <Card.Text className='m-0'>
                            {description}
                        </Card.Text>
                        <p className='m-0'>Price:{price}</p>
                        <p className='m-0'>Quentity:-{quentity}</p>
                        <p className='m-0'>Supplier:-{supplier}</p>
                    </Card.Body>
                    <button className='button text-white' onClick={() => handleNavigate(_id)}><p className='button-text'>Update Item</p></button>
                </Card>
            </Col>
        </div>
    );
};

export default Product;