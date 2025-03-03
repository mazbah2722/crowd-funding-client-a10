import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1>Error</h1>
            <Link className='btn' to={'/'}>Back Home</Link>
        </div>
    );
};

export default ErrorPage;