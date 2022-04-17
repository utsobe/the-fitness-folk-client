import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div
            style={{ height: '400px' }}
            className='w-100 d-flex justify-content-center align-items-center'
        >
            <Spinner style={{ height: '50px', width: '50px' }} animation="border" variant="info" />
        </div>
    );
};

export default Loading;