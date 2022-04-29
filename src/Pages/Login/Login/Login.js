import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
const Login = () => {
    const formSchema = Yup.object().shape({
        email:Yup.string().email().required('Input Valid Email'),
        
        
    })
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState;

    const onSubmit = data => {
        console.log(data);
    }
    return (
        <Row  md={3} className="g-0">
            <Col xs={12} md={5} className="mx-auto">
                <h1>LOgin</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <input {...register("email", { required: true })} className="form-control"/>
                    {errors.email && "Input valid Email"}
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control {...register("password", { required: true })} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Col>
        </Row>
    );
};

export default Login;