import { useEffect, useState } from "react";

const useAlldata =()=>{
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allItems')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return[products,setProducts]
}
export default useAlldata;