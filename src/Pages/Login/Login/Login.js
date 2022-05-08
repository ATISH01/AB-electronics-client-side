import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebse.init';
import './Login.css'
import axios from 'axios';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
   
    const navigate = useNavigate();
    const [signInWithEmailAndPassword,
        user, loading,
        error,] = useSignInWithEmailAndPassword(auth)
    const formSchema = Yup.object().shape({
        email: Yup.string().email().required('Input Valid Email'),
    })
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState;
    const location = useLocation();
    const from = location?.state?.from.pathname || '/';
    if (user) {
        navigate(from, { replace: true })
    }
    
    if(loading){
        <Loading></Loading>
    }
    
    const onSubmit = async userData => {
        console.log(userData.email);
        const email = userData.email;
        await signInWithEmailAndPassword(userData.email, userData.password)
        const { data } = await axios.post('https://arcane-wave-79126.herokuapp.com/login', { email });
        console.log(data.accessToken);
        localStorage.setItem('accessToken',data.accessToken);
        navigate(from, { replace: true });
        
    }
   
   
    return (
        <Row md={3} className="g-0">
            <Col xs={12} md={5} className="mx-auto">

                <Form onSubmit={handleSubmit(onSubmit)} className='login-css'>
                    <h1>Login</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <input  {...register("email", { required: true })} className="form-control field-color" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control {...register("password", { required: true })} className='field-color' />
                    </Form.Group>
                    <p>{error?.message && 'Invalid Email or Password'}</p>
                    <p>New to AB Electronics? <Link className='text-decoration-none' to="/signup">SignUp</Link></p>
                       <p>Forget password? <Link to='/reset' className=' text-decoration-none'>Reset</Link></p>
                    <button className='btn-style' type="submit">
                        Submit
                    </button>
                </Form>
            </Col>
        </Row>
    );
};

export default Login;