import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { AiOutlineGoogle, AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiOutlineArrowRight, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaFax } from "react-icons/fa";
import './Footer.css'
import logo from '../../../Assets/logo (2).png'

const Footer = () => {
    return (
        <div className='background p-4'>
            <div className='container p-1'>
                <Row md={3}>
                    <Col md={4}>
                        <div className='my-5 tite-border'>
                            <h3 className='text-white p-1 ms-3'>About Us</h3>
                        </div>

                        <div className='mt-3'>
                            <div className='d-flex align-items-center'>
                                <img className='me-2' height={50} src={logo} alt="" />
                                <h4 className='text-white'>AB Electronics</h4>
                            </div>
                            <small>AB Electronis also offers a host of logistic management services and supply chain solutions. We provide innovative solutions with the best people, processes, and technology.</small>
                        </div>
                        <div className='mt-3'>
                            <AiOutlineGoogle className='icon-size me-3' />
                            <AiFillFacebook className='icon-size me-3' />
                            <AiFillTwitterCircle className='icon-size me-3' />
                            <AiFillInstagram className='icon-size ' />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='my-5 tite-border'>
                            <h3 className='text-white p-1 ms-2 '>Information</h3>
                        </div>
                        <Row md={1} className='g-0'>
                            <Col xs={6} md={6}>
                                <div className='my-1'><AiOutlineArrowRight /> <strong>About Us</strong></div>
                                <div className='my-1'><AiOutlineArrowRight /> <strong>Cart</strong></div>
                                <div className='my-1'><AiOutlineArrowRight /> <strong>Contact</strong></div>
                                <div className='my-1'><AiOutlineArrowRight /> <strong>Our Service</strong></div>


                            </Col>
                            <Col xs={6} md={6}>
                                <div className='my-1'><AiOutlineArrowRight /> <strong>Classic Blog</strong></div>
                                <div className='my-1'><AiOutlineArrowRight /> <strong>Check Out</strong></div>
                                <div className='my-1'><AiOutlineArrowRight /> <strong>My Account</strong></div>
                                <div className='my-1'><AiOutlineArrowRight /> <strong>Shop</strong></div>

                            </Col>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <div className='my-5 tite-border'>
                            <h3 className='text-white p-1 ms-2 '>Our Office</h3>
                        </div>

                        <div className='my-1'><GoLocation /> <strong>Anderkilla,Chittagong,Bangladesh</strong></div>
                        <div className='my-1'><AiOutlinePhone /> <strong>+8819111111</strong></div>
                        <div className='my-1'><AiOutlineMail /> <strong>abelectronics@gmail.com</strong></div>
                        <div>
                            <div className='my-1'><FaFax /> <strong>+8809876</strong></div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Footer;