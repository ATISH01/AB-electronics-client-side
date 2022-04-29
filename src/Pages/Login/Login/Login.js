import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebse.init';
const Login = () => {
    const [authUser]=useAuthState(auth);
    const navigate=useNavigate();
    const [signInWithEmailAndPassword,
        user]=useSignInWithEmailAndPassword(auth)
    const formSchema = Yup.object().shape({
        email:Yup.string().email().required('Input Valid Email'),    
    })
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState;
    const location = useLocation();
    const from = location?.state?.from.pathname || '/';
    if(authUser||user){
        navigate(from,{replace:true})
    }
    if(user){
        console.log('user');
    }
    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email,data.password)
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
                <p>New to AB Electronics? <Link to="/signup">SignUp</Link></p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Col>
        </Row>
    );
};

export default Login;