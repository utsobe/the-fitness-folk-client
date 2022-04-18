import React from 'react';
import { Card } from 'react-bootstrap';
import toast from 'react-hot-toast';

const Blog = () => {
    const makeToast = () => {
        toast('hello world')
        toast('another')
    }
    return (
        <div id='services' className='container mb-5'>
            <h1 className='text-info text-center my-5'>Blog</h1>
            <div className="row row-cols-md-3 row-cols-md-1 g-5">
                <div className="card-group">
                    <Card className=' border-0 shadow shadow-lg w-100' style={{ width: '18rem' }}>
                        <Card.Body className='p-3'>
                            <Card.Title>Difference between authorization and authentication?</Card.Title>
                            <Card.Text>
                                Authorization means granting a user account configured on the computer system the right to make use of a resource (allocating the user privileges on the resource). Authentication protects the validity of the user account by testing that the person accessing that account is who s/he says s/he is.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="card-group">
                    <Card className=' border-0 shadow shadow-lg w-100' style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Why are you using Firebase? What other option do you have to implement Authentication?</Card.Title>
                            <Card.Text>
                                The Firebase Realtime Database lets me build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. Duo Mobile. Other options to implement Authentication are: Authy, Microsoft Authenticator, LastPass Authenticator, Symantec VIP etc.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="card-group">
                    <Card className=' border-0 shadow shadow-lg w-100' style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>What other service does firebase provide other than  authentication ?</Card.Title>
                            <Card.Text>
                                The other services does firebase provide other than authentication are:

                                <li>Cloud Functions</li>
                                <li>Cloud Storage</li>
                                <li>Hosting</li>
                                <li>Google Analytics</li>
                                <li>Predictions</li>
                                <li>Cloud Messaging</li>


                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Blog;