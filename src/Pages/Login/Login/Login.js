import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div style={{ width: '400px' }} className='mt-5 p-5 rounded-3 shadow shadow-lg'>
                <h2 className='mb-3'>Please Login</h2>
                <Form className='w-100'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="info" type="submit">
                        Login
                    </Button>
                </Form>
                <p className='mt-3'>New to The Fitness Folk? <Link to='/register'>Please Register</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;