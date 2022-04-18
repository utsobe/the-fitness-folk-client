import React, { useRef, useState } from 'react';
import './Login.css';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const emailRef = useRef('');
    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    if (loading) {
        return <Loading></Loading>;
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);

    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast.success('Password Reset Email Sent');
    }


    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div style={{ width: '400px' }} className='my-5 p-5 rounded-3 shadow shadow-lg'>
                <h2 className='mb-3'>Please Login</h2>
                <Form onSubmit={handleLogin} className='w-100'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" ref={emailRef} name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Button className='w-100' variant="info" type="submit">
                        Login
                    </Button>
                    <p onClick={handleResetPassword} className='text-center text-primary fgp'>Forget Password?</p>
                </Form>
                <p className='mt-3 text-center'>New to The Fitness Folk? <Link className='register-link' to='/register'>Please Register</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;