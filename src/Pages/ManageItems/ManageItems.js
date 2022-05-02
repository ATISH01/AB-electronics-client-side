import { Button } from 'react-bootstrap';
import React from 'react';
import Allitem from '../Allitem/Allitem';
import useAlldata from '../useAllData/useAllData';
import './ManageItems.css'
import {  useNavigate } from 'react-router-dom';

const ManageItems = () => {
    const [allItems,setItems]=useAlldata();
    const handleDelete = id =>{
        const agree = window.confirm('Are you agee?')
        if(agree){
            const url = `https://arcane-wave-79126.herokuapp.com/allItems/${id}`;
            fetch(url,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                const remain = allItems.filter(items=>items._id!==id);
                setItems(remain)
            })
        }
            
    }
    const navigate = useNavigate()
    const AddButton =()=>{
        navigate('/additems')
    }
    return (
        <div className='p-3 mb-2'>
            <div className='text-button'>
                <h5>To add new item click here</h5>
            <button className='btn-style mt-3' onClick={AddButton}>Add new</button>
            </div>
            
            {
                allItems.map(items=><Allitem items={items} handleDelete={handleDelete}></Allitem>)
            }
        </div>
    );
};

export default ManageItems;