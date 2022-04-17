import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    console.log(user);

    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

    const handleRegister = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);

        await updateProfile({ displayName: name });
        console.log('Updated profile');

        navigate('/')
    }


    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div style={{ width: '400px' }} className='mt-5 p-5 rounded-3 shadow shadow-lg'>
                <h2 className='mb-3'>Please Register</h2>
                <Form onSubmit={handleRegister} className='w-100'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" name='name' placeholder="Your Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" name='password' placeholder="Password" required />
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