import React from 'react';
import './Testimonial.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

const Testimonial = () => {
    return (
        <div id='testimonial' className="container mb-5 w-100">
            <h1 className='text-info text-center my-5'>Testimonial</h1>
            <div className='row row-cols-sm-2 row-cols-md-3 g-5'>
                <div className="card-group">
                    <div className=' text-center shadow shadow-lg px-4 py-5'>
                        <p>Matt is a fantastic trainer. He makes sure to tailor workouts according to my fitness goals, explains the benefits of the exercises were doing, and consistently shows me new exercises. Hes a good, personable dude who cares about doing a great job.</p>
                        <div>
                            <FontAwesomeIcon className='me-1 icon' icon={faStar} size="xs" />
                            <FontAwesomeIcon className='me-1 icon' icon={faStar} size="xs" />
                            <FontAwesomeIcon className='me-1 icon' icon={faStar} size="xs" />
                            <FontAwesomeIcon className='me-1 icon' icon={faStar} size="xs" />
                            <FontAwesomeIcon className='me-1 icon' icon={faStar} size="xs" />
                        </div>
                        <img width='50px' className='py-3' style={{ borderRadius: '50%' }} src="https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg" alt="" />
                        <h4>Rasheed Hasan</h4>
                    </div>
                </div>
                <div className="card-group">
                    <div className=' text-center shadow shadow-lg px-4 py-5'>
                        <p>Matt has a thorough understanding of different exercise routines and is careful to tailor each workout to what we think is best to focus on that day. Is very flexible with his schedule. Would highly recommend to anyone looking for a personal trainer.</p>
                        <div>
                            <FontAwesomeIcon className='me-1 icon' icon={faStar} size="xs" />
                            <FontAwesomeIcon className='me-1 icon' icon={faStar} size="xs" />
                            <FontAwesomeIcon className='me-1 icon' icon={faStar} size="xs" />
                            <FontAwesomeIcon className='me-1 icon' icon={faStar} size="xs" />
                            <FontAwesomeIcon className='me-1 icon-free' icon={faStar} size="xs" />
                        </div>
                        <img width='50px' className='py-3' style={{ borderRadius: '50%' }} src="https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg" alt="" />
                        <h4>Noah Smith</h4>
                    </div>
                </div>
                <div className="card-group">
                    <div className=' text-center shadow shadow-lg px-4 py-5'>
                        <p>Liz is an expert trainer who knows how to get the best out of me. It is amazing how a couple 30-minute sessions each week and the home workouts that she created for me have made a big difference in a short time. Thank you so much for your help.</p>
                        <div>
                            <FontAwesomeIcon className='me-1 icon' icon={faStar} size="xs" />
                            <FontAwesomeIcon className='me-1 icon' icon={faStar} size="xs" />
                            <FontAwesomeIcon className='me-1 icon' icon={faStar} size="xs" />
                            <FontAwesomeIcon className='me-1 icon' icon={faStar} size="xs" />
                            <FontAwesomeIcon className='me-1 icon' icon={faStarHalfStroke} size="xs" />
                        </div>
                        <img width='50px' className='py-3' style={{ borderRadius: '50%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXRZeL9LnLyD9ivfKbKf0V_FCd0uKl3g531w&usqp=CAU" alt="" />
                        <h4>Olivia Wilde</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;