import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, description, price, image } = service;
    const navigate = useNavigate();

    const goToCheckout = () => {
        navigate('/checkout');
    }
    return (
        <div className='card-group'>
            <Card className=' border-0 shadow shadow-lg w-100' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Title className='pb-2 fs-3'>${price}</Card.Title>
                    <Button onClick={goToCheckout} variant="info">Book Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;