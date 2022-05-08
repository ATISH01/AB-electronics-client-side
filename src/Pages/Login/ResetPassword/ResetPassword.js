import React, { useRef } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './ResetPass.css'
import { BsShieldLock } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebse.init';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(auth, { sendPasswordResetEmail: true });
    const emailRef = useRef();
    const handleReset = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('Reset link send')
    }
    return (

        <Row className='g-0'> 
            <Col md={4}></Col>
            <Col md={4}>

                <form className='p-4 my-4'>
                    <div className='mt-5 text-reset'>
                        <BsShieldLock className='d-block mx-auto lock-style'/>
                        <strong>Trouble Logging In?</strong>
                        <small className='reset-text d-block'>Enter your email, phone, or username and we'll send you a link to get back into your account.</small>
                    </div>
                    <div className='my-2 w-75 mx-auto'>
                        <input ref={emailRef}  type="text" className='form-control mb-3' />
                        <Button variant="flat" onClick={handleReset} className='d-block mx-auto w-100'>Send reset link</Button>
                    </div>
                    <div>
                        <Link to='/signup' className='ms-5 mb-5 ps-2 text-decoration-none'>or create new account</Link>
                        
                    </div>
                    <ToastContainer />
                </form>

                {/* button style  */}
                <style>
                  {`
                  .btn-flat {
                    background-color:#FF8C32;
                    color: white;
                  }
             
                  .btn-xl {
                    padding: 1rem 1.5rem;
                    font-size: 1.5rem;
                  }
                  `}
              </style>
            </Col>
            <Col md={4}></Col>
        </Row>
    );
};

export default ResetPassword;