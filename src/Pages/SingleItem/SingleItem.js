import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './SingleItem.css'

const SingleItem = () => {
    const navigate = useNavigate();
    const { Id } = useParams();
    const [single, setSingle] = useState({});
    const [error, setError] = useState('');
    const { _id, name, img, description, price, quentity, supplier, sold } = single;
    useEffect(() => {
        fetch(`https://arcane-wave-79126.herokuapp.com/allItems/${Id}`)
            .then(res => res.json())
            .then(data => setSingle(data))
    }, [Id])


    const minus = (ID) => {
        const i = single.quentity--;
        if (i > 0) {
            console.log(`{id:${i}}`);
            console.log(single);

            const url = `https://arcane-wave-79126.herokuapp.com/allItems/${ID}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(single)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data);
                    setSingle({ ...single, quentity: single.quentity })
                })
        }
        else return;
    }
    const [input, setInput] = useState(0)
    const inputValue = e => {
        setInput(e.target.value);
        console.log(input);


    }
    const updateQuentity = ID => {
        console.log(input);
        const newQuentity = (quentity + parseInt(input));
        if (isNaN(newQuentity)) {

            setError("Input a value")
            return
        }
        else {
            setError('')
        }

        console.log(parseFloat(newQuentity));
        const update = { ...single, quentity: newQuentity }
        const url = `https://arcane-wave-79126.herokuapp.com/allItems/${ID}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {

                setSingle({ ...single, quentity: newQuentity })


            })


    }
    const toManagePage =()=>{
        navigate('/manageitems')
}
    return (
        <div className='container-style'>
            <Row md={2} className="g-3 m-5">
                <Col xs={12} md={6}>
                    <img className='img-fluid p-3 mb-4' src={img} alt="" />
                </Col>
                <Col xs={12} md={6}>
                    <Row md={2} className='g-0'>
                        <Col xs={12} md={6} className='py-1 pe-2'>
                            <h4>{name}</h4>
                            <p>ProductID:{_id}</p>
                            <p>{description}</p>
                            <p>Price:{price}</p>
                            <p>Quentity:-{quentity}</p>
                            <p>Sold:-{sold}</p>
                            <p>Supplier:-{supplier}</p>
                            <Button variant="flat" onClick={() => minus(_id)}>Shipped</Button>
                        </Col>
                        <Col xs={12} md={6} className='mx-auto'>
                            <div className='mb-4'>
                                <h4>Update Stock for New Shipment</h4>
                                <form>
                                    <input onChange={inputValue} className='form-control mt-3 w-75' type="text" />
                                    <p>{error}</p>
                                    <Button variant="flat" onClick={() => updateQuentity(_id)} >Update</Button>
                                    <Button className='mt-4 d-block' onClick={toManagePage} variant="flat">Manage Inventory</Button>

                                    {/* custom button style  */}
                                    <>
                                        <style>
                                            {`
                                            .btn-flat {
                                              background-color:#FF8C32;
                                              color: white;
                                            }
                                        
                                            .btn-xl {
                                              padding: 1rem 1.5rem;
                                              font-size: 1.5rem;
                                            }
                                            `}
                                        </style>

                                       
                                    </>

                                </form>
                            </div>
                        </Col>
                    </Row>




                </Col>
            </Row>
        </div>
    );
};

export default SingleItem;