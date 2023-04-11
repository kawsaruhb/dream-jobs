import React, { useEffect, useState } from 'react';
import './Home.css'
import JobCategory from '../JobCategory/JobCategory';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('jobCategory.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const featuredJobs = useLoaderData().slice(0,4);

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
            <div className='category'>
                {
                    categories.map(category => <JobCategory
                        key={category._id}
                        category={category}
                    ></JobCategory>)
                }
            </div>

            <div className='featured-jobs-container'>
                <div className='job-category-container'>
                    <h2>Featured Jobs</h2>
                    <p><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
                </div>
                <div className='featured-jobs-details'>
                    {
                        featuredJobs.map(job => <FeaturedJobs
                        key={job.id}
                        job={job}
                        ></FeaturedJobs>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;