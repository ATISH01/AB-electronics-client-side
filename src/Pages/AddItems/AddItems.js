import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const AddItems = () => {
    const formSchema = Yup.object().shape({
        price:Yup.number('Input Number Only'),quentity:Yup.number('Input Number Only'),
    }) 
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState;
    const onSubmit = data => {
        console.log(data);
        const url='http://localhost:5000/allItems';
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
            reset()
        })
    }
    return (
        <div>
            <Row  md={3} className="g-0">
            <Col xs={12} md={5} className="mx-auto">
                <h2>Add Items</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-0" controlId="formBasicEmail">
                    <Form.Label>Items Name</Form.Label>
                    <input {...register("name")} className="form-control"/>   
                </Form.Group>
                <Form.Group className="mb-0" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>  
                    <textarea {...register("description")} name="" id="" cols="83" rows="4"></textarea> 
                </Form.Group>
                <Form.Group className="mb-0" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <input {...register("price")} className="form-control"/>
                    {errors.price && "Input Number Only"}
                     
                </Form.Group>
                <Form.Group className="mb-0" controlId="formBasicEmail">
                    <Form.Label>Quantity</Form.Label>
                    <input {...register("quentity")} className="form-control"/>
                    {errors.quentity && "Input Number Only"}   
                </Form.Group>
                <Form.Group className="mb-0" controlId="formBasicEmail">
                    <Form.Label>Supplier</Form.Label>
                    <input {...register("supplier")} className="form-control"/>   
                </Form.Group>
                <Form.Group className="mb-0" controlId="formBasicEmail">
                    <Form.Label>Items Image</Form.Label>
                    <input {...register("img")} className="form-control"/>   
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Col>
        </Row>
        </div>
    );
};

export default AddItems;