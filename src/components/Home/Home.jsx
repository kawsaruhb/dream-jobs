import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='banner-container'>
                <div className='banner-details'>
                    <h1><b> One Step Closer To Your <span className='text-dream'>Dream Job</span></b></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button>Get Started</button>
                </div>
                <img src="https://i.ibb.co/hFn3YFg/P3-OLGJ1-copy-1.png" alt="" />
            </div>
            <div className='job-category-container'>
                <h2>Job Category List</h2>
                <p><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
            </div>
        </div>
    );
};

export default Home;