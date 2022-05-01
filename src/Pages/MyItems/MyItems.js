import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebse.init';

const MyItems = () => {
    const [user]=useAuthState(auth);
    const [myItems,setmyItems]=useState([])
    useEffect(()=>{
        const email= user.email;
        fetch(`http://localhost:5000/myItems?email=${email}`)
        .then(res=>res.json())
        .then(data=>setmyItems(data))
    },[user])
    return (
        <div>
            <h1>My Items:{myItems.length}</h1>
            {
                myItems.map(item=><div><h4>{item.name}</h4></div>)
            }
        </div>
    );
};

export default MyItems;