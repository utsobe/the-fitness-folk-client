import React from 'react';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='bg-color'>
            <div className='container pt-4'>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    <div className="col py-2 my-3">
                        <h5 className='fw-bold mb-0'>Services</h5>
                        <ol className='link-list fw-bold text-secondary'>
                            <li>The Fitness Folk</li>
                            <li>Your Strength Service</li>
                            <li>My Gymspiration</li>
                            <li>Physique Freaks</li>
                            <li>More Muscle</li>
                            <li>Time to Train</li>
                        </ol>
                    </div>
                    <div className="col py-2 my-3">
                        <h5 className='fw-bold mb-0'>The Fitness Folk</h5>
                        <ol className='link-list fw-bold text-secondary'>
                            <li>About</li>
                            <li>Blog</li>
                        </ol>
                    </div>
                    <div className="col py-2 my-3">
                        <h5 className='fw-bold mb-0'>Support</h5>
                        <ol className='link-list fw-bold text-secondary'>
                            <li>Contact</li>
                        </ol>
                    </div>
                    <div className="col py-2 my-3">
                        <h5 className='fw-bold mb-0'>Address</h5>
                        <ol className='link-list text-secondary'>
                            <li className='fw-bold'>Bd Finess Studio LTD</li>
                            <li>Banani</li>
                            <li>Gulshan</li>
                            <li>Uttara</li>
                            <li>Mirpur</li>
                            <li>Dhanmodi</li>
                        </ol>
                    </div>
                </div>
                <hr />
                <p className='text-center text-secondary py-2'><small>Copyright &copy; {year} All Rights Reserved to Utsobe 俊哲</small></p>
            </div>
        </div>
    );
};

export default Footer;