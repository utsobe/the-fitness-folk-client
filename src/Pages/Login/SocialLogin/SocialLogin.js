import React from 'react';
import './SocialLogin.css';
import google from '../../../images/social/Google__G__Logo.svg'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    const [signInWithGithub, user3, loading3, error3] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (user || user2 || user3) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px', backgroundColor: 'lightgray' }} className='w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px', backgroundColor: 'lightgray' }} className='w-50'></div>
            </div>
            <div className='mt-3'>
                <button onClick={() => signInWithGoogle()} className='btn w-100'>
                    <img src={google} alt="" />
                    Google Sign In
                </button>
                <button onClick={() => signInWithFacebook()} className='btn w-100'>
                    <img src={facebook} alt="" />
                    Facebook Sign In
                </button>
                <button onClick={() => signInWithGithub()} className='btn w-100'>
                    <img src={github} alt="" />
                    Github Sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;