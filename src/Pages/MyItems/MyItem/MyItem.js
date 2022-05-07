import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {BsFillTrashFill} from "react-icons/bs";
import './MyItem.css'

const MyItem = ({ handleDelete, item }) => {
    const { _id, name } = item;
    return (
        <Row className='g-0'>
            <Col sm={12} md={10} className='p-3 mx-auto'>
                <div className="card g-0">
                    <Row>
                        <Col sm={6} md={8}>
                            <div className="card-content">
                                <div className="card-body cleartfix">
                                    <div className="media align-items-stretch">
                                        <div className="align-self-center">
                                            <h1>{name}</h1>
                                        </div>
                                        <div>
                                            <h4>Total Sales</h4>
                                            <span>Monthly Sales Amount</span>
                                        </div>
                                        <div className="align-self-center">
                                            <i className="icon-heart danger font-large-2"></i>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col sm={6} md={4}>
                            <div className='mt-3 p-3 d-flex justify-content-center '>

                                <button className='delete-btn-myItems' onClick={() => handleDelete(_id)}> <BsFillTrashFill /></button>
                            </div>
                        </Col>
                    </Row>

                </div>

            </Col>

        </Row>
    );
};

export default MyItem;