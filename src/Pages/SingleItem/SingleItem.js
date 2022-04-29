import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const SingleItem = () => {
    const { Id } = useParams();
    const [single, setSingle] = useState({});
    const {name,img,description,price,quentity,supplier}=single;
    useEffect(() => {
        fetch(`http://localhost:5000/allItems/${Id}`)
            .then(res => res.json())
            .then(data => setSingle(data))
    }, [])
    return (
        <div className='container'>
            <Row md={2} className="g-3 m-5">
            <Col xs={12} md={6}> 
              <img className='img-fluid' src={img} alt="" />
            </Col>
            <Col xs={12} md={6}>
                <h4>{name}</h4>
                <p>{description}</p>
                <p>Price:{price}</p>
                <p>Quentity:-{quentity}</p>
                <p>Supplier:-{supplier}</p>
                <Button>Shipped</Button>
            </Col>
        </Row>
        </div>
    );
};

export default SingleItem;