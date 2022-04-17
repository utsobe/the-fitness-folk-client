import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div style={{ width: '400px' }} className='mt-5 p-5 rounded-3 shadow shadow-lg'>
                <h2 className='mb-3'>Please Register</h2>
                <Form className='w-100'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Agreed to terms and condition" />
                    </Form.Group>
                    <Button variant="info" type="submit">
                        Register
                    </Button>
                </Form>
                <p className='mt-3'>Already Have an Account? <Link to='/login'>Login</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;