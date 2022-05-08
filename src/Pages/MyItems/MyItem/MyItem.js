import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {BsFillTrashFill} from "react-icons/bs";
import './MyItem.css'

const MyItem = ({ handleDelete, item }) => {
    const { _id, name,quentity } = item;
    return (
        <Row className='g-0'>
            <Col sm={12} md={10} className='p-2 mx-auto'>
                <div className="card m-0 g-0">
                    <Row className='g-0'>
                        <Col xs={7} md={8}>
                            <div className="card-content">
                                <div className="card-body cleartfix">
                                    <div className="media align-items-stretch">
                                        <div className="align-self-center">
                                            <h1>{name}</h1>
                                        </div>
                                        <div>
                                            <h4>Stock:{quentity}</h4>
                                        </div>
                                        <div className="align-self-center">
                                            <i className="icon-heart danger font-large-2"></i>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col xs={5} md={4}>
                            <div className='p-3 d-flex justify-content-center '>

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