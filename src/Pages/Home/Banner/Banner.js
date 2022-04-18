import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../images/banner-slider-1.jpg';
import slider2 from '../../../images/banner-slider-2.jpg';
import slider3 from '../../../images/banner-slider-3.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        {/* Can put something */}
                        <h1 className='fw-bold'>50% OFFER IS GOING ON</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        {/* Can put something */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        {/* Can put something */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;