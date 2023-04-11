import React from 'react';
import './FeaturedJobs.css'

const FeaturedJobs = ({job}) => {
    const {id, companyLogo, jobTitle, companyName, remoteOrOnsite, location, fulltimeOrPartTime, salary} = job;
    return (
        <div className='job-details-container'>
            <img src={companyLogo} alt="" />
            <h5>{jobTitle}</h5>
            <p>{companyName}</p>
            <div>
                <p>{remoteOrOnsite}</p>
                <p>{fulltimeOrPartTime}</p>
            </div>
            <div>
                <p>{location}</p>
                <p>{salary}</p>
            </div>
            <button>View Details</button>
        </div>
    );
};

export default FeaturedJobs;