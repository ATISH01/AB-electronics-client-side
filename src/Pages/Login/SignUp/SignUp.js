import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebse.init';

const SignUp = () => {
    const navigate=useNavigate();
    const [
        createUserWithEmailAndPassword,user
    ] = useCreateUserWithEmailAndPassword(auth);
    const formSchema = Yup.object().shape({

        email:Yup.string().email().required('Input Valid Email'),
        password: Yup.string()
            .required('Password is mendatory')
            .min(5, 'Password must be at 5 char long'),
        confirmPwd: Yup.string()
            .required('Password is mendatory')
            .oneOf([Yup.ref('password')], 'Passwords does not match'),
    })
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState;

    const onSubmit = data => {
        console.log(data);
        createUserWithEmailAndPassword(data.email,data.password);
    }
    if(user){
        navigate('/username')
    }
    return (
        <Row  md={3} className="g-0">
            <Col xs={12} md={7} className="mx-auto">
            <div className="container mt-5 p-3">
            <h2>SignUp Here</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        name="email"
                        type="text"
                        {...register('email')}
                        className="form-control"
                    />
                    <p>{errors.email?.message}</p>

                </div>
                <div className="form-group">

                    <label>Password</label>
                    <input
                        name="password"
                        type="password"
                        {...register('password')}
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.password?.message}</div>
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        name="confirmPwd"
                        type="password"
                        {...register('confirmPwd')}
                        className={`form-control ${errors.confirmPwd ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
                </div>
                <p>already have an account? <Link to='/login'>Login</Link></p>
                <div className="mt-3">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
            </Col>
        </Row>
    );
};

export default SignUp;