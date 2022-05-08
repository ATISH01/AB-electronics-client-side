import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

import './Shipping.css'

const Shipping = () => {
    return (
        <div className='backgroundImg'>
            <Row md={3} className="g-0">
                <Col md={6}></Col>
                <Col xs={12} md={6} className="mx-auto">

                    <Form className='w-75 mt-5 p-5 mx-auto'>
                        <div className='m-1'>
                            <h3>Book Now For free Shipping</h3>
                            <p>We provide free shipping world wide.We shipped product with care.You will get your product as you want.</p>
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Row md={1} className="g-2">
                                <Col md={6}>
                                    <input className='m-1 inputEmail' type="text" placeholder='Name' />
                                </Col>
                                <Col md={6}>
                                    <input className='m-1 inputEmail' type="text" placeholder='Phone number' />
                                </Col>
                            </Row>
                            <Row md={1}>
                                <Col md={12}>
                                    <input className='m-1 inputEmail' type="text" placeholder='Email Address' />
                                </Col>
                            </Row>

                            <Row md={1}>
                                <Col>
                                    <textarea className='m-1 inputEmail' name="" id="" cols="49" rows="3" placeholder='Your Address Details'></textarea>
                                </Col>
                            </Row>
                            <button className='button2 ms-1'>
                                Submit
                            </button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

        </div>
    );
};

export default Shipping;