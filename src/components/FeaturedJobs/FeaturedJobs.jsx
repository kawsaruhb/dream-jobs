import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollar } from '@fortawesome/free-solid-svg-icons'
import './FeaturedJobs.css'
import { Link, useNavigate } from 'react-router-dom';
import JobDetail from '../JobDetail/JobDetail';

const FeaturedJobs = ({job}) => {
    const {id, companyLogo, jobTitle, companyName, remoteOrOnsite, location, fulltimeOrPartTime, salary} = job;
    const navigate = useNavigate();
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
                <p><FontAwesomeIcon icon={faDollar} />Salary: {salary}</p>
            </div>
            <button onClick={ () => navigate(`jobdetail/${id}`)} className='p-2 btn-view-details'>View Details</button>
        </div>
    );
};

export default FeaturedJobs;