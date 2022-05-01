import React from 'react';
import { Col, Row } from 'react-bootstrap';

const MyItem = ({item}) => {
    const {name}=item;
    return (
        <Row>
            <Col md={10} className='p-3 mx-auto'>
                <div className="card g-0">
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
                </div>
            </Col>
           
        </Row>
    );
};

export default MyItem;