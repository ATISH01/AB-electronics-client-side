import React from 'react';
import Allitem from '../Allitem/Allitem';
import useAlldata from '../useAllData/useAllData';
import './ManageItems.css'
import {  useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const ManageItems = () => {
    const [allItems,setItems]=useAlldata();
    const handleDelete = id =>{
        // confirmation alert 
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                const url = `https://arcane-wave-79126.herokuapp.com/allItems/${id}`;
                fetch(url,{
                    method:"DELETE"
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    swal("Deleted!", {
                        icon: "success",})
                    const remain = allItems.filter(items=>items._id!==id);
                    setItems(remain)
                })
            } else {
              swal("Your data file is safe!");
            }
          });
        
        
            
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
                allItems.map(items=><Allitem items={items} key={items._id} handleDelete={handleDelete}></Allitem>)
            }
        </div>
    );
};

export default ManageItems;