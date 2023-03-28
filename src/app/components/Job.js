import React from 'react'
import {formatDate} from '../util/moment';
import { deleteJob, handleEditAction } from '../features/job/jobSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

const Job = ({ company, jobLocation, position, jobType, status, createdAt, _id }) => {
    const dispatch = useDispatch();
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
                <p className='location'>{jobLocation}</p>
                <p className='date'>{formatDate(createdAt)}</p>
            </div>
            <div className='second-data'>
                <p className='type'>{jobType}</p>
                <p className='status'>{status}</p>
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