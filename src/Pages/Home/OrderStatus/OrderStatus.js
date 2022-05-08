import React from 'react';
import { FaRocket} from "react-icons/fa";
import { HiRefresh } from "react-icons/hi";
import {BsFillCreditCard2BackFill   } from "react-icons/bs";
import './OrderStatus.css'

const OrderStatus = () => {
    return (
        // card 
        <div className='mt-5'>
            <div className="container p-5">
                    <div className="row">
                        <div className="col-md-4 col-xl-3">
                            <div className="card bg-c-blue order-card">
                                <div className="card-block">
                                    <h6 className="m-b-20">Orders Received</h6>
                                    <h2 className="text-right">
                                    <FaRocket/>    
                                    <span>486</span></h2>
                                    <p className="m-b-0">Completed Orders<span className="f-right">351</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-xl-3">
                            <div className="card bg-c-green order-card">
                                <div className="card-block">
                                    <h6 className="m-b-20">Orders Received</h6>
                                    <h2 className="text-right"><FaRocket className=" f-left"></FaRocket><span>486</span></h2>
                                    <p className="m-b-0">Completed Orders<span className="f-right">351</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-xl-3">
                            <div className="card bg-c-yellow order-card">
                                <div className="card-block">
                                    <h6 className="m-b-20">Orders Received</h6>
                                    <h2 className="text-right"><HiRefresh className="fa fa-refresh f-left"></HiRefresh><span>486</span></h2>
                                    <p className="m-b-0">Completed Orders<span className="f-right">351</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-xl-3">
                            <div className="card bg-c-pink order-card">
                                <div className="card-block">
                                    <h6 className="m-b-20">Orders Received</h6>
                                    <h2 className="text-right"><BsFillCreditCard2BackFill className="fa fa-credit-card f-left me-1"></BsFillCreditCard2BackFill><span>486</span></h2>
                                    <p className="m-b-0">Completed Orders<span className="f-right">351</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default OrderStatus;