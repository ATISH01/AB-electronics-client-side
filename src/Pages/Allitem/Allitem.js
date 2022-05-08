import React from 'react';
import { Col } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";
import './Allitem.css'


const Allitem = ({ handleDelete, items }) => {

    const { _id, name, img ,supplier,price} = items;

    return (
        <div>
            <div>
                <Col xs={11} md={6} className='review-item mx-auto mt-5 d-flex justify-content-around manage-item-card'>

                    <Col md={9} xs={9}>
                        
                        <div className="review-item-details-container d-flex align-items-center justify-content-between p-1">
                        <img className=' rounded' src={img} alt="" />
                            <div className="review-item-details me-4 ms-2">
                                <h4 className="product-name me-5">
                                    {name}
                                </h4>
                                <p>Supplier:-{supplier}</p>
                                <p>Price:-{price}</p>

                            </div>
                        </div>

                    </Col>
                    {/* handle delete button  */}
                    <Col md={3} xs={3}>
                        <div className="delete-container">
                            <button className='d-block mx-auto delete-button' onClick={() => handleDelete(_id)}>
                                <FaTrashAlt />
                            </button>

                        </div>
                    </Col>


                   
                </Col>
            </div>
        </div>



    );
};

export default Allitem;