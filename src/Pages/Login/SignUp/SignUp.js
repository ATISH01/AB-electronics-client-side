import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { Button, Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebse.init';
import './SignUp.css'
import { AiOutlineGoogle} from "react-icons/ai";

const SignUp = () => {
    const navigate=useNavigate();
    const [signInWithGoogle, googleUser, loading, error] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,user
    ] = useCreateUserWithEmailAndPassword(auth,{ sendEmailVerification: true });
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
    
    if(user||googleUser){
        navigate('/')
    }
    return (
        <Row  md={3} className="g-0">
            <Col xs={12} md={7} className="mx-auto">
            <div className="container p-3">
            
            <form onSubmit={handleSubmit(onSubmit)} className='signup-css'>
            <h2>SignUp Here</h2>
            <div className="form-group">
                    <label>Name</label>
                    <input
                        name="name"
                        type="text"
                        {...register('name')}
                        className="form-control field-color"
                    />
                    

                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        name="email"
                        type="text"
                        {...register('email')}
                        className="form-control field-color"
                    />
                    <p>{errors.email?.message}</p>

                </div>
                <div className="form-group">

                    <label>Password</label>
                    <input
                        name="password"
                        type="password"
                        {...register('password')}
                        className={`form-control ${errors.password ? 'is-invalid field-color' : 'field-color'}`}
                    />
                    <div className="invalid-feedback">{errors.password?.message}</div>
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        name="confirmPwd"
                        type="password"
                        {...register('confirmPwd')}
                        className={`form-control ${errors.confirmPwd ? 'is-invalid field-color' : 'field-color'}`}
                    />
                    <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
                </div>
                <p>already have an account? <Link to='/login'>Login</Link></p>
                <div className="mt-3">
                    <button type="submit"  className="btn-style">
                        Submit
                    </button>
                    <Button onClick={()=>signInWithGoogle()} className='d-block mt-3' variant="danger">
                         <AiOutlineGoogle/><span className='ms-2'>Sign In with Google</span>
                    </Button>
                </div>
            </form>
        </div>
            </Col>
        </Row>
    );
};

export default SignUp;