import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div>
            <p className='text-center py-2'><small>Copyright &copy; {year} All Rights Reserved</small></p>
        </div>
    );
};

export default Footer;