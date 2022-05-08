import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebse.init';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const AddItems = () => {
    const [user]=useAuthState(auth);
    const navigate = useNavigate();
    const formSchema = Yup.object().shape({
        price:Yup.number('Input Number Only'),quentity:Yup.number('Input Number Only'),email:Yup.string().email().required('Input Valid Email'),
    }) 
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState;
    const onSubmit = data => {
        console.log(data);
        const url='https://arcane-wave-79126.herokuapp.com/allItems';
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            swal("Added New Item", "Done!", "success");
            console.log(result);
            reset()
            navigate('/manageitems')
        })
    }
    return (
        <div>
            <Row  md={3} className="g-0">
            <Col xs={12} md={5} className="mx-auto p-3">
                <h2>Add Items</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-0" controlId="formBasicEmail">
                    <Form.Label> <strong>Items Name</strong> </Form.Label>
                    <input {...register("name")} className="form-control"/>   
                </Form.Group>
                <Form.Group className="mb-0" controlId="formBasicEmail">
                    <Form.Label><strong>Description</strong> </Form.Label>  <br />
                    <textarea {...register("description")} name="" id="" cols="5o" rows="4" className='d-block mx-auto form-control'></textarea> 
                </Form.Group>
                <Form.Group className="mb-0" controlId="formBasicEmail">
                    <Form.Label><strong>Price</strong></Form.Label>
                    <input {...register("price")} className="form-control"/>
                    {errors.price && <p className='text-danger'>Input Number Only</p>}
                     
                </Form.Group>
                <Form.Group className="mb-0" controlId="formBasicEmail">
                    <Form.Label><strong>Quantity</strong></Form.Label>
                    <input {...register("quentity")} className="form-control"/>
                    {errors.quentity && <p className='text-danger'>Input Number Only</p>}   
                </Form.Group>
                <Form.Group className="mb-0" controlId="formBasicEmail">
                    <Form.Label><strong>Supplier</strong></Form.Label>
                    <input {...register("supplier")} className="form-control"/>   
                </Form.Group>
                <Form.Group className="mb-0" controlId="formBasicEmail">
                    <Form.Label><strong>Supplier Email</strong></Form.Label>
                    <input value={user.email} {...register("email")} className="form-control"/> 
                    {errors.email && <p className='text-danger'>Input Email</p>} 
                </Form.Group>
                <Form.Group className="mb-0" controlId="formBasicEmail">
                    <Form.Label><strong>Items Image</strong></Form.Label>
                    <input {...register("img")} className="form-control"/>   
                </Form.Group>
                <Button variant="flat" type="submit" className='mt-2'>
                    Submit
                </Button>
            </Form>
            </Col>
        </Row>
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

export default AddItems;