import React from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';

const Checkout = () => {
    const handleCheckOutSubmit = event => {
        event.preventDefault();
        toast.success('Thanks For Your Booking')
    }
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div style={{ width: '500px' }} className='my-5 p-5 rounded-3 shadow shadow-lg'>
                <h2 className='mb-3'>Booking Information</h2>
                <Form className='w-100' onSubmit={handleCheckOutSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" name='name' placeholder="Full Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="text" name='text' placeholder="Re-type Service Name" />
                    </Form.Group>

                    <Form.Select className="mb-3 text-secondary" aria-label="Default select example">
                        <option>Your Area</option>
                        <option value="1">Banani</option>
                        <option value="2">Gulshan</option>
                        <option value="3">Uttara</option>
                        <option value="3">Mirpur</option>
                        <option value="3">Dhanmodi</option>
                    </Form.Select>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control as="textarea" rows={3} placeholder="Write something about your goal..." />
                    </Form.Group>

                    <Button className='w-100' variant="info" type="submit">
                        Checkout
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Checkout;