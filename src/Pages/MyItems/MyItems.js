import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import swal from 'sweetalert';
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
        const url =`http://localhost:5000/myItems?email=${email}`;
        const {data}= await axios.get(url,{
            headers:{
                authorize:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        setmyItems(data)
        }
        getMyItems()
    },[user])
    
    const handleDelete = id =>{
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                const url = `http://localhost:5000/allItems/${id}`;
            fetch(url,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                const remain = myItems.filter(items=>items._id!==id);
                setmyItems(remain)
            })
            
            } else {
              swal("Your data file is safe!");
            }
          });
        
            
    }
    return (
        <div>
            
            <Row className='g-0 my-4'>
                <Col md={8}>
                    <h5 className='ms-5 ps-5 mt-3'>My Items list</h5>
                {
                myItems.map(item=><MyItem item={item} key={item._id} handleDelete={handleDelete}></MyItem>)
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