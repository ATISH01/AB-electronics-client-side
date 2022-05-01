import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allItems')
        .then(res=>res.json())
        .then(data=>setProducts(data.slice(0,6)))
    },[])
    return (
        <div>
            
            <div className='m-4'>
                <h3 className='text-center mt-5 pt-1 text-white'>Our Stocks</h3>
            </div>
            <div className='container'>
            <Row xs={1} md={3} className="g-0">
                
                { products.map(product=><Product product={product}></Product>)  }
               
           </Row>
            </div>
        </div>
    );
};

export default Products;