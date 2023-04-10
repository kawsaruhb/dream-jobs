import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header-container'>
            <h2>Dr&euro;amJobs&reg;</h2>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/applied'>Applied Jobs</Link>
                <Link to='/blog'>Blog</Link>
            </div>
            <button>Start Applying</button>
        </nav>
    );
};

export default Header;