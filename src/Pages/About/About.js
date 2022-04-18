import React from 'react';
import './About.css';
import photo from '../../images/photo/photo.png'

const About = () => {
    return (
        <div className='container d-flex justify-content-center'>
            <div className='my-5 text-center about-card'>
                <img className='img' src={photo} alt="" />
                <h2 className='name pt-3 pb-2'>Md Mehedi Hasan Utsobe (俊哲)</h2>
                <p>Hi, This is Utsobe. I am a student and my major is Software Technology. Myself also introduced as a student of Programming Hero. I fall in love with programming so many days ago. And now I love to do it. I am always curious to learn more technology for web development and software development. After completing this full stack web development course, I will prepare myself for try to get a job and will plan for learn more technologies that I taught from this course. But This is not the end. After getting comfort with this technologies, I would like to explore more technologies which are related to Web and Software Development.</p>
            </div>
        </div>
    );
};

export default About;