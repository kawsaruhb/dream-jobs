import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollar } from '@fortawesome/free-solid-svg-icons'
import './FeaturedJobs.css'

const FeaturedJobs = ({job}) => {
    const {id, companyLogo, jobTitle, companyName, remoteOrOnsite, location, fulltimeOrPartTime, salary} = job;
    return (
        <div className='job-details-container'>
            <img src={companyLogo} alt="" />
            <h4>{jobTitle}</h4>
            <p>{companyName}</p>
            <div className='site-time'>
                <p className='remote-onsite'>{remoteOrOnsite}</p>
                <p className='full-part-time'>{fulltimeOrPartTime}</p>
            </div>
            <div className='location-salary'>
                <p><FontAwesomeIcon icon={faLocationDot} /> {location}</p>
                <p><FontAwesomeIcon icon={faDollar} /> {salary}</p>
            </div>
            <button className='btn-view-details'>View Details</button>
        </div>
    );
};

export default FeaturedJobs;