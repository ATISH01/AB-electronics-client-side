import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const SingleItem = () => {
    const { Id } = useParams();
    const [single, setSingle] = useState({});
    const [count,setCount]=useState();
    const {_id,name,img,description,price,quentity,supplier}=single;
    useEffect(() => {
        fetch(`http://localhost:5000/allItems/${Id}`)
            .then(res => res.json())
            .then(data => setSingle(data))
    }, [])
    
    
    const minus = (ID) =>{
            const i = single.quentity--;
            if(i>0)
            {console.log(`{id:${i}}`);
            console.log(single);
        
            const url = `http://localhost:5000/allItems/${ID}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(single)
            })
            .then(res => res.json())
            .then(data =>{
                console.log('success', data);
                 
                
                console.log(single.quentity);
                setSingle({...single, quentity:single.quentity})    
            })
            
        }
              else return;
        }
    return (
        <div className='container'>
            <Row md={2} className="g-3 m-5">
            <Col xs={12} md={6}> 
              <img className='img-fluid' src={img} alt="" />
            </Col>
            <Col xs={12} md={6}>
                <h4>{name}</h4>
                <p>{description}</p>
                <p>Price:{price}</p>
                <p>Quentity:-{quentity}</p>
                <p>Supplier:-{supplier}</p>
                <Button onClick={()=>minus(_id)}>Shipped</Button>
                
            </Col>
        </Row>
        </div>
    );
};

export default SingleItem;