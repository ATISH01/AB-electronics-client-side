import { useEffect, useState } from "react";

const useAlldata =()=>{
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://arcane-wave-79126.herokuapp.com/allItems')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return[products,setProducts]
}
export default useAlldata;