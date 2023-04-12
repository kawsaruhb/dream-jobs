import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav className='py-8 header-container'>
            <h2>Dr&euro;amJobs&reg;</h2>
            <div>
                <ActiveLink className='no-underline' to='/'>Home</ActiveLink>
                <ActiveLink to='/statistics'>Statistics</ActiveLink>
                <ActiveLink to='/applied'>Applied Jobs</ActiveLink>
                <ActiveLink to='/blog'>Blog</ActiveLink>
            </div>
            <button className='p-2'>Start Applying</button>
        </nav>
    );
};

export default Header;