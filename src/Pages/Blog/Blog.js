import React from 'react';
import toast from 'react-hot-toast';

const Blog = () => {
    const makeToast = () => {
        toast('hello world')
        toast('another')
    }
    return (
        <div>
            <h2>This is blog page</h2>
            <button onClick={makeToast}>make toast</button>
        </div>
    );
};

export default Blog;