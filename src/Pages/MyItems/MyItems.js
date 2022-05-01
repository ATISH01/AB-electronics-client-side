import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebse.init';
import MyItem from './MyItem/MyItem';
import './MyItems.css'

const MyItems = () => {
    const [user]=useAuthState(auth);
    console.log(user);
    const [myItems,setmyItems]=useState([])
    useEffect(()=>{
        const email= user.email;
        fetch(`http://localhost:5000/myItems?email=${email}`)
        .then(res=>res.json())
        .then(data=>setmyItems(data))
    },[user])
    return (
        <div>
            
            <Row className='g-0'>
                <Col md={8}>
                    <h5 className='ms-5 ps-5 mt-3'>My Items list</h5>
                {
                myItems.map(item=><MyItem item={item} key={item._id}></MyItem>)
                }
                </Col>
                <Col md={4} className="p-3 bg-color">
                    <div className='user-style'>
                    <h3>User Information</h3>
                    <h4>Name:{user.displayName}</h4>
                    <h6>Email:{user.email}</h6>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default MyItems;