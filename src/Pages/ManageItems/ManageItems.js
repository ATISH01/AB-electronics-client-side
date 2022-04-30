import React from 'react';
import Allitem from '../Allitem/Allitem';
import useAlldata from '../useAllData/useAllData';
import './ManageItems.css'

const ManageItems = () => {
    const [allItems,setItems]=useAlldata();
    const handleDelete = id =>{
        const agree = window.confirm('Are you agee?')
        if(agree){
            const url = `http://localhost:5000/allItems/${id}`;
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
    return (
        <div>
            {
                allItems.map(items=><Allitem items={items} handleDelete={handleDelete}></Allitem>)
            }
        </div>
    );
};

export default ManageItems;