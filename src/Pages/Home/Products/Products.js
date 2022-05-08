import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const navigate = useNavigate();
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://arcane-wave-79126.herokuapp.com/allItems')
        .then(res=>res.json())
        .then(data=>setProducts(data.slice(0,6)))
    },[])
    const toManagePage =()=>{
            navigate('/manageitems')
    }
    return (
        // all product list 
        <div>
            
            <div className='m-4'>
                <h3 className='text-center-css pt-2 mt-5 pt-1 text-white'>Our Stocks</h3>
            </div>
            <div className='container'>
            <Row xs={1} md={3} className="g-0">
                
                { products.map(product=><Product product={product} key={product._id}></Product>)  }
               
           </Row>
           <Button className='d-block mx-auto w-50' onClick={toManagePage} variant="flat">Manage Inventory</Button>
            </div>
            <style>
                {`
                .btn-flat {
                  background-color:#06113ca4;
                  color: white;
                }
            
                .btn-xl {
                  padding: 1rem 1.5rem;
                  font-size: 1.5rem;
                }
                `}
            </style>
        </div>
    );
};

export default Products;