import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState,  useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebse.init';
import './Login.css'
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
                
            <Form onSubmit={handleSubmit(onSubmit)} className='login-css'>
            <h1>Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <input {...register("email", { required: true })} className="form-control field-color"/>
                    {errors.email && "Input valid Email"}
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control {...register("password", { required: true })} className='field-color'/>
                </Form.Group>
                <p>New to AB Electronics? <Link to="/signup">SignUp</Link></p>
                <button className='btn-style' type="submit">
                    Submit
                </button>
            </Form>
            </Col>
        </Row>
    );
};

export default Login;