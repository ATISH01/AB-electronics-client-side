import React from 'react';
import { Button } from 'react-bootstrap';

const Allitem = ({ items }) => {
    const { name, img } = items;
    return (
        <div>
            <div class="container-fluid w-50">
                <div class="row">
                    <div class="col-12 mt-3">
                        <div class="card">
                            <div class="card-horizontal">
                                <div class="img-square-wrapper">
                                    <img class="" height={200} src={img} alt="" />
                                </div>
                                <div class="card-body">
                                    <h4 class="card-title">Card title</h4>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div class="card-footer">
                                <Button className='d-block ms-auto'>Delete Item</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Allitem;