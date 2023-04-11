import React from 'react'
import {formatDate} from '../util/moment';
import { deleteJob, handleEditAction } from '../features/job/jobSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt, FaFlask } from 'react-icons/fa';

const Job = ({ company, jobLocation, position, jobType, jobStatus, createdAt, _id }) => {
    // add recruiter { name, email, contact number }
    const dispatch = useDispatch();
    let statusClassName = 'pending';
    if(jobStatus === 'interview') {
        statusClassName = 'interview'
    }
    if(jobStatus === 'declined') {
        statusClassName = 'declined'
    }
    return (
        <article className='job'>
            <header>
                <div className='company-initial'>D</div>
                <div className='company-info'>
                    <h4>{position}</h4>
                    <p>{company}</p>
                </div>
            </header>
            <hr />
            <div className='application-data'>
                <div className='first-data'>
                    <p className='location'>
                        <FaLocationArrow />
                        {jobLocation}
                    </p>
                    <p className='date'>
                        <FaCalendarAlt />
                        {formatDate(createdAt)}
                    </p>
                </div>
                <div className='second-data'>
                    <p className='type'>
                        <FaBriefcase />
                        {jobType}
                    </p>
                    <p className={`status ${statusClassName}`}>
                        <FaFlask />
                        {jobStatus}
                    </p>
                </div>
                <div className='edit-delete-controller'>
                    <Link 
                        to='/add-job'
                        className='edit-btn btn'
                        onClick={() => dispatch(handleEditAction(_id))}
                    >
                        Edit
                    </Link>
                    <button 
                        className='delete-btn btn'
                        onClick={() => dispatch(deleteJob(_id))}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </article> 
  )
}

export default Job;