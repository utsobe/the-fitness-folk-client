import React from 'react';
import './SocialLogin.css';
import google from '../../../images/social/Google__G__Logo.svg'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px', backgroundColor: 'lightgray' }} className='w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px', backgroundColor: 'lightgray' }} className='w-50'></div>
            </div>
            <div className='mt-3'>
                <button className='btn w-100'>
                    <img src={google} alt="" />
                    Google Sign In
                </button>
                <button className='btn w-100'>
                    <img src={facebook} alt="" />
                    Facebook Sign In
                </button>
                <button className='btn w-100'>
                    <img src={github} alt="" />
                    Github Sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;