import axios from 'axios';
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
        const getMyItems = async()=>{
            const email= user.email;
        const url =`https://arcane-wave-79126.herokuapp.com/myItems?email=${email}`;
        const {data}= await axios.get(url,{
            headers:{
                authorize:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        setmyItems(data)
        }
        getMyItems()
    },[user])
    return (
        <div>
            
            <Row className='g-0 my-4'>
                <Col md={8}>
                    <h5 className='ms-5 ps-5 mt-3'>My Items list</h5>
                {
                myItems.map(item=><MyItem item={item} key={item._id}></MyItem>)
                }
                </Col>
                <Col md={4} className="p-3 mb-5 bg-color">
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