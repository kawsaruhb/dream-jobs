import React from 'react';
import './Job.css'
const Job = ({ job }) => {
    return (
        <div className='p-8 job-card-details'>
            <h3 className='font-bold'>Job Details</h3>
            <hr className='my-4' />
            <div className='flex items-center gap-2 my-4'>
                <img src="https://i.ibb.co/smjQ91r/Frame.png" alt="" />
                <p><span className='font-bold'>Salary :</span> {job?.salary}</p>
            </div>
            <div className='flex items-center gap-2'>
                <img src="https://i.ibb.co/G7M258D/Frame-1.png" alt="" />
                <p><span className='font-bold'>Job Title :</span> {job?.salary}</p>
            </div>
            <h3 className='font-bold my-6'>Contact Information</h3>
            <hr />
            <div className="flex items-center gap-2 my-4">
                <img src="https://i.ibb.co/hX85vLd/Frame-2.png" alt="" />
                <p><span className='font-bold'>Phone :</span> {job?.phone}</p>
            </div>
            <div className="flex items-center gap-2 my-4">
                <img src="https://i.ibb.co/gFnD9Hw/Frame-3.png" alt="" />
                <p><span className='font-bold'>Email :</span> {job?.email}</p>
            </div>
            <div className="flex items-center gap-2 my-4">
                <img src="https://i.ibb.co/m4ZGZHX/Frame-4.png" alt="" />
                <p><span className='font-bold'>Address :</span> {job?.location}</p>
            </div>
        </div>
    );
};

export default Job;