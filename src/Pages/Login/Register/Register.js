import React, { useState } from 'react';
import './Register.css';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import toast from 'react-hot-toast';
import { createUserWithEmailAndPassword } from 'firebase/auth';


const Register = () => {
    const [name, setName] = useState({ value: '', error: '' });
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [agree, setAgree] = useState(false);
    const [verify, setVerify] = useState({});
    const navigate = useNavigate();

    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

    const [sendEmailVerification, sending, VerificationError] = useSendEmailVerification(auth);

    const handleName = nameInput => {
        setName({ value: nameInput, error: '' });
    }

    const handleEmail = emailInput => {
        if (/\S+@\S+\.\S+/.test(emailInput)) {
            setEmail({ value: emailInput, error: '' });
        }
        else {
            setEmail({ value: '', error: 'Invalid email' });
        }
    }

    const handlePassword = passwordInput => {
        if (passwordInput.length < 7) {
            setPassword({ value: '', error: 'Password too short' });
        }
        else {
            setPassword({ value: passwordInput, error: '' })
        }
    }

    const handleRegister = async event => {
        event.preventDefault();
        // optional
        // const name = event.target.name.value;
        // const email = event.target.email.value;
        // const password = event.target.password.value;

        if (name.value === '') {
            setName({ value: '', error: 'Name is required' })
        }
        if (email.value === '') {
            setEmail({ value: '', error: 'Email is required' });
        }
        if (password.value === '') {
            setPassword({ value: '', error: 'Password is required' });
        }

        if (name.value && email.value && password.value) {
            await createUserWithEmailAndPassword(auth, email.value, password.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    toast.success('User created', { id: 'error' });
                    toast.success('Sent email verification', { id: 'verify' });
                    navigate('/');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setVerify(errorMessage);
                    if (errorMessage.includes('email-already-in-use')) {
                        toast.error('Already registered', { id: 'error' })
                    }
                    else {
                        toast.error(errorMessage, { id: 'error' })
                    }
                });

            await updateProfile({ displayName: name.value });
            console.log('Updated profile');

            await sendEmailVerification();
        }
    }

    // optional
    // if (updating || sending) {
    //     return <Loading></Loading>;
    // }

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div style={{ width: '400px' }} className='my-5 p-5 rounded-3 shadow shadow-lg'>
                <h2 className='mb-3'>Please Register</h2>
                <Form onSubmit={handleRegister} className='w-100'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" name='name' onBlur={event => handleName(event.target.value)} placeholder="Your Name" />
                        {
                            name?.error && <p className="text-danger"><small>{name.error}</small></p>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" name='email' onBlur={event => handleEmail(event.target.value)} placeholder="Enter email" />
                        {
                            email?.error && <p className="text-danger"><small>{email.error}</small></p>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" name='password' onBlur={event => handlePassword(event.target.value)} placeholder="Password" />
                        {
                            password?.error && <p className="text-danger"><small>{password.error}</small></p>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setAgree(!agree)} className={!agree ? 'text-danger' : ''} type="checkbox" label="Agreed to terms and condition" />
                    </Form.Group>
                    <Button disabled={!agree} className='w-100' variant="info" type="submit">
                        Register
                    </Button>
                </Form>
                <p className='mt-3 text-center'>Already Have an Account? <Link to='/login' className='login-link'>Login</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;