import React, { useEffect, useState } from 'react';
import './JobDetail.css'
import { useLoaderData, useParams } from 'react-router-dom';
import Job from '../Job/Job';


const JobDetail = () => {
    const data = useLoaderData();
    // console.log(data);
    const { jobId } = useParams();
    // console.log(jobId) 
    const [job, setJob] = useState({});
    useEffect(() => {
        const jobData = data.find(dt => dt.id === jobId);
        setJob(jobData);
    }, [])
    // console.log(job)
    return (
        <>
            <h2 className='text-center mt-8 font-bold text-2xl'>Job Details</h2>
            <div className="job-details">
                <div className='details-card'>
                    <p className='mb-8'> <span className='font-bold'>Job Description:</span> {job?.jobDescription}</p>
                    <p className='mb-8'> <span className='font-bold'>Job Responsibility:</span> {job?.jobResponsibility}</p>
                    <p className='font-bold mb-4'>Educational Requirements:</p>
                    <p className='mb-4'>{job?.educationalRequirements}</p>
                    <p className='font-bold mb-4'>Experiences: </p>
                    <p>{job?.experiences}</p>
                </div>
                <div className="job-card">
                    <Job job={job} />
                    <button class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-44 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 my-4 ">Apply Now</button>
                </div>
            
            </div>
        </>
    );
};

export default JobDetail;