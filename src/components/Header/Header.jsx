import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav className='header-container'>
            <h2>Dr&euro;amJobs&reg;</h2>
            <div>
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/statistics'>Statistics</ActiveLink>
                <ActiveLink to='/applied'>Applied Jobs</ActiveLink>
                <ActiveLink to='/blog'>Blog</ActiveLink>
            </div>
            <button>Start Applying</button>
        </nav>
    );
};

export default Header;