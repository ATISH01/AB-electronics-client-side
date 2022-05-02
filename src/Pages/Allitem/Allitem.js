import React from 'react';
import { Col } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";
import './Allitem.css'


const Allitem = ({ handleDelete, items }) => {

    const { _id, name, img } = items;

    return (
        <div>
            <div>
                <Col xs={11} md={6} className='review-item mx-auto mt-5 d-flex justify-content-around manage-item-card'>
                    <div>
                        <img  src={img} alt="" />
                    </div>
                    
                        <div className="review-item-details-container d-flex align-items-center">
                            <div className="review-item-details me-4">
                                <h4 className="product-name">
                                    {name}
                                </h4>

                            </div>
                            <div className="delete-container">
                                <button className='delete-button' onClick={() => handleDelete(_id)}>
                                    <FaTrashAlt />
                                </button>
                            
                        </div>
                    </div>
                </Col>
            </div>
            </div>
            


    );
};

export default Allitem;