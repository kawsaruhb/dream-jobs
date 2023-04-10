import React from 'react';
import './JobCategory.css'

const JobCategory = ({category}) => {
    const {picture, CategoryName, availableJobs, _id} = category;
    return (
        <div>
            <div className='category-details'>
                <img src={picture} alt="" />
                <h5><b>{CategoryName}</b></h5>
                <p>{availableJobs}</p>
            </div>
        </div>
    );
};

export default JobCategory;