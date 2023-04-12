import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Applied = ({ dt }) => {
    const navigate = useNavigate()
    return (
        <div className='px-28 py-5  '>
            <div className="p-5 flex items-center gap-5 border">
                <div className='w-[240px] h-[210px] p-10 bg-stone-300 flex items-center justify-center rounded'>
                    <img className='w-full ' src={dt.companyLogo} alt="" />
                </div>
                <div className=' flex items-center justify-between w-[1070px]'>
                    <div className=''>
                        <h5 className='font-bold mb-2'>{dt.jobTitle}</h5>
                        <p className='mb-1'>{dt.companyName}</p>
                        <div className='flex gap-2 my-4'>
                            <p className='border border-blue-600 rounded text-blue-500 px-2 py-1'>{dt.remoteOrOnsite}</p>
                            <p className='border border-blue-600 rounded text-blue-500 px-2 py-1'>{dt.fulltimeOrPartTime}</p>
                        </div>
                        <div className='flex gap-4'>
                            <div className='flex gap-2'>
                                <img src="https://i.ibb.co/WNrn2TS/Location-Icon.png" alt="" />
                                <p>{dt.location}</p>
                            </div>
                            <div className='flex gap-2'>
                                <img src="https://i.ibb.co/smjQ91r/Frame.png" alt="" />
                                <p>{dt.salary}</p>
                            </div>
                        </div>
                    </div>
                    <Link to={`/jobdetail/${dt.id}`}><button className='border px-2 py-1 rounded bg-violet-600 text-white'>Details</button></Link>
                </div>

            </div>
        </div>
    );
};

export default Applied;